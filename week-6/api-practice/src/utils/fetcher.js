const fetcher = async url => {
  try {
    const fetchedData = await fetch(url);
    if (fetchedData.status !== 200)
      throw new Error(`${fetchedData.status} - ${fetchedData.statusText}`);

    const res = await fetchedData.json();
    console.log(res);

    return res;
  } catch (err) {
    console.error(`💥💥 ${err.message}`);
  }
};

export default fetcher;
