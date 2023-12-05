'use client'
import Image from 'next/image'
import React, { useState, FormEvent } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Set loading to true when the request starts
    setIsLoading(true) 
 
    try {
      const formData = new FormData(event.currentTarget)
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      })
 
      // Handle response if necessary
      const data = await response.json()
      console.log('success', data)
    } catch (error) {
      console.error(error)
    } finally {
      // Set loading to false when the request completes
      setIsLoading(false) 
    }
  }

  return (
    <main className='flex min-h-screen flex-col bg-black pt-10 pl-5'>
      <section className='flex'>
        <Image
          alt='logo'
          src='/fcl.png'
          width={200}
          height={50}
          />
      </section>
      <section className='flex items-center justify-center w-full '>
        <form onSubmit={onSubmit} className='flex flex-col rounded-xl	border-2 border-yellow-700	border-solid p-10'>
          <p className='text-white py-2'><b>Batch Form</b></p>
          <select name='model' required className='w-96 rounded-sm p-1'>
            <option value='' disabled selected>Model</option>
            <option value='Model1'>Model1</option>
            <option value='Model2'>Model2</option>
            <option value='Model3'>Model3</option>
          </select>
          <input className='mt-3 rounded-sm p-1' required type='date' name='batchDate' placeholder='dd/mm/yyyy' />
          <input className='mt-3 rounded-sm p-1' required type='number' name='quantity' placeholder='Quantity' />
          <select name='licenseLevel' required className='mt-3 w-96 rounded-sm p-1'>
            <option value='' disabled selected>License Level</option>
            {[...Array(10).keys()].map((item:number) => (
              <option key={'license' + item} value={item}>{item}</option>
            ))}
          </select>
          <input className='mt-3 rounded-sm p-1' type='text' name='commentMessage' placeholder='Commment(Not required)' />
          <button className='bg-yellow-700 w-96 mt-10 text-white p-2' type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </form>
      </section>
    </main>
  )
}
