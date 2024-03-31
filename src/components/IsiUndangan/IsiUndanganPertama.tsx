// import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { defaultPanggilan } from '../../constants/all';

const IsiUndanganPertama = () => {
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const nama = searchParams.get('nama');
  // const panggilan = searchParams.get('panggilan');

  return (
    <div className="text-center">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-kaushan text-2xl"
      >
        Assalamu'alaikum wr.wb
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-3"
      >
        Sehubungan dengan acara
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="font-bold text-[#B37845]"
      >
        REUNI ALUMNI PAS SELAWE SMPN 25 KRETEK
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        kami mengundang {defaultPanggilan} untuk hadir pada
      </motion.p>
    </div>
  );
};

export default IsiUndanganPertama;
