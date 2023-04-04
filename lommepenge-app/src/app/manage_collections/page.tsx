import addCollection from "./addCollection";
import getCollections from "./getCollections";
import removeCollection from "./removeCollection";
import CollectionManager from "@/components/Collections/CollectionManager";

export default async function Home() {
    return (
        <div className='flex flex-col justify-center items-center min-h-full'>
            <h1 className="text-lg">
                Hello! Manage collections here!
            </h1>
            <CollectionManager
                addCallback={addCollection}
                getList={getCollections}
                deleteCallback={removeCollection}
            />
        </div>
    )
}
