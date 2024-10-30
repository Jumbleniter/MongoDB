import { connectToDatabase } from '$lib/utils/database';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
   const formData = await request.json();
   const db = await connectToDatabase();
   const collection = db.collection('items');
   await collection.insertOne(formData);

   return new Response(JSON.stringify({ success: true }), { status: 200 });
};

