import { connectToDatabase } from "$lib/utils/database";

export async function load() {
    const db = await connectToDatabase();
    const items = await db.collection('items').find().toArray();
    return { items };
 }