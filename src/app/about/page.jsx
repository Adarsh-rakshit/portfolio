"use client"
import { motion, useInView, useScroll } from "framer-motion";
import Brain from "@/components/brain";
import { useRef } from "react";

const Page = () => {

  const skillList = ["JavaScript", "MongoDb", "React","C++","Java","python","NodeJs","NextJs","Angular","low level Desgin","High level Design","ExpressJs","Data Structures and Algorithm"];

  const containref = useRef()

  const {scrollYProgress} = useScroll({container:containref})

  const skillref = useRef();
  const isSkillRefInView = useInView(skillref,{margin:"-100px"});

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className="h-full overflow-scroll lg:flex" ref={containref}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">

          {/* BIO  CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* TITLE */}
            <h1 className="font-bold text-2xl">
              BIOGRAPHY
            </h1>

            {/* text */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, hic laboriosam. Nam quaerat molestias perferendis, nihil adipisci, praesentium fugiat hic odit in accusantium earum pariatur animi sed vero similique ullam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates non eveniet beatae officiis quidem, facilis quisquam vel natus vero exercitationem similique quas odio eum minus reprehenderit quo laborum laudantium temporibus!
            </p>

            {/* end text */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt facilis dolores fugiat commodi.
            </span>

            {/* biography sign */}
            <div className="self-end">
              <svg width="185" height="77" xmlns="http://www.w3.org/2000/svg">
                <g id="Layer_1">
                  <title>Layer 1</title>
                  <path d="m243,300c0,1 -0.64638,2.23697 0,3c3.93175,4.64127 20.03271,1.60999 63,-1c40.03854,-2.43207 86,-3 122,-3c22,0 38.12711,-1.0741 41,4c0.49271,0.87021 -1.04291,-0.71021 -2,-1c-3.45084,-1.04483 -6.1731,-4.85272 -7,-6c-1.30746,-1.814 -7,-4 -30,-4c-31,0 -73.0108,-0.08554 -105,4c-23.00793,2.93851 -30.06458,3.1991 -35,4c-3.12143,0.50653 -7.84235,2.45978 -16,5c-3.93668,1.22583 -5.88281,2.233 -6,0c-0.44781,-8.53226 7.01511,-30.07401 22,-54c5.6424,-9.00906 8.3775,-9.16942 10,-8c7.69611,5.54704 5,24 5,47c0,17 0,26 0,28c0,1 -1,2 -2,1c-2,-2 -3,-5 -3,-14c0,-7 -1.23462,-17.15225 -2,-19c-1.0824,-2.61313 -3,-3 -4,-4c-1,-1 -2.38269,-2.07611 -2,-3c2.16479,-5.22626 11.28378,-11.72241 24,-16c15.42923,-5.19022 26.82376,-4.48627 29,-5c1.9465,-0.4595 3,0 4,1c1,1 1,2 1,2c0,1 0.05536,2.01901 -1,5c-2.85141,8.05417 -4.23462,14.15225 -5,16c-0.5412,1.30655 -2.07611,1.38269 -3,1c-1.30655,-0.5412 -3,-3 -2,-2c1,1 2.51437,-0.70065 7,-9c6.80777,-12.59579 9.69345,-17.4588 11,-18c3.69553,-1.53073 6,1 7,2c1,1 5.73764,6.23737 13,14c2.8985,3.09818 4.85272,4.1731 6,5c1.814,1.30746 5.00974,0.80292 7,1c5.07422,0.50244 6,1 7,1c3,0 5,-2 8,-5c1,-1 3,-1 5,-1c1,0 1.65451,3.50989 -20,12c-31.21283,12.23764 -70.14813,24.57767 -79,22c-1.35782,-0.39539 0.00784,-0.9805 5,-3c22.03497,-8.914 58.87766,-16.64221 94,-23c36.88391,-6.67667 59.83551,-6.99399 69,-8c0.99402,-0.10913 1,0 1,-1l-1,0" id="svg_11" stroke="#000" fill="none" />
                  <path d="m55.5,61c-1,0 -0.48072,0.44181 2,-3c5.22981,-7.25597 9.54136,-16.70267 11,-20c1.66801,-3.77064 1,-5 2,-6c1,-1 1.09135,-1.04439 3,3c4.20335,8.90684 7.44352,15.38062 9,21c0.8008,2.89114 2,5 3,6c1,1 0.814,2.30745 -1,1c-4.58908,-3.30762 -10.22885,-9.72962 -15,-14c-2.10754,-1.88634 -4,-4 -5,-5c-1,-1 -3,-2 -4,-2c-1,0 0.10271,1.19471 7,0c14.64795,-2.53723 43.26069,-13.12573 58,-22c3.8313,-2.30676 6,-2 6,-3c0,-1 -4.66017,-0.25203 -15,6c-9.75683,5.89952 -19.22885,12.72962 -24,17c-1.05377,0.94317 -2.81266,3.20681 -5,5c-2.78832,2.28588 -5.21168,3.71412 -8,6c-3.28101,2.68979 -5.1731,5.85273 -6,7c-1.30745,1.81399 -3,4 -4,5c-1,1 -1.08031,3.37641 -5,5c-0.92388,0.38268 -2,0 -3,1c-1,1 -0.00385,0.98455 8,-1c60.97093,-15.11773 112,-30 136,-37l4,-1" id="svg_16" stroke="#000" fill="none" />
                  {/* <polyline stroke-linecap="round" id="svg_17" points="445.5,16 445.5,17 " stroke="#000" fill="none" /> */}
                </g>
              </svg>
            </div>

            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* SkILL  CONTAINER */}
          <div className="flex flex-col gap-122 justify-center " ref={skillref}>
            {/* skill title*/}
            <motion.h1 
            initial={{x:"-300px"}} 
            animate={isSkillRefInView ? {x:0}:{}} 
            transition={{delay:0.2}}
            className="font-bold text-2xl">SKILLS</motion.h1>
            {/* SKILL LIST */}
            <div
            className="flex gap-2 flex-wrap">
              {skillList.map((item)=>(
                <motion.div 
                initial={{x:"-1000px"}} 
                animate={isSkillRefInView ? {x:0}:{}}
                transition={{delay: 0.3 * skillList.indexOf(item), ease:"easeInOut"}}
                key={item}
                className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                {item}
              </motion.div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE CONTAINER */}
          <div className=""></div>
        </div>

        {/* SVG CONTAINER */}
        <div className="hidden lg:block sticky top-0 w-1/3 xl:1/2">
              <Brain scrollYProgress={scrollYProgress}/>
        </div>
      </div>

    </motion.div>
  )
}

export default Page