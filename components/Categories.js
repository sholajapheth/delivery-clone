import React from "react";
import { View, Text, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
    </ScrollView>
  );
};

export default Categories;
