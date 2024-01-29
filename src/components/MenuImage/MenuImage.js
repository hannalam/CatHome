//I wrote this code

import React from "react";
import { TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";


// This is a reusable MenuImage component that represents an image-based button,
// used for opening a navigation menu or performing a specific action.
export default function MenuImage(props) {
  return (
    // Define a TouchableOpacity component for the touchable image button.
    <TouchableOpacity style={styles.headerButtonContainer} onPress={props.onPress}>
      <Image style={styles.headerButtonImage} source={require("../../../assets/icons/list.png")} />
    </TouchableOpacity>
  );
}

// Define the PropTypes for the MenuImage component to specify the expected props
MenuImage.propTypes = {
  onPress: PropTypes.func,
};

//end of code I wrote