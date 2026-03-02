import { getSkin, valid } from "$lib/rendering/mojang";
import { Canvas, loadImage } from "skia-canvas";
import { json } from "@sveltejs/kit";

export async function GET({ params, url }) {
	if (!params?.username || !valid(params.username)) {
		return json({ error: "Invalid or missing username" }, { status: 400 });
	}

	try {
		const size = Math.min(512, Math.max(8, parseInt(url.searchParams.get("size") ?? "128")));
		const overlay = url.searchParams.get("overlay") !== "false";

		const skinURL = await getSkin(params.username);
		const skin = await loadImage(skinURL);

		const canvas = new Canvas(size, size);
		const ctx = canvas.getContext("2d");
		ctx.imageSmoothingEnabled = false;

		// Face (8,8 → 16,16 on skin)
		ctx.drawImage(skin, 8, 8, 8, 8, 0, 0, size, size);

		// Hat overlay (40,8 → 48,16 on skin)
		if (overlay) {
			ctx.drawImage(skin, 40, 8, 8, 8, 0, 0, size, size);
		}

		const buffer = await canvas.png;
		return new Response(buffer, {
			status: 200,
			headers: {
				"Content-Type": "image/png",
				"Cache-Control": "public, max-age=300"
			}
		});
	} catch (e) {
		return json({ error: "Failed to render head" }, { status: 400 });
	}
}
