import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import FeaturedRow from "../components/FeaturedRow";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigate = useNavigation();
  const [featuredCategories, setFeaturedCategories] = React.useState([]);

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  }, []);

  React.useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"]{
  ...,
  resturants []=>{
    ...,
    dishes []=>{}
  
}
}`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView style={StyleSheet.absoluteFill} className="bg-white pt-10">
      <View className=" flex-row pb-3 item-center mx-4 space-x-2 ">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs ">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#00ccbb" />
          </Text>
        </View>

        <UserIcon size={35} color="#00ccbb" />
      </View>

      {/* Search  */}
      <View className="flex-row items-center space-x-2 pb-2 mx-3">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color="#00ccbb" />
          <TextInput
            placeholder="Resturant & Cuisines"
            keyboardType="defualt"
          />
        </View>

        <AdjustmentsVerticalIcon size={20} color="#00ccbb" />
      </View>

      {/* Body  */}

      <ScrollView>
        {/* Categories  */}
        <Categories />

        {/* Featured rows  */}

        {featuredCategories?.map((category, index) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
