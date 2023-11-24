"use client"
import { MongoClient } from 'mongodb';

const getClientDb = async (clientService: Promise<MongoClient> | undefined, dbName: string) => {
    if(!clientService) return;
    const client = await clientService;
    const db = client.db(dbName);
    return db;
}

export default getClientDb;