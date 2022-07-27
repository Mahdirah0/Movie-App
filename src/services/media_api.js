export const getMediaByType = async (currentPage, type) => {
  try {
    const url = `https://api.themoviedb.org/3/discover/${type}?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

const getTrailer = (videoData) => {
  return videoData.results.find((data) => data.type === 'Trailer');
};

export const getMediaDetails = async (id, type) => {
  try {
    const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    const video = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    const videoData = await video.json();

    const trailer = getTrailer(videoData);
    console.log(trailer);

    if (!trailer) {
      return {
        data,
        videoKey: undefined,
      };
    }

    return {
      data,
      videoKey: trailer.key,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getTrending = async (type) => {
  try {
    const url = `https://api.themoviedb.org/3/trending/${type}/day?api_key=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    return data.results.slice(0, 5);
  } catch (error) {
    console.log(error);
  }
};
