import Image from 'next/image';
import Link from 'next/link';

export default function HomeHeroSection() {
  return (
    <section className="bg-[#FBEBB5] w-full flex items-center justify-center">
      {/* Wrapper to Limit Width */}
      <div className="w-full max-w-[1440px] h-[500px] md:h-[700px] lg:h-[900px] flex flex-col md:flex-row justify-center px-8 items-center">
        {/* Left Section - Text and Button */}
        <div className="flex flex-col justify-center space-y-6 text-left md:w-1/2 items-center md:items-start">
          <h1 className="text-4xl md:text-5xl text-gray-800 text-center md:text-left">
            Rocket Single Seater
          </h1>
          <Link
            href="/shop"
            className="text-black text-lg font-bold py-3 px-8 rounded-lg inline-block"
          >
            Shop Now
          </Link>
        </div>

        {/* Right Section - Image */}
        <div className="relative w-[400px] md:w-1/2 lg:w-[100%] h-auto md:h-[500px] lg:h-[900px] flex items-center justify-center">
          <Image
            src="/image/rocket-image.png" // Replace with your image path
            alt="Rocket Single Seater"
            width={1000} // Adjusted width for large screens
            height={1200} // Adjusted height for large screens
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
