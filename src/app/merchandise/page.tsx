"use client";

import React from 'react';
import MerchCard from './merch-card';
import {cardMerch} from './datamerch';
import MerchHeader from '~/components/merch-header';
import {motion} from 'framer-motion';

const MerchPage = () => {
  const container = {
    hidden: {opacity: 1, scale: 0},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: {y: 20, opacity: 0},
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <div
      className="bg-[url('/merchandise/merch-bg.png')] bg-left-top bg-cover p-4 flex flex-col items-center justify-center pt-28 md:pt-36">
      <MerchHeader className=''>MERCHANDISE</MerchHeader>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 gap-y-12 lg:gap-y-16 my-10 w-full max-w-7xl">
        {cardMerch.map((merch, index) => (
          <motion.div variants={item} key={index} className="flex justify-center">
            <MerchCard title={merch.title} photo={merch.photo}/>
          </motion.div>
        ))}
      </ motion.div>
    </div>
  );
};

export default MerchPage;