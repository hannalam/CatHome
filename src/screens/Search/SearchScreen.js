//I wrote this code

import React, { useEffect, useLayoutEffect, useState } from "react";
import { FlatList, Text, View, Image, TouchableHighlight, Pressable } from "react-native";
import styles from "./styles";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCatTypeName, getCatInfoByCatInfoName, getCatInfoByCatTypeName, getCatInfoByInterestName } from "../../data/MockDataAPI";
import { TextInput } from "react-native-gesture-handler";

// The SearchScreen component allows users to search for cat information by cat type or cat name.
export default function SearchScreen(props) {
  const { navigation } = props;

  // State variables to manage the search input and search results.
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  // Use useLayoutEffect to customize the header options based on the search input.
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerTitle: () => (
        <View style={styles.searchContainer}>
          <Image style={styles.searchIcon} source={require("../../../assets/icons/search.png")} />
          <TextInput
            style={styles.searchInput}
            onChangeText={handleSearch}
            value={value}
            placeholder="cat type or cat name"
          />
          <Pressable onPress={() => handleSearch("")}>
          <Image style={styles.searchIcon} source={require("../../../assets/icons/close.png")} />
          </Pressable>
        </View>
      ),
      headerRight: () => <View />,
    });
  }, [value]);

  useEffect(() => {}, [value]);

  // Handle the search input change and update the search results.
  const handleSearch = (text) => {
    setValue(text);
    var CatInfoArray1 = getCatInfoByCatInfoName(text);
    var CatInfoArray2 = getCatInfoByCatTypeName(text);
    var aux = CatInfoArray1.concat(CatInfoArray2);
    var CatInfoArray = [...new Set(aux)];

    if (text == "") {
      setData([]);
    } else {
      setData(CatInfoArray);
    }
  };

  // Handle the press event when a cat info item is selected.
  const onPressCatInfo = (item) => {
    navigation.navigate("CatInfo", { item });
  };

  // Render each cat info item in a TouchableHighlight.
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
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={data} renderItem={renderCatInfos} keyExtractor={(item) => `${item.catId}`} />
    </View>
  );
}

//end of code I wrote