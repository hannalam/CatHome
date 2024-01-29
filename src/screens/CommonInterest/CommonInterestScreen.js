//I wrote this code

import React, { useLayoutEffect } from "react";
import { FlatList, ScrollView, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { getInterestUrl, getCatInfoByInterest, getCatTypeName } from "../../data/MockDataAPI";

export default function CommonInterestScreen(props) {
  const { navigation, route } = props;

  // Extract common interest ID, URL, and name from route params.
  const commonInterestId = route.params?.interest;
  const commonInterestUrl = getInterestUrl(commonInterestId);
  const commonInterestName = route.params?.name;

  // Set screen options, including the title.
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.name,
    });
  }, []);

  // Function to navigate to the "CatInfo" screen when a cat item is pressed.
  const onPressCatInfo = (item) => {
    navigation.navigate("CatInfo", { item });
  };

  // Function to render each cat item in the list.
  const renderCatInfo = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressCatInfo(item)}>
      <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressCatInfo(item)}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.photo_url }} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.catType}>{getCatTypeName(item.catTypeId)}</Text>
        </View>
      </TouchableHighlight>
    </TouchableHighlight>
  );

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={{ borderBottomWidth: 0.4, marginBottom: 10, borderBottomColor: "grey" }}>
        <Image style={styles.interestPhoto} source={{ uri: "" + commonInterestUrl }} />
      </View>
      <Text style={styles.interestInfo}>Cats also like: {commonInterestName}</Text>
      <View>
        <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={getCatInfoByInterest(commonInterestId)} renderItem={renderCatInfo} keyExtractor={(item) => `${item.catId}`} />
      </View>
    </ScrollView>
  );
}

//end of code I wrote