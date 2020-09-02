import React from "react";
import { View, FlatList } from "react-native";
import Story from "../Story";

const data = [
  {
    imageUri:
      "https://cornellsun.com/wp-content/uploads/2019/11/RMC2012_0215.jpg",
    name: "Sagan",
  },
  {
    imageUri:
      "https://www.smythacademy.com/wordpress/wp-content/uploads/2017/08/richarddawkins.png",
    name: "Dawkins",
  },
  {
    imageUri:
      "https://futureoflife.org/wp-content/uploads/2020/05/Sam-Harris-1-e1590958808758.jpg",
    name: "Sam",
  },
  {
    imageUri:
      "https://cms.qz.com/wp-content/uploads/2017/06/neil-degrasse-tyson-qza.jpg?quality=75&strip=all&w=900&h=900&crop=1",
    name: "Neil",
  },
  {
    imageUri:
      "https://pbs.twimg.com/profile_images/1155308255721095170/gM5eC9jm_400x400.jpg",
    name: "dokdes",
  },
];

const Stories = () => (
  <FlatList
    data={data}
    keyExtractor={({ name }) => name}
    horizontal
    showsHorizontalScrollIndicator={false}
    renderItem={({ item }) => (
      <Story imageUri={item.imageUri} name={item.name} />
    )}
  />
);

export default Stories;
