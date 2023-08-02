import './Gallery.css'
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

import fotoExemplo1 from '/fotoExemplo1.jpg'
import fotoExemplo2 from '/fotoexemplo2.jpg'
import fotoExemplo3 from '/fotoexemplo3.jpg'
import fotoExemplo4 from '/fotoexemplo4.jpg'
import fotoExemplo5 from '/fotoexemplo5.jpg'

const Gallery = () => {

    const caroussel = useRef()
    const[width, setWidth] = useState(0)

    useEffect(()=> {
        console.log(caroussel.current?.scrollWidth, caroussel.current?.offsetWidth)
        setWidth(caroussel.current?.scrollWidth - caroussel.current?.offsetWidth)
    },[])

    const images = [fotoExemplo1,fotoExemplo2,fotoExemplo3,fotoExemplo4,fotoExemplo5]
    return ( 
        <motion.div ref={caroussel} className='caroussel-box' whileTap={{cursor: 'grabbing'}}>
            <motion.div className='caroussel d-flex' 
            dragConstraints={{right: 0, left: -width}}
            drag="x"
            initial={{x:50}}
            animate={{x:0}}
            transition={{duration: 1}}
            >
                {images.map((image)=>(
                    <motion.div key={image} className='px-2'>
                        <div className='caroussel-images' style={{backgroundImage: `url(${image})`}}></div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
     );
}
 
export default Gallery;