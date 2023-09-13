let url = "https://mindhub-xj03.onrender.com/api/amazing"


const getData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};


export const data = await getData(url)
