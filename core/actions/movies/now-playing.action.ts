import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/movieDb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>(`/now_playing`);
    const movies = data.results.map(MovieMapper.fromTheMovieDbToMovie);
    console.log(movies);
    return movies;
  } catch (error) {
    console.error(error);
    throw new Error("Cant not playing movies");
  }
};
