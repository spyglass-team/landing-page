import { motion } from 'framer-motion';
import Image from 'next/image';

const Animation = () => {
  return (
    <>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ ease: 'linear', duration: 10, repeat: Infinity }}
        whileHover={{ rotate: -360 }}
      >
        <Image
          src='/logo-no-bg.png'
          alt='spyglass-logo'
          width='320'
          height='280'
        />
      </motion.div>
    </>
  );
};
export default Animation;
