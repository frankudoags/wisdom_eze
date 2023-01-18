import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

type ButtonProps = {
    text: string,
    path: string
}

const Button = ({text, path}: ButtonProps) => {
    return (
        <div>
            <Link href={path} className='group btn-blue flex items-center justify-center gap-4'>
                <p>{text}</p>
                <ArrowRightIcon className='h-4 w-4 group-hover:ml-2 transition-all duration-300 ease-in-out' />
            </Link>
        </div>
    )
}

export default Button
