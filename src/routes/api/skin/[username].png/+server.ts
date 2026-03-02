import { getSkin, valid } from "$lib/rendering/mojang";
import { json } from "@sveltejs/kit";

export async function GET({ params }) {
	if (!params?.username || !valid(params.username)) {
		return json({ error: "Invalid or missing username" }, { status: 400 });
	}

	try {
		const skinURL = await getSkin(params.username);
		const response = await fetch(skinURL);
		const buffer = await response.arrayBuffer();

		return new Response(buffer, {
			status: 200,
			headers: {
				"Content-Type": "image/png",
				"Cache-Control": "public, max-age=300"
			}
		});
	} catch (e) {
		return json({ error: "Failed to fetch skin" }, { status: 400 });
	}
}
