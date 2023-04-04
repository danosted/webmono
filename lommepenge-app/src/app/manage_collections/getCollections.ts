"use server"

import { DATABASE_NAMES } from "@/constants/database_constants";
import getDb from "../database";
import MyCollection from "@/models/collection";

const getCollections = async (): Promise<MyCollection[]> => {
    const myDb = await getDb(DATABASE_NAMES.MAIN_DB);
    const collections = await myDb.collections();
    return collections.map<MyCollection>(c => { return { collectionName: c.collectionName } });
}

export default getCollections;