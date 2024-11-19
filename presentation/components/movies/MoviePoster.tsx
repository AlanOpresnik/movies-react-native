import { View, Text, Pressable, Image } from "react-native";
import React from "react";

interface Props {
  id: Number;
  poster: String;
  smallPosters: boolean;
  title: String;
  className?: String;
}

const MoviePoster = ({
  poster,
  id,
  smallPosters = false,
  title,
  className,
}: Props) => {
  return (
    <Pressable className={`active:opacity-90 px-2 ${className}`}>
      <Text className="flex justify-center items-center  text-lg">{title}</Text>
      <Image
        className="shadow-lg rounded-2xl w-full h-full"
        source={{ uri: poster }}
        style={{
          width: smallPosters ? 85 : 200,
          height: smallPosters ? 130 : 270,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default MoviePoster;
