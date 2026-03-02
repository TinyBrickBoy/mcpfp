import { getUUID, valid } from "$lib/rendering/mojang";
import { json } from "@sveltejs/kit";

export async function GET({ params }) {
	if (!params?.username || !valid(params.username)) {
		return json({ error: "Invalid or missing username" }, { status: 400 });
	}

	try {
		const uuid = await getUUID(params.username);
		return json({ username: params.username, uuid });
	} catch (e) {
		return json({ error: "Player not found" }, { status: 404 });
	}
}
