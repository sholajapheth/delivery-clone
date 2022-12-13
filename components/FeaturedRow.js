import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import client, { urlFor } from "../sanity";
import ResturantCard from "./ResturantCard";

const FeaturedRow = ({ id, title, description }) => {
  const [resturants, setResturants] = React.useState([]);

  React.useEffect(() => {
    client
      .fetch(
        `*[_type == "featured" && _id == $id ]{
            ...,
            resturants []->{
              ...,
              dishes []->,
              type-> {
                name
              }
            
          },}[0]`,
        { id }
      )
      .then((data) => {
        setResturants(data.resturants);
      });
  }, []);


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
        {resturants.map((resturant) => (
          <ResturantCard
            id={resturant._id}
            key={resturant._id}
            imgUrl={resturant.image}
            name={resturant.name}
            rating={4.5}
            genre={resturant.genre}
            address={resturant.address}
            short_description={resturant.short_description}
            dishes={resturant.dishes}
            long={resturant.long}
            lat={resturant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
