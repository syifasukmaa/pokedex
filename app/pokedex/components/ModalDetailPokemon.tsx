import useApi from '@/store/useApi';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { CardTags } from './CardTags';
import { getColorFromUrl } from '@/store/colors';
import { CardCounterCount } from './CardCounterCount';
import ProgressBar from '@ramonak/react-progress-bar';

interface DetailPokemon {
  setOpenModal: (open: boolean) => void;
}

export const ModalDetailPokemon: React.FC<DetailPokemon> = ({ setOpenModal }) => {
  const { detailPokemon } = useApi((state) => ({
    detailPokemon: state.detailPokemon,
  }));

  const [pokemonColor, setPokemonColor] = useState<string | null>(null);
  const image = detailPokemon?.sprites?.other.dream_world.front_default;

  useEffect(() => {
    const getPokemonColor = async () => {
      const color = await getColorFromUrl(detailPokemon?.sprites?.other.dream_world.front_default);
      if (color) setPokemonColor(color);
    };

    if (detailPokemon) {
      getPokemonColor();
    }
  }, [detailPokemon]);

  console.log(detailPokemon);

  return (
    <div className='fixed inset-0 z-50 text-white bg-slate-950 bg-opacity-90 w-screen h-screen flex justify-center items-center'>
      <div className='bg-slate-100 rounded-xl shadow-md z-50 w-[80%] md:w-[90%] lg:w-[70%] xl:w-[60%] text-black relative flex flex-col md:flex-row'>
        <div
          className='md:w-[45%] p-3 md:p-8 md:rounded-s-xl rounded-md md:rounded-r-none shadow-lg shadow-black relative flex flex-col justify-center items-center'
          style={{ backgroundColor: pokemonColor || 'blue' }}
        >
          <h1 className='text-3xl font-semibold block md:hidden py-4 text-white'>{detailPokemon.name}</h1>

          <Image
            src={image}
            width={400}
            height={400}
            priority={false}
            className='w-[45%] md:w-[100%]'
            alt='image pokemon'
          />
          <div className='md:flex gap-2 absolute bottom-5 right-5 hidden'>
            <CardTags />
          </div>
        </div>

        {/* bagian kanan */}
        <div className='md:w-3/4 md:p-8 p-4 w-full'>
          <div className='flex justify-between items-center mb-4'>
            <h1 className='text-3xl font-semibold hidden md:block'>{detailPokemon.name}</h1>
            <div
              className='rounded-xl '
              style={{ backgroundColor: pokemonColor || 'blue' }}
            >
              <p className='py-2 px-3'>{detailPokemon.id}</p>
            </div>
            <div className='md:hidden gap-2 inline-block'>
              <CardTags />
            </div>
          </div>
          <div className='shadow-lg py-3 px-5 w-[75%] rounded-lg mb-3 bg-white'>
            <p className='text-base'>Abilities</p>
            <p className='text-base'>
              {detailPokemon.abilities.map((ability: any, index: number) => {
                const abilityName = ability.ability.name;
                return index === detailPokemon.abilities.length - 1 ? abilityName : abilityName + ', ';
              })}
            </p>
          </div>

          <div className='shadow-lg py-3 px-5 rounded-lg mb-3 bg-white'>
            <div>
              <p>Experience</p>
              <p className='mb-1'>{detailPokemon.base_experience}</p>
              <ProgressBar
                completed={detailPokemon.base_experience}
                maxCompleted={300}
              />
            </div>
          </div>
          <div className='grid grid-cols-4 gap-3'>
            {detailPokemon.stats?.map(
              (state: any, index: number) =>
                index !== 0 &&
                index !== detailPokemon.stats.length - 1 && (
                  <div
                    className='shadow-lg py-3 rounded-lg bg-white px-2 text-center'
                    key={index}
                  >
                    <CardCounterCount
                      name={state.stat.name}
                      stats={state.base_stat}
                    />
                  </div>
                ),
            )}
          </div>
        </div>

        <button
          className='absolute md:-top-8 top-5 md:right-0 right-2 font-bold px-2 text-white text-2xl'
          onClick={() => setOpenModal(false)}
        >
          X
        </button>
      </div>
    </div>
  );
};
