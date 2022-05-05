type RatingDetails={
    rating: number;
    count: number;
}
type Episodes ={
    id: number;
    title: string;
    season: number;
    episode: number;
    released: string;
}
type Shows = {
    id: number;
    title: string;
    description: string;
    year: number;
    isPopular: boolean;
    available: boolean;
    ratingDetails: RatingDetails
    genres: string[];
    episodes: Episodes[];
  }

const shows: Shows[] = [
  {
    id: 1,
    title: 'Arrow',
    description: 'It is based on the DC Comics character Green Arrow, a costumed crime-fighter',
    year: 2012,
    isPopular: false,
    available: false,
    ratingDetails: {
      rating: 8.1137,
      count: 642,
    },
    genres: ['Drama', 'Action', 'Science-Fiction'],
    episodes: [
      {
        id: 1,
        title: 'Pilot',
        season: 1,
        episode: 1,
        released: '2012-10-11 00:00:00',
      },
      {
        id: 24,
        title: 'City of Heroes',
        season: 2,
        episode: 1,
        released: '2012-10-11 00:00:00',
      },
    ],
  },
  {
    id: 2,
    title: 'Bouncers',
    description: 'Series following the brave people who keep the peace at night.',
    year: 2019,
    isPopular: true,
    available: false,
    ratingDetails: {
      rating: 6.532,
      count: 583,
    },
    genres: ['Lifestyle', 'Drama'],
    episodes: [
      {
        id: 1,
        title: 'Episode 5',
        season: 1,
        episode: 5,
        released: '2019-08-28 23:00:00',
      },
      {
        id: 6,
        title: 'Episode 6',
        season: 1,
        episode: 6,
        released: '2019-08-28 23:00:00',
      },
    ],
  },
  {
    id: 3,
    title: 'Supernatural',
    description: 'Two brothers follow their father\'s footsteps as hunters, fighting evil supernatural beings',
    year: 2005,
    isPopular: true,
    available: false,
    ratingDetails: {
      rating: 9.995,
      count: 50,
    },
    genres: ['Fantasy', 'Drama'],
    episodes: [
      {
        id: 2,
        title: 'Wendigo',
        season: 1,
        episode: 2,
        released: '2005-09-20 23:00:00',
      },
    ],
  },
];

const getShowTitles = (shows.flatMap((show) => {
  const showTitles = [show.title];
  show.episodes.map((episode) => (showTitles.push(episode.title)));
  return (showTitles);
}));

console.log(getShowTitles);
console.log('----------------------------------------------------------');

const getShowIDs = (shows.flatMap((show) => {
  const showTitles = [show.id];
  show.episodes.map((episode) => (showTitles.push(episode.id)));
  return (showTitles);
}));

console.log(getShowIDs);
console.log('----------------------------------------------------------');

const getShowRatings = (shows.map((show) => show.ratingDetails.rating));

console.log(getShowRatings);
console.log('----------------------------------------------------------');

const GetShowRatingsRounded = (shows.map((show) => show.ratingDetails.rating.toFixed(2)));
console.log(GetShowRatingsRounded);
console.log('----------------------------------------------------------');

const capitaliseGenres = (shows.map((show) => ({
  ...show,
  genres: [show.genres.map((genre) => genre.toUpperCase())],
})));

console.log(capitaliseGenres);
console.log('----------------------------------------------------------');

const doubleRatingCount = (shows.map((show) => (
  {
    ...show,
    ratingDetails: { ...show.ratingDetails, count: show.ratingDetails.count * 2 },
  }
)));

console.log(doubleRatingCount);
console.log('----------------------------------------------------------');

const roundRatings = (shows.map((show) => (
  {
    ...show,
    ratingDetails: { ...show.ratingDetails, rating: show.ratingDetails.rating.toFixed(2) },
  }
)));

console.log(roundRatings);
console.log('----------------------------------------------------------');

const showIDTitleDescription = (shows.map((show) => {
  const newShow = { show: show.id, title: show.title, description: show.description };
  return (newShow);
}));

console.log(showIDTitleDescription);
console.log('----------------------------------------------------------');

const changeFirstIDRating = (shows.map((show) => {
  if (show.id === 1) {
    return ({ ...show, ratingDetails: { ...show.ratingDetails, rating: 9.9999 } });
  }
  return show;
}));
console.log(changeFirstIDRating);
console.log('----------------------------------------------------------');

