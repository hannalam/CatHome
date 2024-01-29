//I wrote this code

import { StyleSheet } from 'react-native';
import { CatCard } from '../../AppStyles';

const styles = StyleSheet.create({
  titleIngredient: {
    fontWeight: 'bold',
    fontSize: 20
  },
  interestPhoto: {
    width: '100%',
    height: 250,
    alignSelf: 'center'
  },
  interestInfo: {
    color: 'black',
    margin: 10,
    fontSize: 19,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  container: CatCard.container,
  photo: CatCard.photo,
  title: CatCard.title,
  catType: CatCard.catType
});

export default styles;

//end of code I wrote