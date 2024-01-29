//I wrote this code

import React from "react";
import { TouchableHighlight, Image, Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";


// This is a reusable MenuButton component that represents a touchable button with an icon and text.
export default function MenuButton(props) {
  const { title, onPress, source } = props;

  return (
    // Define a touchable highlight for the button with a custom underlay color.
    <TouchableHighlight onPress={onPress} style={styles.btnClickContain} underlayColor="rgba(128, 128, 128, 0.1)">
      <View style={styles.btnContainer}>
        <Image source={source} style={styles.btnIcon} />
        <Text style={styles.btnText}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}

// Define the PropTypes for the MenuButton component to specify the expected props.
MenuButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};

//end of code I wrote