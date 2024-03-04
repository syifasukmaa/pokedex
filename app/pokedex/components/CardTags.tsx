import React from 'react';

export const CardTags = () => {
  return (
    <>
      <div className='flex gap-3'>
        <div className='bg-green rounded-full py-[2px] px-3 shadow-[1px_3px_0px_0px_green]'>
          <p className='text-sm font-medium'>Grass</p>
        </div>
        <div className='bg-blue02 rounded-full py-[1px] px-3 shadow-[1px_3px_0px_0px_#06afc6]'>
          <p className='text-sm font-medium'>Poison</p>
        </div>
      </div>
    </>
  );
};
