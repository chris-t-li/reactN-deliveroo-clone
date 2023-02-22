import React, { Component, useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import sanityClient from '../sanity';


const FeaturedRow = ({ id, title, description }) => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "featured" && _id == $id ] {..., restaurants[]->{...,dishes[]->,type-> {name}}}[0]`, { id })
            .then(data => {
                setRestaurants(data?.restaurants)
            })
            .catch(console.error)
    }, [])

    // console.log(data?.restaurants)

    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg"> {title} </Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>

            <Text className="text-xs text-gray-500 px-4">
                {description}
            </Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="pt-4"
                contentContainerStyle={{
                    paddingHorizontal: 15,

                }}
            >
                {/* RestaurantCards */}
                {restaurants?.map(restaurant => {
                    return (
                        <RestaurantCard
                            key={restaurant._id}
                            id={restaurant._id}
                            imgUrl={restaurant.image}
                            title={restaurant.name}
                            rating={restaurant.rating}
                            genre={restaurant.type?.name}
                            address={restaurant.address}
                            short_description={restaurant.short_description}
                            // dishes={[]}
                            long={restaurant.long}
                            lat={restaurant.lat}
                        />
                    )
                })}
                {/* 
                <RestaurantCard
                    id="1"
                    imgUrl="https://images-cdn.welcomesoftware.com/Zz1iYmRkMDJjNmI3NjIxMWViODgwY2E1MDAxNTJkMjNlNg==/Zz1hZTNkM2M1YTliOTcxMWViYWUxOWIxMDE0ZmI1ZjNlMA%3D%3D.jpg?width=1366"
                    title="Yo! Sushi"
                    rating="4.5"
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is a Test Description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id="1"
                    imgUrl="https://images-cdn.welcomesoftware.com/Zz1iYmRkMDJjNmI3NjIxMWViODgwY2E1MDAxNTJkMjNlNg==/Zz1hZTNkM2M1YTliOTcxMWViYWUxOWIxMDE0ZmI1ZjNlMA%3D%3D.jpg?width=1366"
                    title="Yo! Sushi"
                    rating="4.5"
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is a Test Description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id="1"
                    imgUrl="https://images-cdn.welcomesoftware.com/Zz1iYmRkMDJjNmI3NjIxMWViODgwY2E1MDAxNTJkMjNlNg==/Zz1hZTNkM2M1YTliOTcxMWViYWUxOWIxMDE0ZmI1ZjNlMA%3D%3D.jpg?width=1366"
                    title="Yo! Sushi"
                    rating="4.5"
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is a Test Description"
                    dishes={[]}
                    long={20}
                    lat={0}
                /> 
                 */}
            </ScrollView>
        </View>
    )

}

export default FeaturedRow
