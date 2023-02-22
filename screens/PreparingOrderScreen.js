import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from "react-native-animatable"
import * as Progress from "react-native-progress"

const PreparingOrderScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("DeliveryScreen")
        }, 1000)
    }, [])

    return (
        <SafeAreaView className="bg-white flex-1 justify-center items-center">
            <Animatable.Image
                source={require("../assets/food_delivery.gif")}
                animations="slideInUp"
                iterationCount={1}
                className="h-84 w-84"
            />
            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
                className="text-lg my-10 font-bold text-center px-4"
            >
                Waiting for Restauraunt to accept your order!
            </Animatable.Text>
            <Progress.Circle size={60} indeterminate={true} color="#00CCBB" />
        </SafeAreaView>
    );
};

export default PreparingOrderScreen;
