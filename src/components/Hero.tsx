import Image from 'next/image';

const Hero = () => {
  return (
    <header 
      className="relative py-6 lg:py-12 rounded-md shadow-lg container max-w-[1400px] mx-auto px-4 lg:px-6 lg:min-h-[718px] h-screen lg:h-auto" 
      style={{
        background: 'linear-gradient(176deg, #F9FAFB 0.94%, #EDF0F3 316.54%)'
      }}
    >
      <div className="max-w-[1220px] h-full mx-auto">
        <section className="lg:grid lg:gap-8 lg:grid-cols-12 h-full flex flex-col">
          {/* Left Content */}
          <div className="lg:col-span-5 lg:flex lg:flex-col lg:justify-center lg:mt-8 lg:mt-0">
            <h1 className="text-3xl sm:text-6xl lg:text-6xl font-[600] tracking-tight text-gray-900 ">
              Well crafted abstract images
            </h1>
            <p className="mt-4 lg:mt-6 text-base lg:text-xl leading-8 text-gray-600">
              High quality abstract images for your projects, wallpaper and presentations.
            </p>
            <div className="mt-6 lg:mt-14 flex flex-row gap-8 items-center justify-start">
              <button className="w-full sm:w-auto text-lg rounded-md bg-white px-6 md:px-10 py-4 text-gray-900 hover:bg-gray-100 transition-colors border border-inner border-neutral-200 shadow-sm">
                Learn more
              </button>
              <button className="w-full sm:w-auto text-lg rounded-md bg-indigo-700 px-6 md:px-10 py-4 text-white hover:bg-indigo-900 transition-colors border border-indigo-700 shadow-sm">
                See pricing
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <figure className="relative lg:col-span-7 flex-1 flex items-center justify-center">
            <Image
              src="/img/prism.png"
              alt="Hero Image"
              width={1000}
              height={2000}
              className="object-contain h-full w-full"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </figure>
        </section>
      </div>
    </header>
  );
};

export default Hero;