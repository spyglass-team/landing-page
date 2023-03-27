import { motion } from 'framer-motion';
import Image from 'next/image';

const Animation = () => {
  return (
    <>
      <motion.div
        animate={{ rotate: 360 }}
        whileHover={{ rotate: -360 }}
        transition={{ duration: 2 }}
      >
        <Image
          src='/Kubernetes.png'
          alt='spyglass-logo'
          width='300'
          height='300'
        />
      </motion.div>
    </>
  );
};
export default Animation;
