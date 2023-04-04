import addMoney from "./addMoney";
import getMonies from "./getMonies";
import removeMoney from "./removeMoney";
import MoniesManager from "@/components/Monies/MoniesManager";

export default async function Home() {
    return (
        <div className='flex flex-col justify-center items-center min-h-full'>
            <h1 className="text-lg">
                Hello! Manage monies here!
            </h1>
            <MoniesManager
                addCallback={addMoney}
                getList={getMonies}
                deleteCallback={removeMoney}
            />
        </div>
    )
}
