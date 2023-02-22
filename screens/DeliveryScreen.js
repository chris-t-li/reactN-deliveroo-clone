import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../features/restaurantSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'
import * as Progress from "react-native-progress"
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);

    return (
        <View className="bg-[#00CCBB] flex-1">
            <SafeAreaView className="z-50">
                <View className="flex-row justify-between items-center p-5">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Home")}
                    >
                        <XCircleIcon color="white" size={30} />
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">Order Help</Text>
                </View>

                <View className="bg-[#F5F5F5] mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                    <View className="flex-row justify-between">
                        <View>


                            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                            <Text className="text-3xl font-bold">45 - 55 Minutes</Text>
                        </View>
                        <Image
                            source={{ uri: "https://www.seekpng.com/png/detail/988-9885423_cartoon-hand-drawn-illustration-takeaway-brother-png-delivery.png" }}
                            className="h-20 w-20"
                        />
                    </View>

                    <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
                    <Text className="mt-3 text-gray-500">
                        Your order at {restaurant.title} is being prepared
                    </Text>
                </View>
            </SafeAreaView >

            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.long,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
                className="flex-1 z-0 -mt-10"
                mapType="mutedStandard"
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.long,
                    }}
                    title={restaurant.title}
                    description={restaurant.short_description}
                    identifier="origin"
                // pinColor='#00CCCBB'
                >
                </Marker>

            </MapView>
            <SafeAreaView className="bg-white flex-row items-center space-x-5 h-24">
                <Image
                    source={{
                        url: "https://www.seekpng.com/png/detail/114-1145491_graphic-royalty-free-library-delivery-vector-person-delivery.png"
                    }}
                    className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
                />
                <View className="flex-1">
                    <Text className="text-lg">
                        Chris K.E.
                    </Text>
                    <Text className="text-gray-400">Your Rider</Text>
                </View>
                <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
            </SafeAreaView>
        </View >
    )

}

export default DeliveryScreen;
