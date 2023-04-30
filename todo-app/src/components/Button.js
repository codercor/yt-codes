import React from 'react'

export default function Button({ text, onClick }) {
    return (
        <button
            onClick={onClick}
            className='hover:bg-green-600 rounded-sm bg-green-400 px-4 leading-relaxed text-white font-bold'>
            {text}
        </button>
    )
}
