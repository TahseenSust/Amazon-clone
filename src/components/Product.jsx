import Image from 'next/image'
import React, { useState } from 'react'
import {StarIcon} from '@heroicons/react/solid'
import CurrencyFormat from 'react-currency-format'
import { useDispatch } from 'react-redux'
import {addToBasket} from '../slices/basketSlice'

function Product({id,title,price,description,category,image,rating}) {

    const [rate] = useState(parseInt(rating.rate))
    const [hasPrime] =useState(rate===4)

    const dispath = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id,title,price,description,category,image,rating,hasPrime
        }
        dispath(addToBasket(product))
    }

  return (
    <div className=' relative flex flex-col m-5 bg-white z-30 p-10'>
        <p className=' absolute top-2 right-2  text-xs italic text-gray-400'>{category}</p>
        <Image src={image} height={200} width={200} objectFit='contain' />
        <h4 className='my-3'>{title}</h4>
        <div className='flex'>
            {Array(rate).fill().map((_,i)=>(
                <StarIcon className='h-5 text-yellow-500'/>
            ))}
            
        </div>
        <p className='text-xs my-2 line-clamp-2'>{description}</p>
        <div className='mb-5'>
            <CurrencyFormat value={price} prefix={'$'}/>
        </div>
        {hasPrime && (
            <div className=' flex items-center space-x-2 -mt-5'>
                <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
                <p className='text-xs text-gray-500'>FREE next-day Delivery</p>
            </div>
        )}
        <button className='mt-auto button' onClick={addItemToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product