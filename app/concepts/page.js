import React from 'react'
import { conceptsList } from '@/constants'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <h1 className='text-4xl font-bold underline text-center mx-auto my-4'>Web Dev Concepts</h1>

        <div className='Concept-list '>
            {conceptsList.map((concept, index) => (
                <div key={index} className='concept-item flex flex-col items-center m-4 p-4 border rounded-lg shadow-lg'>
                    <h2 className='text-2xl font-semibold'>{concept.title}</h2>
                    <p className='mt-2 text-center'>{concept.description}</p>
                    <Link href={concept.link} target="_blank" className='mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>Show Preview</Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default page