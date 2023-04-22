"use server"
import User from "@/models/user";
import getDb from "../database";
import { DATABASE_COLLECTIONS, DATABASE_NAMES } from "@/constants/database_constants";

const getUserNames = async () => {
    const myDb = await getDb(DATABASE_NAMES.MAIN_DB);
    const receiversCol = myDb.collection<User>(DATABASE_COLLECTIONS.USER_DB);
    return await receiversCol.find().toArray();
}

export default getUserNames;