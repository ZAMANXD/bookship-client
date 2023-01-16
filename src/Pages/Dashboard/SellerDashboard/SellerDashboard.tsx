import SellerDashboardForm from "./SellerDashboardForm"
import SellerDashboardTable from "./SellerDashboardTable"

const SellerDashboard = () => {
    return (
        <div>
            <div className="md:flex flex-row items-baseline gap-5">
                <div className="">
                    <SellerDashboardForm />
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
            <SellerDashboardTable />
        </div>

    )
}

export default SellerDashboard