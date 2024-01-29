//I wrote this code

import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { getInterest, getAllInterests } from "../../data/MockDataAPI";

// The InterestsScreen component displays a list of interests associated with a specific category.
export default function InterestsScreen(props) {
  const { navigation, route } = props;

  // Retrieve the interests array from the route parameters.
  const item = route.params?.interests;
  const interestArray = getAllInterests(item);

  // Use useLayoutEffect to customize the header options.
  useLayoutEffect(() => {
    navigation.setOptions({
      // Set the screen title based on the route parameters.
      title: route.params?.title,
      headerTitleStyle: {
        fontSize: 16,
      },
    });
  }, []);

  // Set the screen title based on the route parameters.
  const onPressInterest = (item) => {
    let name = getInterest(item.interestId);
    let interest = item.interestId;
    navigation.navigate("CommonInterest", { interest, name });
  };

  // Render each interest item in a TouchableHighlight.
  const renderinterest = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressInterest(item[0])}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item[0].photo_url }} />
        <Text style={styles.title}>{item[0].name}</Text>
        <Text style={{ color: "#f76534" }}>{item[1]}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={3} data={interestArray} renderItem={renderinterest} keyExtractor={(item) => `${item.catId}`} />
    </View>
  );
}

//end of code I wrote