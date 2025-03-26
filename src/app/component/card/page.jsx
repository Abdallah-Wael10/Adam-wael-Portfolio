"use client"
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Card = ({ link, image, type, title, desc }) => {
  const cardRef = useRef(null); // Ref to track the card element

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-view'); // Add animation class when in view
            observer.unobserve(entry.target); // Stop observing after animation triggers
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the card is visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current); // Start observing the card
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current); // Cleanup on unmount
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <a
      ref={cardRef} // Attach ref to the card element
      href={link}
      target="_blank"
      className="w-[100%] h-max pb-5 opacity-0 bg-white rounded-xl shadow-[2px_2px_19px_whitesmoke] transition-all duration-200 ease-in-out hover:scale-105 hover:-translate-y-1 hover:z-10 hover:shadow-[2px_2px_25px_#B7DDEEB5]"
    >
      <div className="w-full aspect-[29/21] relative">
        <Image
          src={image}
          alt="devfux"
          fill
          className="rounded-[10px] object-cover"
          sizes="100vw, 1280px"
          quality={100}
        />
      </div>
      <div className="w-full h-max pb-5 pt-5 pl-5 flex flex-col justify-center items-center gap-2 text-black">
        <h1 className="w-full h-max text-[18px] font-medium">{title}</h1>
        <p className="w-full h-max text-[12px] font-medium">{desc}</p>
      </div>
    </a>
  );
};

export default Card;