import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Post from "../Post";
import Stories from "../Stories";

const data = [
  {
    id: "1",
    user: {
      name: "dokdes",
      imageUri:
        "https://pbs.twimg.com/profile_images/1155308255721095170/gM5eC9jm_400x400.jpg",
    },
    imageUri: "https://m.media-amazon.com/images/I/51C2HXhhKZL.jpg",
    caption: "Makoto Shinkai Masterpiece! #anime",
    likesCount: 1221,
    postedAt: "6 minutes ago",
  },
  {
    id: "2",
    user: {
      name: "desdok",
      imageUri:
        "https://cornellsun.com/wp-content/uploads/2019/11/RMC2012_0215.jpg",
    },
    imageUri: "https://m.media-amazon.com/images/I/51C2HXhhKZL.jpg",
    caption: "Makoto Shinkai Masterpiece! #anime",
    likesCount: 1221,
    postedAt: "6 minutes ago",
  },
  {
    id: "3",
    user: {
      name: "dokdes",
      imageUri:
        "https://pbs.twimg.com/profile_images/1155308255721095170/gM5eC9jm_400x400.jpg",
    },
    imageUri: "https://m.media-amazon.com/images/I/51C2HXhhKZL.jpg",
    caption: "Makoto Shinkai Masterpiece! #anime",
    likesCount: 1221,
    postedAt: "6 minutes ago",
  },
];

const Feed = () => (
  <FlatList
    style={styles.flatList}
    data={data}
    renderItem={({ item }) => <Post post={item} />}
    keyExtractor={({ id }) => id}
    ListHeaderComponent={Stories}
  />
);

const styles = StyleSheet.create({
  flatList: {
    marginTop: 25,
  },
});

export default Feed;
