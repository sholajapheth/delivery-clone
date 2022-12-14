import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

const PreparingOrderScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
     setTimeout(()=>{
        navigation.navigate("DeliveryScreen")
     }, 2000)
    }, [])
    
  return (
    <SafeAreaView className="flex-1 justify-center  items-center`">
      <Animatable.Image
      source={require('../assets/awaiting.gif')}
      animation="slideInUp"
      iterationCount={1}
      
        />

        <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-black text-lg font-bold text-center my-20" 
        >Waiting for Resturant to accept your order</Animatable.Text>

    </SafeAreaView>
  )
}

export default PreparingOrderScreen