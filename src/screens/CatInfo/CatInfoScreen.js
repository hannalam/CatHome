//I wrote this code

import React, { useLayoutEffect, useRef, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import styles from "./styles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  getInterest,
  getCatTypeName,
  getCatTypeById,
} from "../../data/MockDataAPI";
import BackButton from "../../components/BackButton/BackButton";
import ViewInterestsButton from "../../components/ViewInterestsButton/ViewInterestsButton";

const { width: viewportWidth } = Dimensions.get("window");

export default function CatInfoScreen(props) {
  const { navigation, route } = props;

  const item = route.params?.item;
  const category = getCatTypeById(item.catTypeId);
  const title = getCatTypeName(category.id);

  const [activeSlide, setActiveSlide] = useState(0);

  const slider1Ref = useRef();
  
  // Set screen options, including a transparent header, back button, and no header right element.
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: "true",
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  // Function to render each image in the carousel.
  const renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );

  // Function to handle navigation when an interest is pressed.
  const onPressinterest = (item) => {
    var name = getInterest(item);
    let interest = item;
    navigation.navigate("interest", { interest, name });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.carouselContainer}>
        <View style={styles.carousel}>
          <Carousel
            ref={slider1Ref}
            data={item.photosArray}
            renderItem={renderImage}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            firstItem={0}
            loop={false}
            autoplay={false}
            autoplayDelay={500}
            autoplayInterval={3000}
            onSnapToItem={(index) => setActiveSlide(0)}
          />
          <Pagination
            dotsLength={item.photosArray.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotColor="rgba(255, 255, 255, 0.92)"
            dotStyle={styles.paginationDot}
            inactiveDotColor="grey"
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            carouselRef={slider1Ref.current}
            tappableDots={!!slider1Ref.current}
          />
        </View>
      </View>
      <View style={styles.infoCatContainer}>
        <Text style={styles.infoName}>{item.title}</Text>
        <View style={styles.infoContainer}>
          <TouchableHighlight
            onPress={() =>
              navigation.navigate("CatGroup", { category, title })
            }
          >
            <Text style={styles.catType}>
              {getCatTypeName(item.catTypeId).toUpperCase()}
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.infoContainer}>
          <Image
            style={styles.infoPhoto}
            source={require("../../../assets/icons/gender.png")}
          />
          <Text style={styles.catInfo}>Gender: {item.gender}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Image
            style={styles.infoPhoto}
            source={require("../../../assets/icons/birthday.png")}
          />
          <Text style={styles.catInfo}>Year of birth: {item.birth_year}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.catInfo}>Vaccinated: {item.vaccinated}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.catInfo}>Adoption: {item.adoption}</Text>
        </View>

        
        <View style={styles.infoContainer}>
          <Text style={styles.infoDescription}>{item.description}</Text>
        </View>
        
        <View style={styles.infoContainer}>
          <ViewInterestsButton
            onPress={() => {
              let interests = item.interests;
              let title = "Interest of " + item.title;
              navigation.navigate("Interests", { interests, title });
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

//end of code I wrote