import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ResturantScreen from "./screens/ResturantScreen";
import BasketScreen from "./screens/BasketScreen";
import { store } from "./store";
import { Provider } from "react-redux";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Resturant" component={ResturantScreen} />
          <Stack.Screen name="Basket" component={BasketScreen}
          options={{presentation: 'modal', headerShown: false}}
          />
          <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen} options={{
            presentation: "fullScreenModal", headerShown: false
          }} />
          <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} options={{
            presentation: "fullScreenModal", headerShown: false
          }} />


        </Stack.Navigator>
        <StatusBar style="auto" />
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
