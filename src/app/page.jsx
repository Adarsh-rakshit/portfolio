"use client"

import Image from "next/image";
import {motion} from "framer-motion"
const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>

    <div className=" h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Image container */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>

      {/* text ccontaainer */}
      <div className="h-1/2 lg:w-1/2 lg:h-full flex flex-col gap-8 justify-center">
        {/* title */}
        <h1 className="text-4xl md:text-6xl font-bold"> Crafting Complex Software Solutions, Designing A Better Tommorow.</h1>
        {/* desc */}
        <p className="md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae ad quam ipsa nemo perferendis repellendus officia pariatur. Deleniti facilis voluptate deserunt, minima neque ut officiis! Velit laudantium cum voluptas!</p>
        {/* buttons */}
        <div className="w-full flex gap-4 ">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View my work</button>
          <button className="p-4 rounded-lg ring-1 ring-black" >Contact me</button>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Homepage;






