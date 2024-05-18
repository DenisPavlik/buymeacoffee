'use client'
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

export default function DonationStatus() {
  const [show, setShow] = useState(false)
  useEffect(()=>{
    if (location.href.includes('?success=1') && !show) {
      setShow(true)
    }
    if (show) {
      toast.success('Thank for your donation')
    }
  }, [show])
  return (
    <>
    </>
  )
}