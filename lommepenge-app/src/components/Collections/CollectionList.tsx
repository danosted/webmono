import { TrashIcon } from '@heroicons/react/24/solid'
import { MouseEvent } from "react";
import MyCollection from "@/models/collection";

type CollectionListProps = {
    currentlist: MyCollection[];
    deleteCallback: (name: string) => Promise<void>
}

const CollectionList = ({ currentlist, deleteCallback }: CollectionListProps) => {

    const onDeleteClick = async (e: MouseEvent<HTMLButtonElement>, name: string) => {
        e.preventDefault();
        await deleteCallback(name);
    }
    return (
        <ul>
            {currentlist.map(receiver => {
                return (
                    <li
                        key={receiver.collectionName}
                        className="flex flex-row align-middle justify-center gap-x-2">
                        <span>
                            {receiver.collectionName}
                        </span>
                        <button type="button" onClick={e => onDeleteClick(e, receiver.collectionName)}>
                            <TrashIcon className="w-6 h-6"></TrashIcon>
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default CollectionList;