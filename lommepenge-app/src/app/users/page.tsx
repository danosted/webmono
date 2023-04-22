import AddUserForm from "@/components/Users/AddUser";
import ReceiverList from "@/components/Users/UserList";

export default async function Home() {
    return (
        <div className='flex flex-col justify-center items-center min-h-full'>
            <h1 className="text-lg">
                Hello! Add a new user here!
            </h1>
            <AddUserForm />
            <ReceiverList />
        </div>
    )
}
