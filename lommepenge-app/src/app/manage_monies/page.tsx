import AddMoniesForm from "@/components/Monies/AddMoniesForm";
import addMoney from "./addMoney";
import getMonies from "./getMonies";
import removeMoney from "./removeMoney";
import MoniesList from "@/components/Monies/MoniesList";

export default async function Home() {
    const moneyList = await getMonies();
    return (
        <div className='flex flex-col justify-center items-center min-h-full'>
            <h1 className="text-lg">
                Hello! Manage monies here!
            </h1>
            return <>
                <AddMoniesForm callback={addMoney} payeeList={[]} />
                <MoniesList currentlist={moneyList} deleteCallback={removeMoney} />
            </>
        </div>
    )
}
