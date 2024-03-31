import { motion } from 'framer-motion';
import { createSheetBest, readSheetBest } from '../../services/apiSheetBest';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { defaultPanggilan, urlSheetBest } from '../../constants/all';
import { ResponseSheetBestType, StatusType } from 'Undangan';

const IsiUndanganKetiga = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const nama = searchParams.get('nama');
  const panggilan = searchParams.get('panggilan');

  const handleKehadiran = async (status: StatusType) => {
    setLoading(true);

    if (await hasntAbsenceYet()) {
      const payload = {
        nama: nama ?? 'Tanpa Nama',
        status,
      };

      await createSheetBest<{ nama: string; status: StatusType }>(
        urlSheetBest,
        payload,
        'kehadiran',
      );
    }
    setLoading(false);
  };

  const hasntAbsenceYet = async (): Promise<boolean> => {
    const data = await readSheetBest(urlSheetBest, undefined, 'kehadiran');
    const api: ResponseSheetBestType[] = await data?.json();

    const found = api.find((item) => item.nama === nama);
    if (found) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <>
      <div className="text-center">
        <p>
          Atas kehadiran {panggilan ?? defaultPanggilan} kami ucapkan
          terimakasih
        </p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-kaushan text-2xl"
        >
          Wassalamu'alaikum wr.wb
        </motion.p>
        <div className="flex flex-col gap-y-2 justify-center mt-7">
          <button
            onClick={() => handleKehadiran('Hadir')}
            className=" text-white py-3 px-4 rounded-md bg-green-500 active:text-white transition-all flex justify-center items-center gap-x-2"
          >
            {loading && (
              <Icon icon="svg-spinners:180-ring-with-bg" fontSize={25} />
            )}
            {loading ? 'Loading..' : 'Konfirmasi Kehadiran'}
          </button>
        </div>
        <br />
      </div>
    </>
  );
};

export default IsiUndanganKetiga;
