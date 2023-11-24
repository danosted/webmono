"use client"
import { Db } from "mongodb";

async function getFromDb<TType extends Document>(myDb: Db, dbname: string) {
    const receiversCol = myDb.collection<TType>(dbname);
    return await receiversCol.find().toArray();
}

export default getFromDb;