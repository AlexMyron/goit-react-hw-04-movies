const cuttedDate = (date) => {
  return date.slice(0, 4);
};

const getGenres = (genres) =>
  genres.map((genre) => {
    return `${genre.name} `;
  });

export { cuttedDate, getGenres };
