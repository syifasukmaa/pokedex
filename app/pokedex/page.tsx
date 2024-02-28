'use client';
import React, { useEffect } from 'react';
import useApi from '@/store/useApi';
import { CardPreview } from './components/CardPreview';
import { useShallow } from 'zustand/react/shallow';
import { useRouter } from 'next/navigation';
import { Skeleton } from './components/Skeleton';

const Page = () => {
  const router = useRouter();

  const {
    allPokemons,
    getAllPokemons,
    postPerPage,
    totalPokemon,
    prevPage,
    nextPage,
    loading,
    offset,
    getDetailPokemons,
    setDetailPokemon,
  } = useApi(
    useShallow((state) => ({
      getAllPokemons: state.getAllPokemons,
      prevPage: state.prevPage,
      nextPage: state.nextPage,
      getDetailPokemons: state.getDetailPokemons,
      allPokemons: state.allPokemons,
      postPerPage: state.postPerPage,
      totalPokemon: state.totalPokemon,
      loading: state.loading,
      offset: state.offset,
      setDetailPokemon: state.detailPokemon,
    })),
  );
  const pages = offset / 9;
  const lastPage = Math.ceil(totalPokemon / postPerPage);

  function handleNewPage(id: number) {
    async function fetchData() {
      try {
        const result = await getDetailPokemons(id);
        console.log(result);
        setDetailPokemon(result);
      } catch (Error) {
        console.error(Error);
      }
    }
    fetchData();
  }
  useEffect(() => {
    getAllPokemons(0);
  }, [getAllPokemons, getDetailPokemons]);
  return (
    <div className='min-h-screen pt-[70px] px-6 md:px-16 lg:px-20'>
      <h1 className='text-3xl text-black font-light pt-10 text-center md:px-16'>
        Many <span className='font-semibold'>Pokemons</span> for you to choose your favorite
      </h1>

      <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10 mb-10'>
        {loading ? (
          <Skeleton />
        ) : (
          allPokemons?.map((datas, index) => (
            <div
              className='rounded-lg shadow-xl flex justify-between cursor-pointer hover:scale-105 transition-all'
              key={index}
              onClick={() => handleNewPage(datas.id)}
            >
              <CardPreview datas={datas} />
            </div>
          ))
        )}
      </div>
      <div className='flex justify-center mb-4'>
        <div className='flex flex-col items-center'>
          <span className='text-sm text-gray-700 dark:text-gray-400'>
            Showing <span className='font-semibold text-gray-900 dark:text-white'>{pages}</span> of
            <span className='font-semibold text-gray-900 dark:text-white'> {lastPage}</span> Entries
          </span>
          <div className='inline-flex mt-2 xs:mt-0'>
            <button
              onClick={() => prevPage()}
              className='flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              Prev
            </button>
            <button
              onClick={() => nextPage()}
              className='flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
