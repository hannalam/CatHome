//I wrote this code

import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const NumColums = 2;
// item size
const ITEM_HEIGHT = 150;
const ITEM_MARGIN = 20;

// 2 photos per width
export const CatCard = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: ITEM_MARGIN,
    marginTop: 20,
    width: (SCREEN_WIDTH - (NumColums + 1) * ITEM_MARGIN) / NumColums,
    height: ITEM_HEIGHT + 75,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15
  },
  photo: {
    width: (SCREEN_WIDTH - (NumColums + 1) * ITEM_MARGIN) / NumColums,
    height: ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  catType: {
    fontSize: 14,
    marginBottom: 10
  }
});

//end of code I wrote