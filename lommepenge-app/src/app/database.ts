import clientPromise from '../../lib/mongodb'

const getDb = async (dbName: string) => {
    const client = await clientPromise;
    const db = client.db(dbName);
    db.createCollection
    const isConnected = db !== undefined;
    return db;
}

export default getDb;