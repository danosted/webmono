"use server"

import User from "@/models/user";
import getDb from "../database";
import { ObjectId } from "mongodb";
import { DATABASE_COLLECTIONS, DATABASE_NAMES } from "@/constants/database_constants";

const removeUser = async (id: ObjectId | string) => {
    try {
        const myDb = await getDb(DATABASE_NAMES.MAIN_DB);
        const receiversCol = myDb.collection<User>(DATABASE_COLLECTIONS.USER_DB);
        const res = await receiversCol.deleteOne({ _id: new ObjectId(id) });
    }
    catch (e) {
        console.error(e);
    }
}

export default removeUser;