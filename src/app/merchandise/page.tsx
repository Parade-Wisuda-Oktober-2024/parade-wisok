import React from 'react';
import MerchCard from './merch-card';
import { cardMerch } from './datamerch';
import MerchHeader from '~/components/merch-header';

const MerchPage = () => {
  return (
    <div className="bg-[url('/merchandise/merch-bg.png')] bg-left-top bg-cover p-4 flex flex-col items-center justify-center">
      <MerchHeader className='mt-8 sm:mb-4 lg:mb-8'>MERCHANDISE</MerchHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 gap-y-12 lg:gap-y-16 mt-10 mb-20 w-full max-w-7xl">
        {cardMerch.map((merch, index) => (
          <div key={index} className="flex justify-center">
            <MerchCard title={merch.title} photo={merch.photo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerchPage;