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

const HomeScreen = () => {
  const navigate = useNavigation();

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
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
        <FeaturedRow
          title="Featured Restaurants"
          description="Paid placemnts from out partners"
          id="1"
        />
        {/* Tasty Discounts  */}
        <FeaturedRow
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts"
          id="2"
        />
        {/* Offers new you  */}
        <FeaturedRow
          title="Offers new you"
          description="Why not support your local resturant tonight"
          id="3"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
