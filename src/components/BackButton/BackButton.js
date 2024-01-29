//I wrote this code

import React from "react";
import { TouchableHighlight, Image, } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";


// This is a reusable BackButton component that provides a touchable area with a back icon.
export default function BackButton(props) {
  // Call the provided function when the button is pressed.
  // This allows custom functionality to be defined when the button is used.
  return (
    <TouchableHighlight onPress={props.onPress} style={styles.btnContainer}>
      <Image source={require("../../../assets/icons/previous.png")} style={styles.btnIcon} />
    </TouchableHighlight>
  );
}

// Define the PropTypes for the BackButton component to specify the expected props.
BackButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};

//end of code I wrote

