"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of items for the slider
  const items = [
    { name: 'Rocket Model 1', image: '/image/slider-image.png', link: '/rocket/1' },
    { name: 'Rocket Model 3', image: '/image/slider-image.png', link: '/rocket/3' },
    { name: 'Rocket Model 3', image: '/image/slider-image.png', link: '/rocket/3' },
    { name: 'Rocket Model 3', image: '/image/slider-image.png', link: '/rocket/3' },
    { name: 'Rocket Model 3', image: '/image/slider-image.png', link: '/rocket/3' },
    { name: 'Rocket Model 3', image: '/image/slider-image.png', link: '/rocket/3' },
    { name: 'Rocket Model 3', image: '/image/slider-image.png', link: '/rocket/3' },
    // Add more items as needed
  ];

  // Function to change slider index automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className="bg-[#FAF4F4] w-full h-[672px] flex items-center justify-center">
      <div className="w-full max-w-[1440px] h-full overflow-hidden">
        <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {items.map((item, index) => (
            <div key={index} className="w-[100%] md:w-[605px] h-[562px] flex-shrink-0 flex flex-col items-center justify-between text-black">
              <div className="relative w-full h-3/4">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  layout="responsive" // Makes the image responsive
                  width={1000} // Placeholder width
                  height={750} // Placeholder height
                  objectFit="cover" // Ensures the image covers the area while maintaining aspect ratio
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-xl font-bold text-center">{item.name}</h2>
              <Link className="text-blue-600 font-semibold mt-4" href={item.link}>
                View More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
