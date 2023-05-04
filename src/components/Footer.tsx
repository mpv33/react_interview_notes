import React from 'react'

function Footer() {
    return (
        <div className='w-full flex justify-center items-center bg-gray-200 py-4 text-gray-500'>
            <footer>
                <p>Powered by <a 
                className='text-sm text-blue-500 hover:text-sky-700 cursor-pointer'
                target='_blank'
                href="https://mateshwari.netlify.app/">Mateshwari</a></p>
            </footer>
            <a
                href='https://www.linkedin.com/in/mateshwari-verma-a41143168/'
                target='_blank'
                className='text-sm text-blue-500 hover:text-sky-700 cursor-pointer pl-4'>LinkedIn</a>
            <a
                href='https://www.instagram.com/_mpverma_/'
                target='_blank'
                className='text-sm text-blue-500 hover:text-sky-700 cursor-pointer pl-2'> Instagram</a>
        </div>
    )
}

export default Footer
