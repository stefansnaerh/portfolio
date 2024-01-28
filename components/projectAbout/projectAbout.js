import styles from "./projectAbout.module.scss";

export default function ProjectAbout({ projectName, aboutProject }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.headline}>{projectName}</h3>

      <p className={styles.text}>{aboutProject}</p>
    </div>
  );
}

//
export const config = {
  api_key: "6af2e686b425c8e3274b4275976091e1",
  api_base_url: "https://api.themoviedb.org/3/",
  api_over_7:
    "release_date.gte=1980&vote_count.gte=400&vote_average.gte=7&with_watch_monetization_types=flatrate",
  image_base_url: "https://image.tmdb.org/t/p/w500/",
  trailer_base_url: "https://www.youtube.com/watch?v=",

  api_top_rated_movies:
    "&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=500&with_watch_monetization_types=flatrate",
  api_top_rated_popularity:
    "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=500&with_watch_monetization_types=flatrate",

  api_top_tv_popularity:
    "&language=en-US&sort_by=popularity.desc&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0",
  api_top_tv_rating:
    "&language=en-US&sort_by=vote_average.desc&page=1&vote_count.gte=10&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0",
};
