import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import CategoryCard from "./CategoryCard";

const Categories = () => {
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

            <CategoryCard
                imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-eR8aSImXyWCXHSbw5uVsEdKKkvu4ftCpn-0f67RuGQxym8QnjNvm8D7df2Aauwt5Uck&usqp=CAU"
                title="Sushi"
            />
            <CategoryCard
                imgUrl="https://www.acouplecooks.com/wp-content/uploads/2019/06/Mushroom-Pizza-with-Herbs-011.jpg"
                title="Pizza"
            />
            <CategoryCard
                imgUrl="https://images.squarespace-cdn.com/content/v1/5e18d3f50307a1644980fa7f/1630531161840-UYFCUW75ASLC98YPS34J/best+Thai+food+in+Elmhurst+Queens"
                title="Thai"
            />
            <CategoryCard
                imgUrl="https://www.chefspencil.com/wp-content/uploads/Dim-Sum-960x960.jpeg"
                title="Dim Sum"
            />
            <CategoryCard
                imgUrl="https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Pork-carnitas-b94893e.jpg?quality=90&resize=556,505"
                title="Mexican"
            />
            <CategoryCard
                imgUrl="https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Homemade-Ground-Beef-Lasagna.png"
                title="Italian"
            />
            <CategoryCard
                imgUrl="https://www.twopeasandtheirpod.com/wp-content/uploads/2020/07/Chipotle-Burgers-7.jpg"
                title="Burgers"
            />
            {/* <Text>Categories Hello</Text> */}
        </ScrollView>
    );
};

export default Categories;