const changeSecondIDRatingandCount = (shows.map((show) => {
  if (show.id === 2) {
    return ({ ...show, ratingDetails: { rating: 8, count: show.ratingDetails.count + 1 } });
  }
  return show;
}));

console.log(changeSecondIDRatingandCount);
console.log('----------------------------------------------------------');

const checkIsPopular = (shows.map((show) => {
  if (show.ratingDetails.rating > 7) {
    return ({ ...show, isPopular: true });
  }
  return show;
}));

console.log(checkIsPopular);
console.log('----------------------------------------------------------');

const changeRatingIfPopular = (shows.map((show) => {
  if (show.isPopular) {
    return ({ ...show, ratingDetails: { ...show.ratingDetails, rating: 10 } });
  }
  return show;
}));

console.log(changeRatingIfPopular);
console.log('----------------------------------------------------------');

const changeSciFitoAvailable = (shows.map((show) => {
  if (show.genres.includes('Science-Fiction')) {
    return ({ ...show, available: true });
  }
  return show;
}));

console.log(changeSciFitoAvailable);
console.log('----------------------------------------------------------');

const episodeIDsIfPopular = (shows.map((show) => {
  if (show.isPopular) {
    return ({ ...show, episodes: show.episodes.map((episode) => episode.id) });
  }
  return ({ ...show, episodes: [] });
}));

console.log(episodeIDsIfPopular);
console.log('----------------------------------------------------------');

const arrayOfGenres = (shows.flatMap((show) => [...show.genres]));

console.log(arrayOfGenres);
console.log('----------------------------------------------------------');

const addDocumentaryIfPopular = (shows.map((show) => {
  if (show.isPopular && show.year > 2016) {
    return ({ ...show, genres: show.genres.concat('Documentary') });
  }
  return show;
}));

console.log(addDocumentaryIfPopular);
console.log('----------------------------------------------------------');

const changeFirstShowsTwentyFourth = shows.map((show) => ((show.id === 1) ? {
  ...show,
  episodes: show.episodes.map((episode) => (episode.id === 24 ? { ...episode, released: '2022-10-12 00:00:00' } : episode)),
} : show));

console.log(changeFirstShowsTwentyFourth);
console.log('----------------------------------------------------------');

const getRatingLowerThanSeven = shows.filter((show) => show.ratingDetails.rating < 7);

console.log(getRatingLowerThanSeven);
console.log('----------------------------------------------------------');

const getDCinDescription = shows.filter((show) => show.description.includes('DC'));

console.log(getDCinDescription);
console.log('----------------------------------------------------------');

const getPopularShows = shows.filter((show) => show.isPopular);

console.log(getPopularShows);
console.log('----------------------------------------------------------');

const getDramas = shows.filter((show) => show.genres.includes('Drama'));

console.log(getDramas);
console.log('----------------------------------------------------------');

const getShowWithTwoOrMoreEpisodes = shows.filter((show) => (show.episodes.length >= 2));

console.log(getShowWithTwoOrMoreEpisodes);
console.log('----------------------------------------------------------');

const getShowsWithWendigo = shows.filter((show) => (show.episodes.find((episode) => episode.title === 'Wendigo')));

console.log(getShowsWithWendigo);
console.log('----------------------------------------------------------');

const getShowsLowerThan2019 = shows.filter((show) => show.year < 2019);

console.log(getShowsLowerThan2019);
console.log('----------------------------------------------------------');

const getShowsThatStartWithSup = shows.filter((show) => show.title.startsWith('Sup'));

console.log(getShowsThatStartWithSup);
console.log('----------------------------------------------------------');

const getShowsWithIDtwo = shows.filter((show) => show.id === 2);

console.log(getShowsWithIDtwo);
console.log('----------------------------------------------------------');

const getShowsWithoutIDtwo = shows.filter((show) => show.id !== 2);

console.log(getShowsWithoutIDtwo);
console.log('----------------------------------------------------------');

const getDramaWithGoodRating = shows.filter((show) => (show.genres.includes('Drama') && show.ratingDetails.rating > 7));

console.log(getDramaWithGoodRating);
console.log('----------------------------------------------------------');
