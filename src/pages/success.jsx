import React from 'react'
import Header from '../components/Header'
import {CheckCircleIcon} from '@heroicons/react/solid'
import { useRouter } from 'next/router'

function Success() {
    const router = useRouter()
  return (
    <div className=' bg-gray-100 h-screen'>
        <Header/>
        <main className=' max-w-lg mx-auto'>
            <div className='flex flex-col p-10 bg-white'>
                <div className=' flex items-center space-x-2 mb-5'>
                    <CheckCircleIcon className='text-green-500 h-10'/>
                    <h1 className='text-3xl'> Thank You, Your order has been confirmed</h1>
                </div>
                <p>{`Thank you for your recent purchase. We are honored to gain you as a customer and hope to serve you for a long time. Hey, just want to drop a quick note to express our genuine gratitude. Your purchase allows us at Amazon to continue to do what we love and provide you with quality products`}</p>
                <button className='button mt-8' onClick={ () => router.push('/orders')}>Go to my Order</button>
            </div>
        </main>
    </div>
  )
}

export default Success