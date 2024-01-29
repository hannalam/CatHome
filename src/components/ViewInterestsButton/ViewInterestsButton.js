//I wrote this code

import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

// This is a reusable ViewInterestsButton component that represents a touchable button.
export default function ViewInterestsButton (props) {
    return (
      // Define a touchable highlight for the button with a custom underlay color.
      <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={props.onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>Cat interest!</Text>
        </View>
      </TouchableHighlight>
    );
}

// Define the PropTypes for the ViewInterestsButton component to specify the expected props.
ViewInterestsButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};

//end of code I wrote