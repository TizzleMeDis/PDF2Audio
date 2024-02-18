import React from 'react'

export default function InputArea() {
    return(
        <div className='flex flex-row justify-center'>
            <div className='flex justify-center items-center h-[300px] w-[300px] bg-white m-8 shadow-lg rounded-md'>
                <p className=''>Add your pdf here +</p>
            </div>
            <div>
                <p className='flex justify-center items-center h-[300px] w-[300px] bg-white m-8 shadow-lg rounded-md'>Pdf display area</p>
            </div>
        </div>
    )
}