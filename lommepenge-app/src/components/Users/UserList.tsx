import User from "@/models/user";
import { ObjectId, WithId } from "mongodb";
import { TrashIcon } from '@heroicons/react/24/solid'
import { MouseEvent } from "react";

type ReceiverListProps = {
    currentlist: Array<WithId<User>>;
    deleteCallback: (id: ObjectId) => Promise<void>
}

const ReceiverList = ({ currentlist, deleteCallback }: ReceiverListProps) => {

    const onDeleteClick = async (e: MouseEvent<HTMLButtonElement>, id: ObjectId) => {
        e.preventDefault();
        await deleteCallback(id);
    }
    return (
        <ul>
            {currentlist.map(receiver => {
                return (
                    <li
                        key={receiver._id.toString()}
                        className="flex flex-row align-middle justify-center gap-x-2">
                        <span>
                            {receiver.name}
                        </span>
                        <button type="button" onClick={e => onDeleteClick(e, receiver._id)}>
                            <TrashIcon className="w-6 h-6"></TrashIcon>
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default ReceiverList;