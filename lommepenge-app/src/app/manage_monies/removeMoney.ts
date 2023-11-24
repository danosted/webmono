"use server"
import { DATABASE_COLLECTIONS, DATABASE_NAMES } from "@/constants/database_constants";
import getDb from "../database";
import Money from "@/models/money";
import { ObjectId } from "mongodb";

const removeMoney = async (id: ObjectId | string) => {
    try {
        const myDb = await getDb(DATABASE_NAMES.MAIN_DB);
        const receiversCol = myDb.collection<Money>(DATABASE_COLLECTIONS.MONEY_DB);
        const res = await receiversCol.deleteOne({ _id: new ObjectId(obj._id) });
    }
    catch (e) {
        console.error(e);
    }
}

export default removeMoney;