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
        <View style={{flex: 1, marginHorizontal: 10, height: 120}}>

          {/* Bed & Bedroom  */}
          <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>

          {/* Type & Description */}
          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>

          {/*  Old price & new price */}
          <Text style={styles.prices}>
            <Text style={styles.price}>${post.newPrice} </Text>
            / night
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CarouselItem;