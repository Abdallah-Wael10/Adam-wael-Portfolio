"use client"
import React, { useState } from 'react';
import devfux from './images/devfux.jpg';
import fash from './images/fash.jpg';
import street from './images/street.jpg';
import trav from './images/trav.jpg';
import Card from '../card/page';

const Portfolio = () => {
  const data = [
    {
      id: 1,
      title: 'DevFux Platform',
      desc: 'The project is DevFux, a site for a company that provides web development services, ',
      image: devfux,
      link: 'https://www.behance.net/gallery/218256721/DevFux-developmentDesign-services',
      type: 'website',
    },
    {
      id: 2,
      title: 'Fashion App',
      desc: 'A mobile app for a fashion store.',
      image: fash,
      link: 'https://www.behance.net/gallery/218199535/Fashion-store-App',
      type: 'mobile',
    },
    {
      id: 3,
      title: 'Street99 Logo',
      desc: 'A logo design for a local clothing brand.',
      image: street,
      link: 'https://www.behance.net/gallery/219557691/Street-99-Logo-(Local-Brand-Clothes)',
      type: 'logo',
    },
    {
      id: 4,
      title: 'Traveling Platform',
      desc: 'A landing page for a travel service.',
      image: trav,
      link: 'https://www.behance.net/gallery/217149257/Traveling-Landpage',
      type: 'website',
    },
   
  ];

  // State to track the active filter
  const [filter, setFilter] = useState('all');

  // Filter the data based on the selected type
  const filteredData =
    filter === 'all'
      ? data
      : data.filter((item) => item.type === filter);

  // Handle filter button click
  const handleFilter = (type) => {
    setFilter(type);
  };

  return (
    <div id='port' className="w-full h-max pb-5 flex justify-center items-start flex-col gap-10 z-50">
      {/* Filter Buttons */}
      <div className="w-full h-max pb-5 pt-5 flex justify-center gap-6 items-center flex-wrap">
        <button
          className={`w-[8%] h-max rounded-[8px] p-2.5 text-[14px] font-semibold border border-[#90D9EF] transition-all duration-300 max-[800px]:w-[30%] ${
            filter === 'all'
              ? 'bg-[#90D9EF] text-white'
              : 'bg-white text-[#90D9EF] hover:bg-[#90D9EF]/10'
          }`}
          onClick={() => handleFilter('all')}
        >
          All
        </button>
        <button
          className={`w-[8%] h-max rounded-[8px] p-2.5 text-[14px] font-semibold border border-[#90D9EF] transition-all duration-300 max-[800px]:w-[30%] ${
            filter === 'website'
              ? 'bg-[#90D9EF] text-white'
              : 'bg-white text-[#90D9EF] hover:bg-[#90D9EF]/10'
          }`}
          onClick={() => handleFilter('website')}
        >
          Website
        </button>
        <button
          className={`w-[8%] h-max rounded-[8px] p-2.5 text-[14px] font-semibold border border-[#90D9EF] transition-all duration-300 max-[800px]:w-[30%] ${
            filter === 'mobile'
              ? 'bg-[#90D9EF] text-white'
              : 'bg-white text-[#90D9EF] hover:bg-[#90D9EF]/10'
          }`}
          onClick={() => handleFilter('mobile')}
        >
          Mobile App
        </button>
        <button
          className={`w-[8%] h-max rounded-[8px] p-2.5 text-[14px] font-semibold border border-[#90D9EF] transition-all duration-300 max-[800px]:w-[30%] ${
            filter === 'logo'
              ? 'bg-[#90D9EF] text-white'
              : 'bg-white text-[#90D9EF] hover:bg-[#90D9EF]/10'
          }`}
          onClick={() => handleFilter('logo')}
        >
          Logo
        </button>
      </div>

      {/* Filtered Projects */}
      <div className="w-full h-max flex justify-center items-center flex-wrap gap-12">
        {filteredData.map((e) => (
          <div
            key={e.id}
            className="w-[23%] h-max animate-fade-in  shadow-[2px_2px_19px_whitesmoke] transition-all duration-200 ease-in-out hover:scale-105 hover:-translate-y-1 hover:z-10 hover:shadow-[2px_2px_25px_#B7DDEEB5] max-[800px]:w-[90%]"
          >
            <Card
              title={e.title}
              desc={e.desc}
              image={e.image}
              link={e.link}
              type={e.type}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;