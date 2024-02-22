'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <section className='overflow-hidden bg-gradient-to-b from-[#F5DB13] to-[#F2B807] dark:bg-gray-900 w-full min-h-[100vh] flex flex-col justify-between'>
        <div className=' flex flex-col-reverse lg:flex-row items-center mx-auto min-w-screen-2xl pt-20 lg:pt-12 justify-between'>
          <div className='lg:w-2/5 mx-auto flex flex-col items-center justify-center lg:justify-start lg:items-start text-center lg:text-left px-10 md:px-24 lg:px-0 pb-12 lg:pb-0'>
            <h1 className='mb-6 text-3xl tracking-wide text-gray-900 md:text-4xl lg:text-6xl 2xl:text-8xl '>
              <span className='font-bold'>Find</span> all your favorite <span className='font-bold'>Pokemon</span>
            </h1>
            <p className='mb-6 text-xl font-normal text-black lg:text-2xl 2xl:text-4xl dark:text-gray-400'>
              You can know the type of Pokemon, its strengths, disadvantages and abilities
            </p>
            <div>
              <button
                onClick={() => router.push('/pokedex')}
                className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-green hover:bg-grass focus:ring-4 focus:ring-blue-300 dark:focus:ring-grass shadow-md shadow-grass hover:shadow-green'
              >
                See Pokemons
              </button>
            </div>
          </div>
          <div className=''>
            <Image
              src={'/img/BannerPokemon.svg'}
              width={500}
              height={500}
              priority={false}
              alt='Banner Pokemon'
              className='min-w-[400px] md:min-w-[300px] lg:min-w-[550px] 2xl:min-w-[750px] hidden lg:flex'
            />
            <Image
              src={'/img/BannerPokemon_md.png'}
              width={500}
              height={500}
              priority={false}
              alt='Banner Pokemon'
              className='min-w-[300px] md:flex lg:hidden'
            />
          </div>
        </div>
      </section>
    </>
  );
}
