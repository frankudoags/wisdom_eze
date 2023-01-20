import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Image from 'next/image'
import Logo from '../public/images/fav.png'

const Stripe = () => {
    return (
        <div className=' w-full text-white bg-black text-xs py-2  border-b-[0.4px] border-gray-400'>
            <div className="max-w-7xl mx-auto">
                <p className='px-4'>+234 807 574 4557 | wisdomaezekiel@gmail.com</p>
            </div>
        </div>
    )
}

export default function Navbar() {
    return (
        <section className='bg-[#0d0e18] text-white nav'>
            <Stripe />
            <Popover className="relative max-w-7xl mx-auto">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="flex items-center justify-between py-2 md:space-x-10">
                        <div className="flex border border-transparent rounded-full overflow-hidden bg-white">
                            <Link href="/">
                                <span className="sr-only">Wisdom Ezekiel</span>
                                <Image src={Logo} alt='wisdom' priority placeholder='blur' className='h-10 w-10 object-center object-cover' />
                            </Link>
                        </div>
                        <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                            <Link href="/about" className="text-base font-medium text-gray-200 hover:text-gray-400">
                                About Wisdom
                            </Link>
                            <Link href="/contact" className="text-base font-medium text-gray-200 hover:text-gray-400">
                                Contact
                            </Link>
                            <Link href="/company" className="text-base font-medium text-gray-200 hover:text-gray-400">
                                Company
                            </Link>

                        </Popover.Group>
                        <div className="-my-2 -mr-2 md:hidden">
                            <Popover.Button className="inline-flex items-center justify-center rounded-md  p-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-8 w-8 text-gray-200" aria-hidden="true" />
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
                    <Popover.Panel focus className="bg-[#0d0e18] text-white absolute inset-x-0 top-0 origin-top-right transform transition md:hidden border border-gray-400 rounded mx-2">
                        <div className="rounded-lg shadow-lg ">
                            <div className="px-5 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className='flex border border-transparent rounded-full overflow-hidden bg-white'>
                                        <Link href="/">
                                            <Popover.Button className='flex border border-transparent rounded-full overflow-hidden bg-white'>
                                            <span className="sr-only">Wisdom Ezekiel</span>
                                            <Image src={Logo} alt='wisdom' priority placeholder='blur' className='h-10 w-10 object-center object-cover' />
                                            </Popover.Button>
                                        </Link>
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="inline-flex items-center justify-center rounded-full p-2 text-gray-200">
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                </div>
                            </div>
                            <div className="space-y-6 py-6 px-5">
                                <div className="flex flex-col  gap-6">
                                    <Link href="/about" className="text-base font-medium text-gray-200 hover:text-gray-200">
                                        <Popover.Button>
                                            About Wisdom
                                        </Popover.Button>
                                    </Link>
                                    <Link href="/company" className="text-base font-medium text-gray-200 hover:text-gray-200">
                                        <Popover.Button>
                                            Company
                                        </Popover.Button>
                                    </Link>
                                    <Link href="/contact" className="text-base font-medium text-gray-200 hover:text-gray-200">
                                        <Popover.Button>
                                            Contact
                                        </Popover.Button>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        href="/contact"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-base font-medium text-gray-900"
                                    >
                                        <Popover.Button>
                                            Sign up
                                        </Popover.Button>
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