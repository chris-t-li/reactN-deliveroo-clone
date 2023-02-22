import React, { Component, useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "category"]`)
            .then(data => {
                // console.log(data)
                setCategories(data)
            })
            .catch(console.error)
    }, [])
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {/* CategoryCard */}
            {categories.map(category => {
                return (<CategoryCard
                    key={category._id}
                    imgUrl={urlFor(category.image).width(200).url()}
                    title={category.name}
                />)
            })}


        </ScrollView>
    );
};

export default Categories;
