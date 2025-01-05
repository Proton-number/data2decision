function Work() {
  type data = {
    image: string;
  };
  const marquee: Array<data> = [
    { image: "/pexels-cottonbro-5483077.jpg" },
    { image: "/pexels-goumbik-669623.jpg" },
    { image: "/pexels-mikhail-nilov-6963944.jpg" },
    { image: "/pexels-tima-miroshnichenko-5380642.jpg" },
    { image: "/pexels-brett-sayles-2881229.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-200 text-black p-4 space-y-28 sm:space-y-28  ">
      <div className="text-center space-y-8">
        <h1 className="font-bold text-5xl sm:text-6xl ">Our work</h1>
        <p className="opacity-65 text-sm">
          A Glimpse into Our Impactful Projects.
        </p>
      </div>

      <div className="flex overflow-hidden space-x-4 group">
        <div className="flex space-x-6 animate-loop-scroll group-hover:paused">
          {marquee.map((item, index) => (
            <div key={index} className=" w-[400px] sm:w-[600px] h-80 sm:h-96">
              <img
                src={item.image}
                alt=""
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          ))}
        </div>
        {/* Clone to give the marquee infinite scroll effect. */}
        <div
          className="flex space-x-6 animate-loop-scroll group-hover:paused"
          aria-hidden="true"
        >
          {marquee.map((item, index) => (
            <div key={index} className=" w-[400px] sm:w-[600px] h-80 sm:h-96">
              <img
                src={item.image}
                alt=""
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
