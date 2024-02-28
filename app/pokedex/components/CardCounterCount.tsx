import React from 'react';

interface Props {
  stats: number;
  name: string;
}

export const CardCounterCount: React.FC<Props> = ({ stats, name }) => {
  return (
    <div className='flex flex-col items-center'>
      <h4 className='text-sm border-2 border-black rounded-2xl py-1 px-2'>{stats}</h4>
      <p className='text-sm mt-1 text-grey'>{name}</p>
    </div>
  );
};
