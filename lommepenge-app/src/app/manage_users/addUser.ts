"use server"

import User from "@/models/user";
import getDb from "../database";
import { DATABASE_COLLECTIONS, DATABASE_NAMES } from "@/constants/database_constants";

const addUser = async (name: string) => {
    const myDb = await getDb(DATABASE_NAMES.MAIN_DB);
    const receiversCol = await myDb.collection<User>(DATABASE_COLLECTIONS.USER_DB);
    await receiversCol.insertOne({ name: name });
}

export default addUser;