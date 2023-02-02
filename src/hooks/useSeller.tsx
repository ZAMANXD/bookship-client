import { useEffect, useState } from "react";


const useSeller = (email: string) => {

    const [isSeller, setIsSeller] = useState<any>(false)
    const [sellerLoading, setSellerLoading] = useState<any>(true)

    useEffect(() => {
        // isSeller api 
        if (email) {
            fetch(`https://bookship-server-zamanxd.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSeller(data.isSeller)
                    setSellerLoading(false)
                })
        }
    }, [email])

    return [isSeller, sellerLoading]

}

export default useSeller;