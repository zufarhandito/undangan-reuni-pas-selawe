import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const IsiUndanganKedua = () => {
  const handleClickLokasi = () => {
    const url = 'https://maps.app.goo.gl/r2ZvVF18etdTR5MNA';
    window.open(url, '_blank');
  };
  return (
    <>
      <div className="p-4 my-2 flex items-center flex-col ">
        <motion.p
          initial={{ scale: 0.5, opacity: 0.5 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold"
        >
          Minggu, 14 April 2024
        </motion.p>
        <motion.p className="font-semibold">Pukul 09:00 WIB</motion.p>
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex gap-x-1 items-center mt-2 py-1.5 px-3 rounded-lg border border-yellow-700"
          onClick={handleClickLokasi}
        >
          <Icon
            icon="heroicons:map-pin-16-solid"
            fontSize={25}
            color="#dc2626"
          />
          <p>Bebek Madiyo, Depok, Parangtritis</p>
        </motion.button>
      </div>
    </>
  );
};

export default IsiUndanganKedua;
