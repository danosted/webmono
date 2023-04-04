import addUser from "./addUser";
import getUserNames from "./getUserNames";
import UserManager from "@/components/Users/UserManager";
import removeUser from "./removeUser";

export default async function Home() {
    return (
        <div className='flex flex-col justify-center items-center min-h-full'>
            <h1 className="text-lg">
                Hello! Add a new user here!
            </h1>
            <UserManager
                addUserCallback={addUser}
                getReceiverList={getUserNames}
                deleteUserCallback={removeUser}
            />
        </div>
    )
}
