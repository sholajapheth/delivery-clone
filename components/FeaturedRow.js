import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./ResturantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg ">{title}</Text>
        <ArrowRightIcon color={"#00ccbb"} size={20} />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        className="pt-4"
      >
        {/* Restaurant Card  */}
        <ResturantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Shushi"
          rating={4.5}
          genre="Japanese"
          address="1234 Main St"
          short_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
          dishes={["Sushi", "Ramen", "Sashimi"]}
          long={20}
          lat={20}
        />
        <ResturantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Shushi"
          rating={4.5}
          genre="Japanese"
          address="1234 Main St"
          short_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
          dishes={["Sushi", "Ramen", "Sashimi"]}
          long={20}
          lat={20}
        />
        <ResturantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Shushi"
          rating={4.5}
          genre="Japanese"
          address="1234 Main St"
          short_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
          dishes={["Sushi", "Ramen", "Sashimi"]}
          long={20}
          lat={20}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
