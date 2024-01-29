//I wrote this code

import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { catType } from "../../data/dataArrays";
import { getNumberOfCatInfo } from "../../data/MockDataAPI";
import MenuImage from "../../components/MenuImage/MenuImage";

// Set screen options including the header title style, left menu button, and no header right element.
export default function CategoriesScreen(props) {
  const { navigation } = props;

  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        flex: 1,
      },
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  // Function to handle navigation when a cat type is pressed.
  const onPressCatType = (item) => {
    const title = item.name;
    const category = item;
    navigation.navigate("CatGroup", { category, title });
  };

  // Function to render each cat type in the list
  const renderCatType = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressCatType(item)}>
      <View style={styles.catTypeContainer}>
        <Image style={styles.catTypePhoto} source={{ uri: item.photo_url }} />
        <Text style={styles.catTypeName}>{item.name}</Text>
        <Text style={styles.catTypeInfo}>{getNumberOfCatInfo(item.id)} cats</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList data={catType} renderItem={renderCatType} keyExtractor={(item) => `${item.id}`} />
    </View>
  );
}

//end of code I wrote
