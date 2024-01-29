//I wrote this code

import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { getCatInfo, getCatTypeName } from "../../data/MockDataAPI";

export default function CatGroupScreen(props) {
  const { navigation, route } = props;

  const item = route?.params?.category;
  const CatInfosArray = getCatInfo(item.id);

  // Set screen options, including the title and header right element.
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerRight: () => <View />,  // This ensures there's no header right element.
    });
  }, []);

  // Function to navigate to the CatInfo screen when a cat profile is pressed.
  const onPressCatInfo = (item) => {
    navigation.navigate("CatInfo", { item });
  };
  
  // Render each cat profile in the FlatList.
  const renderCatInfos = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressCatInfo(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.catType}>{getCatTypeName(item.catTypeId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={CatInfosArray} renderItem={renderCatInfos} keyExtractor={(item) => `${item.catId}`} />
    </View>
  );
}

//end of code I wrote