import Image from 'next/image';
import Link from 'next/link';

export default function HomeHeroSection() {
  return (
    <section className="bg-[#FBEBB5] w-full flex items-center justify-center">
      {/* Wrapper to Limit Width */}
      <div className="w-full max-w-[1440px] h-[900px] mx-auto flex flex-col-reverse md:flex-row justify-between px-8 items-center">
        {/* Left Section - Text and Button */}
        <div className="flex flex-col justify-center space-y-6 text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Rocket Single Seater
          </h1>
          <Link
            href="/shop"
            className="bg-yellow-500 text-white text-lg font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 inline-block"
          >
            Shop Now
          </Link>
        </div>

        {/* Right Section - Image */}
        <div className="relative w-full md:w-1/2 h-auto flex items-center justify-center">
          <Image
            src="/image/rocket-image.png" // Replace with your image path
            alt="Rocket Single Seater"
            width={853}
            height={1000}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
