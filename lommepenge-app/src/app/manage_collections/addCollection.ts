"use server"

import { DATABASE_NAMES } from "@/constants/database_constants";
import getDb from "../database";

const addCollection = async (name: string) => {
    const myDb = await getDb(DATABASE_NAMES.MAIN_DB);
    myDb.createCollection(name, { capped: false })
}

export default addCollection;