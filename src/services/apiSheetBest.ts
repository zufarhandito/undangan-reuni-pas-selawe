export const createSheetBest = async <T>(
  url: string,
  body: T,
  tabs?: string,
) => {
  const tabUrl = `/tabs/${tabs}`;
  try {
    const res = await fetch(`${url}${tabUrl}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body),
    });
    return res;
  } catch (error) {
    console.log('ERROR STORING DATA TO SPREADSHEET: ', error);
  }
};

export const readSheetBest = async <T>(
  url: string,
  params?: T,
  tabs?: string,
) => {
  try {
    const tabUrl = `/tabs/${tabs}`;
    const newParams = params ? new URLSearchParams(JSON.stringify(params)) : '';
    const res = await fetch(url + newParams + tabUrl);
    return res;
  } catch (error) {
    console.log('ERROR FETCHING DATA FROM SPREADSHEET', error);
  }
};
