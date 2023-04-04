"use server"

import { DATABASE_COLLECTIONS, DATABASE_NAMES } from "@/constants/database_constants";
import getDb from "../database";
import Money from "@/models/money";

const getMonies = async () => {
    const myDb = await getDb(DATABASE_NAMES.MAIN_DB);
    const receiversCol = myDb.collection<Money>(DATABASE_COLLECTIONS.MONEY_DB);
    return await receiversCol.find().toArray();
}

export default getMonies;