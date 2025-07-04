"use client"
import { useEffect  } from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import React from 'react'
import Dashboard from "@/components/Dashboard"
const Page = () => {

  return (
    useEffect(() => {
      document.title = "Dashboard - Get Me a Chai"
    }, []),
    <div>
      <Dashboard />
    </div>
  )
}

export default Page


