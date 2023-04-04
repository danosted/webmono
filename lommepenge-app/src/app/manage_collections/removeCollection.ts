"use server"

import getDb from "../database";

const removeCollection = async (name: string) => {
    try {
        const myDb = await getDb("MoneyHandler");
        await myDb.dropCollection(name);
    }
    catch (e) {
        console.error(e);
    }
}

export default removeCollection;