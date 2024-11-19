import { Movie } from "../interfaces/movie.interface";
import { Result } from "../interfaces/movieDb-response";

export class MovieMapper {
  static fromTheMovieDbToMovie = (movie: Result): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      backDrop: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
      rating: movie.vote_average,
    };
  };
}
