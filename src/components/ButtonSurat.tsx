import React, { SetStateAction } from 'react';
import { Icon } from '@iconify/react';

export default function ButtonSurat({
  setOpen,
}: {
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <div
        className="border-2 border-[#B37845] p-0.5 border-opacity-30 hover:scale-110 transition-all cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="px-4 py-1.5 bg-[#B37845] text-[#f4f4f2] flex gap-x-2 items-center relative">
          <Icon icon={'quill:mail'} fontSize={24} />
          <p className="z-10">Buka Undangan</p>
        </div>
      </div>
    </>
  );
}
