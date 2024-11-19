import { View, Text, useWindowDimensions } from "react-native";
import React, { useRef } from "react";
import { Movie } from "../../../infrastructure/interfaces/movie.interface";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
}

const MainSlideShow = ({ movies }: Props) => {
  const ref = useRef<ICarouselInstance>(null);
  const width = useWindowDimensions().width;
  return (
    <View className="h-[200px] w-full">
      <Carousel
        data={movies}
        width={250}
        height={350}
        style={{
          width: width,
          height: 350,
          justifyContent: "center",
          alignItems: "center",
        }}
        mode="parallax"
        defaultIndex={1}
        ref={ref}
        renderItem={({ item }) => (
          <MoviePoster title={item.title} smallPosters={false} id={item.id} poster={item.poster} />
        )}
      />
    </View>
  );
};

export default MainSlideShow;
