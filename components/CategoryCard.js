import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const CategoryCard = ({ title, imgUrl }) => {
  return (
    <TouchableOpacity className=" relative mx-2 ">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 font-bold text-white">
        {title}{" "}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
