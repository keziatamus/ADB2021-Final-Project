import React from 'react';
import { View, Text, Image, useWindowDimensions, Pressable } from "react-native";
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

const CarouselItem = (props) => {

  const post = props.post;
  const width = useWindowDimensions().width;
  return (
    <View style={[styles.container, { width: width - 60}]}>
      <View style={styles.innerContainer}>
        <View style={{flex: 1, marginHorizontal: 10, height: 100}}>

          {/* Building Type */}
          <Text style={styles.type}>
            {post.building_type}
          </Text>

          {/* Type & Description */}
          <Text style={styles.description}>
            Area Size: {post.area}
          </Text>

          {/*  Price */}
          <Text style={styles.prices}>
            <Text style={styles.price}>NT${post.price} </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CarouselItem;