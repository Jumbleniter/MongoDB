import { MongoClient, Db } from 'mongodb';

let client: MongoClient;
console.log(import.meta.env.VITE_MONGODB_URI)
const uri = import.meta.env.VITE_MONGODB_URI || process.env.VITE_MONGODB_URI;
if (!uri) {
    throw new Error('MongoDB URI not defined');
}



export async function connectToDatabase(): Promise<Db> {
   if (!client) {
      client = new MongoClient(uri);
      await client.connect();
   }
   return client.db('KrunchyKookies');
}
