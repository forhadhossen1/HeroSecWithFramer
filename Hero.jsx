import { Link } from 'react-router-dom';
import herobg from '../assets/herobg.png';
import heroman from '../assets/heroman.png';
import { motion } from "framer-motion"
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-100%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Hero = () => {
    return (
        <div className='bg-cover bg-center' style={{ backgroundImage: `url(${herobg})` }}>
            <div className='max-w-screen-xl mx-auto pt-16'>

                <div className='min-h-[100vh] flex gap-5 flex-col lg:flex-row justify-between items-center p-3'>



                    <motion.div className='flex-1' variants={textVariants} initial="initial" animate="animate">
                        <motion.h2 variants={textVariants} className='text-3xl md:text-5xl font-bold tracking-wide hover:tracking-widest'>Hi _ <br /> <span className=' text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-indigo-500 to-pink-500'>I am Forhad </span></motion.h2>
                        <motion.h1 variants={textVariants} className='text-5xl md:text-7xl font-bold tracking-wide py-5'>Web <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-indigo-500 to-pink-500'>Developer</span></motion.h1>

                        <motion.p variants={textVariants} className='font-medium text-md md:text-xl text-gray-300 w-full '>Welcome to my web corner! I am Forhad , a Professional MERN (MongoDB, Express.js, React, Node.js) stack developer. With a love for crafting seamless and dynamic web applications, I thrive on turning innovative ideas into reality. My expertise lies in leveraging the power of MongoDB for robust data storage, Express.js for scalable server-side development, React for building intuitive user interfaces,....<button className="btn btn-link text-blue-500"> Read More</button></motion.p>
                    </motion.div>

                    <div className='flex'>
                        <div className='flex justify-center items-center gap-5'>
                            <div className='flex flex-col justify-center items-center mt-5'>
                                <div className='w-5 h-5 rounded-full bg-violet-600'></div>
                                <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-violet-500'>
                                </div>
                            </div>

                            <div className='space-y-5'>
                                <div>
                                    <a href="https://github.com/forhadhossen1" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className='text-5xl text-black bg-white rounded-full' />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/in/forhadhossen1/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className='text-5xl text-blue-600' />
                                    </a>
                                </div>

                                <div>
                                    <a href="https://www.facebook.com/profile.php?id=100085288886971" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className='text-5xl text-blue-600' />
                                    </a>
                                </div>
                            </div>

                        </div>

                        <img src={heroman} alt="heroman" className='w-1/2 md:w-full' />
                    </div>

                    <motion.div variants={sliderVariants} initial="initial" animate="animate" className='font-extrabold text-4xl md:text-7xl lg:text-[20vh] text-nowrap absolute bottom-0 opacity-5 text-gray-200 w-full md:w-1/2'>
                        Web Developer
                    </motion.div>
                </div>

            </div>
        </div >
    );
};

export default Hero;