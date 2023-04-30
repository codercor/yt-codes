import React from 'react'

export default function Todo({ text, onClick }) {
    return (
        <div className='w-full h-10 items-center flex justify-between px-6 border-b-2 border-black'>
            <span className='font-semibold' > {text} </span>
            <span className='cursor-pointer hover:scale-110' onClick={onClick}> ❌ </span>
        </div>
    )
}
