//I wrote this code

import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { catInfo } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCatTypeName } from "../../data/MockDataAPI";

// The HomeScreen component represents the main screen of the application.
export default function HomeScreen(props) {
  const { navigation } = props;

  // Use useLayoutEffect to customize the header options.
  useLayoutEffect(() => {
    navigation.setOptions({
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

  // Handle the press event when a recipe item is selected.
  const onPressRecipe = (item) => {
    navigation.navigate("CatInfo", { item });
  };

  // Render each recipe item in a TouchableHighlight.
  const renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.catType}>{getCatTypeName(item.catTypeId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={catInfo} renderItem={renderRecipes} keyExtractor={(item) => `${item.catId}`} />
    </View>
  );
}

//end of code I wrote