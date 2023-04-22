import AddCollectionForm from "@/components/Collections/AddCollectionForm";
import addCollection from "./addCollection";
import getCollections from "./getCollections";
import removeCollection from "./removeCollection";
import CollectionList from "@/components/Collections/CollectionList";

export default async function Home() {
    const collections = await getCollections();
    return (
        <div className='flex flex-col justify-center items-center min-h-full'>
            <h1 className="text-lg">
                Hello! Manage collections here!
            </h1>
            <AddCollectionForm callback={addCollection} />
            <CollectionList currentlist={collections} deleteCallback={removeCollection} />
        </div>
    )
}
