import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Image from 'next/image'
import Logo from '../public/images/fav.png'


// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

export default function Navbar() {
    return (
        <section className='bg-white nav'>
            <Popover className="relative border-b-2  max-w-7xl mx-auto">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="flex items-center justify-between py-2 md:space-x-10">
                        <div className="flex">
                            <Link href="/">
                                <span className="sr-only">Wisdom Ezekiel</span>
                                <Image src={Logo} alt='wisdom' priority placeholder='blur' className='h-12 w-12 object-center object-cover' />
                            </Link>
                        </div>
                        <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                            <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                About Wisdom
                            </Link>
                            <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Contact
                            </Link>
                            <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Company
                            </Link>

                        </Popover.Group>
                        <div className="-my-2 -mr-2 md:hidden">
                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-8 w-8 text-black" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-300 ease-out"
                    enterFrom="opacity-0 translate-y-0"
                    enterTo="opacity-100 translate-y-1"
                    leave="duration-300 ease-in"
                    leaveFrom="opacity-100 translate-y-1"
                    leaveTo="opacity-0 translate-y-0"
                >
                    <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform transition md:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ">
                            <div className="px-5 pt-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Link href="/">
                                            <span className="sr-only">Wisdom Ezekiel</span>
                                            <Image src={Logo} alt='wisdom' priority placeholder='blur' className='h-10 w-10 object-center object-cover' />
                                        </Link>
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                </div>
                            </div>
                            <div className="space-y-6 py-6 px-5">
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    <Link href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        About Wisdom
                                    </Link>

                                    <Link href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Contact
                                    </Link>
                                    <Link href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Company
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        href="/"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-900"
                                    >
                                        Sign up
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </section>
    )
}