import { getSkin, valid } from "$lib/rendering/mojang";
import { Canvas, loadImage } from "skia-canvas";
import { json } from "@sveltejs/kit";

// Canvas is 16×32 skin pixels (natural front-view body ratio)
const GRID_W = 16;
const GRID_H = 32;

export async function GET({ params, url }) {
	if (!params?.username || !valid(params.username)) {
		return json({ error: "Invalid or missing username" }, { status: 400 });
	}

	try {
		// size = output height in pixels, width scales proportionally
		const size  = Math.min(1024, Math.max(32, parseInt(url.searchParams.get("size") ?? "256")));
		const overlay = url.searchParams.get("overlay") !== "false";

		const skinURL = await getSkin(params.username);
		const skin = await loadImage(skinURL);

		const scale  = size / GRID_H;
		const canvas = new Canvas(GRID_W * scale, GRID_H * scale);
		const ctx    = canvas.getContext("2d");
		ctx.imageSmoothingEnabled = false;

		const is64 = skin.height >= 64;
		const d = (sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number) =>
			ctx.drawImage(skin, sx, sy, sw, sh, dx * scale, dy * scale, dw * scale, dh * scale);

		// ── Head ──────────────────────────────────────────────
		d(8, 8, 8, 8,  4, 0, 8, 8);                         // face
		if (overlay) d(40, 8, 8, 8, 4, 0, 8, 8);            // hat

		// ── Body ──────────────────────────────────────────────
		d(20, 20, 8, 12, 4, 8, 8, 12);
		if (overlay && is64) d(20, 36, 8, 12, 4, 8, 8, 12);

		// ── Right arm (player's right = viewer's left) ────────
		d(44, 20, 4, 12, 0, 8, 4, 12);
		if (overlay && is64) d(44, 36, 4, 12, 0, 8, 4, 12);

		// ── Left arm (player's left = viewer's right) ─────────
		if (is64) {
			d(36, 52, 4, 12, 12, 8, 4, 12);
			if (overlay) d(52, 52, 4, 12, 12, 8, 4, 12);
		} else {
			// old skin: mirror the right arm
			ctx.save();
			ctx.scale(-1, 1);
			ctx.drawImage(skin, 44, 20, 4, 12, -16 * scale, 8 * scale, 4 * scale, 12 * scale);
			ctx.restore();
		}

		// ── Right leg ─────────────────────────────────────────
		d(4, 20, 4, 12, 4, 20, 4, 12);
		if (overlay && is64) d(4, 36, 4, 12, 4, 20, 4, 12);

		// ── Left leg ──────────────────────────────────────────
		if (is64) {
			d(20, 52, 4, 12, 8, 20, 4, 12);
			if (overlay) d(4, 52, 4, 12, 8, 20, 4, 12);
		} else {
			ctx.save();
			ctx.scale(-1, 1);
			ctx.drawImage(skin, 4, 20, 4, 12, -12 * scale, 20 * scale, 4 * scale, 12 * scale);
			ctx.restore();
		}

		const buffer = await canvas.png;
		return new Response(buffer, {
			status: 200,
			headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=300" }
		});
	} catch (e) {
		return json({ error: "Failed to render body" }, { status: 400 });
	}
}
