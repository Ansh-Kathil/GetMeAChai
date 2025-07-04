"use client"
import { initiate } from '@/actions/useraction'
import React, { use, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Script from 'next/script'
import { get } from 'mongoose'
import { useSearchParams } from 'next/navigation'
import { fetchuser, fetchpayments } from '@/actions/useraction'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify'
import { useRouter } from 'next/navigation'


const Paymentpage = ({ username }) => {
    const [paymentform, setPaymentform] = useState({name: "", message: "", amount: 0})
    const [currentuser, setcurrentuser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()


useEffect(() => {
    getData();
}, []);

    useEffect(() => {
        if(searchParams.get('paymentdone') === 'true' ){
        toast('Thanks for the donation!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Bounce
        });
    }
    router.push(`/${username}`)
}, [])

    const getData = async (params) => {
        let u = await fetchuser(username)
        setcurrentuser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    }

    const pay = async (amount) => {
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id;
        var options = {

            key: currentuser.razorpayid, // Replace with your Razorpay key_id
            amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: 'INR',
            name: 'Buy Me a Chai',
            description: 'Test Transaction',
            order_id: orderId, // This is the order_id created in the backend
            callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/razorpay`, // Your success URL
            prefill: {
                name: 'Gaurav Kumar',
                email: 'gaurav.kumar@example.com',
                contact: '9999999999'
            },
            theme: {
                color: '#F37254'
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }

    const handlechange = (e) => {
        setPaymentform({
            ...paymentform,
            [e.target.name]: e.target.value
        })
    }

    

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


            <div className='cover w-full relative'>
                <img className='object-cover w-full h-48  md:h-[350px]' src={currentuser.coverpic} alt="" />
                <div className='absolute -bottom-20 right-[38vw] md:right-[45vw] border-2 border-white overflow-hidden rounded-full size-36'>
                    <img className='rounded-full object-cover size-36 bg-black' width={128} height={128} src={currentuser.profilepic} alt="" />
                </div>
            </div>
            <div className="info flex  justify-center items-center my-24 flex-col gap-2">
                <div className='font-bold text-lg'>
                    @{username}

                </div>
                <div className='text-slate-400'>
                    Lets help {username} to get a chai!

                </div>
                <div className='text-slate-400'>
                    {payments.length} Payments . ₹{payments.reduce((a,b)=>a+ b.amount , 0)} raised

                </div>
                <div className=" flex  flex-col md:flex-row gap-3 w-[80%] mt-11">
                    <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h2 className='text-2xl  my-5 font-bold '>Top 10 Supporters</h2>
                        <ul className='mx-5 text-lg'>
                            {payments.length === 0 && <div className='text-center text-slate-400'>No Payments Yet</div>}
                            {payments.map((p, i) => (
                                <li key={i} className='my-2 flex gap-2  items-center'>
                                    <img width={33} src="/avatar.gif" alt="user avatar" />
                                    <span>
                                        {p.name} donated <span className='text-bold'>₹{p.amount}</span>  with a message "{p.message}"
                                    </span>
                                </li>
                            ))}

                        </ul>
                    </div>

                    <div className="makepayment w-full md:w-1/2 rounded-lg bg-slate-900 text-white p-10">
                        <h2 className='text-2xl fold-bold my-5 '>Make a Payment</h2>
                        <div className='flex gap-2 flex-col'>

                            <input type="text" name='name' onChange={handlechange} value={paymentform.name || ""} className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                            <input type="text" name='message' onChange={handlechange} value={paymentform.message || ""} className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                            <input type="number" min='0' name='amount' onChange={handlechange} value={paymentform.amount || ""} className='w-full no-arrow  p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />

                            <button disabled={paymentform.amount <= 0 || paymentform.name?.length < 3 || paymentform.message?.length < 3} onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} className='  text-white bg-gradient-to-br disabled:from-purple-100 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                                Pay</button>

                        </div>
                        or choose from these amounts
                        <div className='flex flex-col md:flex-row gap-2 mt-3'>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(10000)} >₹100</button>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(50000)} >₹500</button>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(100000)} >₹1000</button>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(500000)} >₹5000</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Paymentpage
