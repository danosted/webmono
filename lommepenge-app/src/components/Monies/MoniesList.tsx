"use client"
import { TrashIcon } from '@heroicons/react/24/solid'
import { MouseEvent } from "react";
import Money from '@/models/money';
import { WithId } from 'mongodb';

type MoniesListProps = {
    currentlist: Array<WithId<Money>>;
    deleteCallback: (id: string) => Promise<void>
}

const MoniesList = ({ currentlist, deleteCallback }: MoniesListProps) => {

    const onDeleteClick = async (e: MouseEvent<HTMLButtonElement>, id: string | undefined) => {
        e.preventDefault();
        if (!id) return;
        await deleteCallback(id);
    }
    return (
        <ul>
            {currentlist.map(receiver => {
                return (
                    <li
                        key={receiver._id?.toString()}
                        className="flex flex-row align-middle justify-center gap-x-2">
                        <span>
                            {receiver.name}
                        </span>
                        <button type="button" onClick={e => onDeleteClick(e, receiver._id?.toString())}>
                            <TrashIcon className="w-6 h-6"></TrashIcon>
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default MoniesList;