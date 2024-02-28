'use client';
import Image from 'next/image';
import { getColorFromUrl } from '@/store/colors';
import React, { useEffect, useState } from 'react';
import { CardCounterCount } from './CardCounterCount';

interface PokemonData {
  name: string;
  stats: {
    base_stat: number;
  }[];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

export const CardPreview: React.FC<{ datas: PokemonData }> = ({ datas }) => {
  const [pokemonColor, setPokemonColor] = useState<string | null>(null);
  const getPokemonColor = async () => {
    const color = await getColorFromUrl(datas.sprites.other.dream_world.front_default);
    if (color) setPokemonColor(color);
  };
  // console.log(pokemonColor);

  useEffect(() => {
    getPokemonColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className='px-2 py-4'>
        <h3 className='font-semibold text-lg capitalize'>{datas.name}</h3>

        <div className='flex mt-3 gap-3'>
          <CardCounterCount
            stats={datas.stats[2].base_stat}
            name='Attack'
          />
          <CardCounterCount
            stats={datas.stats[1].base_stat}
            name='Deffense'
          />
        </div>
        <div className='flex gap-3 items-center mt-2'>
          <div className='bg-green rounded-full py-[2px] px-3 shadow-[1px_3px_0px_0px_green]'>
            <p className='text-sm font-medium'>Grass</p>
          </div>
          <div className='bg-blue02 rounded-full py-[1px] px-3 shadow-[1px_3px_0px_0px_#06afc6]'>
            <p className='text-sm font-medium'>Poison</p>
          </div>
        </div>
      </div>
      <div
        className={`overflow-hidden w-3/5 rounded-e-lg flex items-center justify-center h-40`}
        style={{ backgroundColor: pokemonColor || 'white' }}
      >
        <Image
          src={datas.sprites.other.dream_world.front_default}
          width={500}
          height={500}
          alt='image pokemon'
          priority={false}
          className='max-w-[65%]'
        />
      </div>
    </>
  );
};
