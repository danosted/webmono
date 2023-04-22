"use client"
import User from "@/models/user";
import { ObjectId, WithId } from "mongodb";
import { TrashIcon } from '@heroicons/react/24/solid'
import { MouseEvent, useEffect, useState } from "react";

const ReceiverList = () => {

    const [currentList, setCurrentList] = useState<Array<WithId<User>>>([]);
    const onDeleteClick = async (e: MouseEvent<HTMLButtonElement>, id: ObjectId) => {
        e.preventDefault();

    }
    useEffect(() => {
        async function getUserListAsync() {
            const userListResponse = await fetch('api/users', {
                method: 'GET'
            });
            const userList = await userListResponse.json();
            console.log(userList);
            setCurrentList(JSON.parse(userList) );
        }
        getUserListAsync();
    }, []);
    return (
        <ul>
            {currentList.map(receiver => {
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