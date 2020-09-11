import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";

const ProfilePicture = ({ uri, size = 60 }) => (
  <View style={[styles.container, { width: size + 4 }, { height: size + 4 }]}>
    <Image
      source={{
        uri: uri,
      }}
      style={[styles.image, { width: size }, { height: size }]}
    />
  </View>
);

export default ProfilePicture;
