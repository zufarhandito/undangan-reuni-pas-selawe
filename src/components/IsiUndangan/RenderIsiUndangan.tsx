import React from 'react';
import IsiUndanganPertama from './IsiUndanganPertama';
import IsiUndanganKedua from './IsiUndanganKedua';
import IsiUndanganKetiga from './IsiUndanganKetiga';
import { motion } from 'framer-motion';

export default function RenderIsiUndangan() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        id="isiundangan"
        className="h-full w-full flex-col relative"
      >
        <IsiContainer>
          <IsiUndanganPertama />
        </IsiContainer>

        <IsiContainer>
          <IsiUndanganKedua />
        </IsiContainer>

        <IsiContainer>
          <IsiUndanganKetiga />
        </IsiContainer>
      </motion.div>
    </>
  );
}

const IsiContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className="h-screen flex justify-center items-center ">
        {children}
      </section>
    </>
  );
};
