import AddMoniesForm from "@/components/Monies/AddMoniesForm";

export default async function Home() {
    const bla = async () => {

    }
    return (
        <div className='flex flex-col justify-center items-center min-h-full'>
            <h1 className="text-lg">
                Hello! Manage monies here!
            </h1>
            <AddMoniesForm callback={bla} />
        </div>
    )
}
