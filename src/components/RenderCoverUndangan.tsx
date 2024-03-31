import React, { SetStateAction } from 'react';
// import { useLocation } from 'react-router-dom';
import ButtonSurat from './ButtonSurat';
import { motion } from 'framer-motion';
import { defaultPanggilan } from '../constants/all';
import mascot from '../assets/mascot.png';

export default function RenderCoverUndangan({
  setOpen,
}: {
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const nama = searchParams.get('nama');
  // const panggilan = searchParams.get('panggilan');

  return (
    <>
      <p>Undangan Reuni Alumni</p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        id="covertitle"
        className="mb-8 font-kaushan"
      >
        SMPN 2 KRETEK
      </motion.p>
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src={mascot} alt="backdrop_mascot" width={350} height={400} />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p>Yth. {defaultPanggilan}</p>
        <p className="font-semibold text-lg">PAS SELAWE</p>
      </motion.div>
      <motion.p
        initial={{ y: -10, opacity: 0, scale: 0.9 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="text-center mt-5 mb-3"
      >
        Tanpa mengurangi rasa hormat, kami mengundang {defaultPanggilan} <br />{' '}
        untuk hadir dalam acara Reuni Alumni PAS SELAWE
      </motion.p>
      <ButtonSurat setOpen={setOpen} />
    </>
  );
}
