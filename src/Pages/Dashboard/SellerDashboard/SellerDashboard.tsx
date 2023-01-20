import SellerDashboardForm from "./SellerDashboardForm"
import SellerDashboardTable from "./SellerDashboardTable"
import {
    useQuery,
} from "@tanstack/react-query";

const SellerDashboard = () => {
    const { isLoading, error, data: books, refetch } = useQuery({
        queryKey: ["book"],
        queryFn: async () => {
            const res = await fetch(`https://bookship-server-zamanxd.vercel.app/books`)
            const data = await res.json()
            return data
        },

    });
    console.log(books)
    return (
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div className="md:flex flex-row items-baseline gap-5">
                <div className="">
                    <SellerDashboardForm  refetch ={refetch}/>
                </div>
                <div className="flex-1 grid grid-cols-3 flex-wrap">
                    <div className="shadow-lg px-5 py-3 text-center">
                        <h1 className="text-2xl font-semibold">20</h1>
                        <p>Total Book</p>
                    </div>
                    <div className="shadow-lg px-5 py-3 text-center">
                        <h1 className="text-2xl font-semibold">15</h1>
                        <p>Total Sell</p>
                    </div>
                    <div className="shadow-lg px-5 py-3 text-center">
                        <h1 className="text-2xl font-semibold">3</h1>
                        <p>Today Sell</p>
                    </div>
                </div>
            </div>
            <SellerDashboardTable books={books} />
        </div>

    )
}

export default SellerDashboard