import Image from 'next/image'
import React from 'react'
import {StarIcon} from '@heroicons/react/solid'
import CurrencyFormat from 'react-currency-format'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'



function CheckOutProduct({id,title,price,rating,description,category,image,hasPrime}) {

    const dispath = useDispatch()

    const addItemToBasket = () => {
        const product = {
            id,title,price,rating,description,category,image,hasPrime
        }
        dispath(addToBasket(product))
    }

    const removeItemFromBasket = () => {
        dispath(removeFromBasket({id}))
    }

  return (
    <div className='grid grid-cols-5'>
        <Image src={image} height={200} width={200} objectFit='contain'/>

        <div className='col-span-3 mx-5'>
            <p>{title}</p>
            <div className='flex'>
                {Array(parseInt(rating.rate)).fill().map((_,i)=>(
                    <StarIcon className='h-5 text-yellow-500'/>
                ))}
            </div>
            <p className=' text-xs my-2 line-clamp-3'>{description}</p>
            <CurrencyFormat value={price} prefix={'$'}/>
            {hasPrime && (
            <div className=' flex items-center space-x-2 -mt-5'>
                <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
                <p className='text-xs text-gray-500'>FREE next-day Delivery</p>
            </div>
        )}
        </div>
        <div className='flex flex-col space-y-2 my-auto justify-self-end'>
            <button className='button' onClick={addItemToBasket}>Add to Basket</button>
            <button className='button' onClick={removeItemFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckOutProduct