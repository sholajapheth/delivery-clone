import { View, Text, Touchable, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectResturant } from "../features/resturantSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { XMarkIcon } from "react-native-heroicons/outline";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);
  return (
    <View className="bg-[#00ccbb] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row items-center justify-between p-5">
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="flex-row items-center"
          >
            <XMarkIcon color={"#fff"} size={20} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between ">
            <View>
              <Text className="text-lg font-bold text-gray-700">
                Estimated Delivery Time
              </Text>
              <Text className="text-4xl font-bold">45-55 mins</Text>
            </View>

            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="w-20 h-20"
            />
          </View>
          <Progress.Bar
            size={20}
            progress={0.5}
            color={"#00ccbb"}
            indeterminate={true}
          />
          <Text className="mt-3 text-gray-500">
            Your order is being prepared by {resturant?.name}
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: 6.5244,
          longitude: 3.3792,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        className="flex-1 -mt-10 x-0"
        mapType="mutedStandard"
      >
        <Marker coordinate={{
          latitude: 6.5244,
          longitude: 3.3792,
        }} 
        title={resturant.name}
        description={resturant.short_description}
        identifier="origin"
        pinColor="#00ccbb"
        />
      </MapView>

      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image 
        source={{
          uri: "https://links.papareact.com/wru"
        }}
        className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-3"
         />
         <View className="flex-1">
          <Text className="text-lg font-bold">
            Shola Japheth
          </Text>
          <Text className="text-gray-400 ">Weevil .... The Great</Text>
         </View>

<Text className="text-[#00ccbb] text-lg mr-3 ">Happy Birthday To Me</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
