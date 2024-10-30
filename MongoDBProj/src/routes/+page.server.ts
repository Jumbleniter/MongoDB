import { connectToDatabase } from "$lib/utils/database";
import type { ObjectId } from 'mongodb';

export async function load() {
    const db = await connectToDatabase();
    const items = await db.collection('items').find().toArray();

    // Convert ObjectId to string
    const serializedItems = items.map(item => ({
        ...item,
        _id: (item._id as ObjectId).toString()
    }));

    return {
        items: serializedItems
    };
}