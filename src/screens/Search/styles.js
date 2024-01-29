//I wrote this code

import { StyleSheet } from "react-native";
import { CatCard } from "../../AppStyles";

const styles = StyleSheet.create({
  container: CatCard.container,
  photo: CatCard.photo,
  title: CatCard.title,
  catType: CatCard.catType,
  btnIcon: {
    height: 14,
    width: 14,
  },
  searchContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#EDEDED", 
    borderRadius: 10, 
    width: 250,
    justifyContent: "space-around"
  },
  searchIcon: { 
    width: 20, 
    height: 20, 
    tintColor: 'grey' 
  },
  searchInput: {
    backgroundColor: "#EDEDED",
    color: "black",
    width: 180,
    height: 50,
  }
});

export default styles;

//end of code I wrote