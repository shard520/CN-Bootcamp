const fetchManifests = () => {
  const rovers = ['Curiosity', 'Opportunity', 'Perseverance', 'Spirit'];
  const roverManifests = {};
  const url = 'https://mars-photos.herokuapp.com/api/v1/manifests/';
  try {
    rovers.forEach(async rover => {
      const fetchedData = await fetch(url + rover);
      if (fetchedData.status !== 200)
        throw new Error(`${fetchedData.status} - ${fetchedData.statusText}`);

      const { photo_manifest: res } = await fetchedData.json();
      roverManifests[rover] = res;
    });

    return roverManifests;
  } catch (err) {
    console.error(`💥💥 ${err.message}`);
  }
};

export default fetchManifests;
