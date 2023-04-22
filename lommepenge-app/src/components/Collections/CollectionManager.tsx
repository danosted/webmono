"use client"
import { useEffect, useState } from "react";
import AddCollectionForm from "./AddCollectionForm";
import CollectionList from "./CollectionList";
import MyCollection from "@/models/collection";

type CollectionManagerProps = {
  addCallback: (name: string) => Promise<void>;
  getList: () => Promise<MyCollection[]>;
  deleteCallback: (name: string) => Promise<void>;
}

const CollectionManager = ({ addCallback, getList, deleteCallback }: CollectionManagerProps) => {

  const [collectionList, setCollectionList] = useState<MyCollection[]>([]);

  const getLocalAsync = async () => {
    const collections = await getList();
    setCollectionList(collections)
  }
  const addLocalAsync = async (name: string) => {
    await addCallback(name);
    await getLocalAsync();
  }
  const deleteLocalAsync = async (name: string) => {
    await deleteCallback(name);
    await getLocalAsync();
  }

  useEffect(() => {
    getLocalAsync();

  }, [getLocalAsync]);

  return <>
    <AddCollectionForm callback={addLocalAsync} />
    <CollectionList currentlist={collectionList} deleteCallback={deleteLocalAsync} />
  </>
}

export default CollectionManager;