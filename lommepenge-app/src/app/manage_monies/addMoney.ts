"use server"
import { DATABASE_COLLECTIONS, DATABASE_NAMES } from "@/constants/database_constants";
import getDb from "../database";
import Money from "@/models/money";

const addMoney = async (money: Money) => {
    const myDb = await getDb(DATABASE_NAMES.MAIN_DB);
    const receiversCol = myDb.collection<Money>(DATABASE_COLLECTIONS.MONEY_DB);
    await receiversCol.insertOne(money);
}

export default addMoney;