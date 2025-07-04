import React from 'react'
import Paymentpage from '@/components/Paymentpage'
import { notFound } from "next/navigation"
import connectDB from '@/db/connectDb'
import User from '@/models/User'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";




const Username = async ({ params }) => {
  const session = await getServerSession();


  if (!session) {
    redirect("/login");
  }
  const checkuser = async () => {
    await connectDB()

    let u = await User.findOne({ username: params.username }).lean(); if (!u) {
      return notFound()
    }
  }
  await checkuser()

  return (
    <>
      <Paymentpage username={params.username} />
    </>
  )

}

export default Username

export async function generateMetadata({ params }) {

  return {
    title: `${params.username} - Get Me a Chai`,

  }
}

