import Head from 'next/head'
import Image from 'next/image';
import wisdom2 from '../public/images/DSC01196.jpg'//seating red shirt and tie(large and small)

const about = () => {
    return (
        <>
            <Head>
                <title>Wisdom Ezekiel | About</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='bg-[#0d0e18] text-white min-h-[90vh] flex flex-col items-center'>
                <div className='relative w-full h-[350px] md:h-[400px] flex items-center justify-center'>
                    <Image src={wisdom2} alt='Wisdom Ezekiel' className='absolute object-cover object-center w-full h-full' />
                    {/* Black overlay on image */}
                    <div className='h-full w-full bg-black opacity-40 absolute top-0 left-0'></div>
                    <h1 className='z-10 text-white text-2xl md:text-3xl'>MEET WISDOM</h1>
                </div>
                <div className='w-full flex flex-col items-center justify-center max-w-4xl mx-auto mt-10 md:mt-12 px-4 border-b border-white'>
                    <p className="pb-10">
                        Co-founder of Pertinence Group, CEO of Rushtower Limited,
                        international speaker, serial entrepreneur, business advisor
                        and author of Don&apos;t Get Mad, Get Rich & Coming To Lagos.
                    </p>
                    <p className='pb-10'>Wisdom Ezekiel is a multi-award winning speaker, passionate entrepreneur,
                        business advisor, early stage investor, and philanthropist with over two
                        decades of experience. He, alongside his business partner built their multimillion dollar
                        real estate company from scratch defying all odds set before them. </p>
                    <p className="pb-20">
                        Wisdom co-owns and operates seven companies under the umbrella of Pertinence Group
                        and he is an early stage investor in the start-up face with co-founding and funding
                        companies such as Quanta Africa which is on a mission to transform Africa through innovation.
                    </p>


                    <p className="pb-10 font-bold md:text-xl">
                        ???The problem with most people is that they are so concerned with BECOMING.
                        In order to BECOME, you must first BE and then DO. You can&apos;t miss the steps,
                        you just cannot cheat the process.???
                    </p>
                    <p className="pb-10 font-bold">
                        - Wisdom Ezekiel
                    </p>
                </div>
            </div>
        </>
    )
}

export default about
