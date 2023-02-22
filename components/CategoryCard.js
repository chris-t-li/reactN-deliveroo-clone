import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

const CategoryCard = ({ imgUrl, title }) => {

    return (
        <TouchableOpacity className="relative mr-2 ">
            <Image
                source={{ uri: imgUrl }}
                className="h-20 w-20 rounded"
            />
            <Text className="absolute bottom-1 left-1 text-white font-bold bg-slate-500 rounded-xl"> {title} </Text>
        </TouchableOpacity>
    )

}

export default CategoryCard;
