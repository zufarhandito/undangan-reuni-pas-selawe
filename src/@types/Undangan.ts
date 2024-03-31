declare module 'Undangan' {
  type StatusType = 'Hadir' | 'Tidak Hadir';

  type ResponseSheetBestType = {
    nama: string;
    status: StatusType;
  };
}
