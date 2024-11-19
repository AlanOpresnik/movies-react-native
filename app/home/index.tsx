import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideShow from "@/presentation/components/movies/mainSlideShow";

const HomeScreen = () => {
  const { nowPlayingQuery } = useMovies();
  const safeArea = useSafeAreaInsets();
  if (nowPlayingQuery.isLoading) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <ActivityIndicator size={30} color={"purple"} />
      </View>
    );
  }
  return (
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text className="text-3xl font-bold px-4 mb-0 mt-2">MoviesApp</Text>
      <MainSlideShow movies={nowPlayingQuery.data ?? []} />
    </View>
  );
};

export default HomeScreen;
