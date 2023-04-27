import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Verify() {
    const router = useRouter()
    const {email} = router.query;
    const {address} = router.query;
    const [otp, setOtp] = useState('')
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <p
        className={`font-display text-4xl xl:text-8xl xl:leading-tight`}
      >
        Verify Email
      </p>
      <p className=" text-md font-[500] font-display mt-2">
        Enter the code we sent to your email address to verify your account.
      </p>
        <div className="flex flex-col items-center justify-center mt-10">
            <input
                className="border-black text-center border-none text-4xl xl:text-8xl xl:leading-tight caret-unselected-gray placeholder:text-unselected-gray"
                size="10"
                placeholder="Enter Code"
                onChange={(e) => setOtp(e.target.value)}
            />
            <button className="bg-black text-white text-lg font-display font-[500] mt-5 px-5 py-2 rounded-md"
                onClick={() => {
                    checkOTP({otp, email, address}).then((data) => {
                        if (data.status === 'success') {
                            router.push('/')
                        }
                        else{
                            alert('Invalid OTP')
                        }

                    })
                }}
            >
                Verify
            </button>

        </div>
    </div>
  )
}


async function checkOTP({otp, email, address}){
  // alert(address)
    const res = await fetch('/api/emailOTP', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({otp, email, address}),
    })
    const data = await res.json()
    console.log(data)
    if (data.message === 'OTP verified') {
        return {status: 'success'}
    }
    return {status: 'error'}
}