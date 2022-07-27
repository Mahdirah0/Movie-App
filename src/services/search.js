const searchMedia = async (params) => {
  const requestUrl = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${params}&page=1&include_adult=false`;
  const request = await fetch(requestUrl);
  const requestData = await request.json();
  return requestData;
};

export default searchMedia;
