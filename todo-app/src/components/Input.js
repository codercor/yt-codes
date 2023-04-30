import React from 'react'

export default function Input({ onChange, value, placeholder }) {
    return (
        <input
            type="text"
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            className='border-2 border-gray-400 rounded-sm px-4 py-2 w-full'
        />
    )
}
