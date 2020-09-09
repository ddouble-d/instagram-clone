import React, { useState, useEffect } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Footer = ({ likesCount: likesCountProp, caption, postedAt }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const onLikePressed = () => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            {isLiked ? (
              <AntDesign name="heart" size={24} color="#e73838" />
            ) : (
              <AntDesign name="hearto" size={24} color="#545454" />
            )}
          </TouchableWithoutFeedback>
          <Fontisto name="comment" size={22} color="#545454" />
          <SimpleLineIcons name="paper-plane" size={22} color="#545454" />
        </View>
        <FontAwesome name="bookmark-o" size={24} color="#545454" />
      </View>
      <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;
