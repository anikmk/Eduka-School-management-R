
import { motion } from 'framer-motion';
import { clientData } from './ClientData';

export default function OurClient() {

  return (
<div className='p-12 mt-24 bg-primary/5 '>
    <section className=" overflow-hidden flex items-center justify-center w-[75%] mx-auto">
  <div className="">
    {/* Slider with drag feature */}
    <motion.div
      className="flex gap-2 cursor-grab active:cursor-grabbing"
      drag="x"
      dragConstraints={{ left: -((clientData.length - 1) * 300), right: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {clientData.map((event, idx) => (
        <motion.div
          key={idx}
          className=" w-[200px]"
          whileTap={{ scale: 0.98 }}
        >
          <img
            src={event.client_Logo}
            alt={event.title}
            className="w-32 mx-auto"
          />
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
</div>

  );
}
