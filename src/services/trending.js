export const getTrending = async (currentPage) => {
  const dailyUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`;
  const weeklyUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`;

  const dailyTrending = await fetch(dailyUrl);
  const weeklyTrending = await fetch(weeklyUrl);

  const daily = await dailyTrending.json();
  const weekly = await weeklyTrending.json();

  return {
    daily,
    weekly,
  };
};
