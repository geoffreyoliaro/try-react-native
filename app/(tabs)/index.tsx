import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Switch } from "react-native-switch";
// import BottomNav from './BottomNav'; // Import the BottomNav component

const HomeScreen = () => {
  const [switch_val, set_switch_val] = useState(false);

  const handle_switch_change = () => {    
    set_switch_val(!switch_val);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Banner Section */}
      <View style={styles.banner}>
        <Image
          source={require("@/assets/images/black-friday-one.jpg")} // Replace with the actual banner image URL
          style={styles.bannerImage}
          resizeMode="cover"
        />
      </View>

      {/* Title Section */}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderTitle}>Produit de la semaine</Text>
      </View>

      {/* Map Toggle */}
      <View style={styles.mapToggle}>
        {/* <Text>MAP</Text>
        <Switch value={false} onValueChange={() => {}} /> */}

        <Switch
          value={switch_val}
          onValueChange={() => handle_switch_change()}
          disabled={false}
          activeText={"On"}
          inActiveText={"Off"}
          backgroundActive={"green"}
          backgroundInactive={"gray"}
          circleActiveColor={"#30a566"}
          circleInActiveColor={"#000000"}
        />
      </View>

      {/* Categories Section */}
      <View style={styles.categoriesContainer}>
        {[
          { title: "Restaurant", icon: "🍴" },
          { title: "Alimentation", icon: "🛒" },
          { title: "Hôtel", icon: "🏨" },
          { title: "Santé", icon: "🩺" },
          { title: "Divertissement", icon: "🎭" },
          { title: "Mode et Accessoires", icon: "👗" },
          { title: "Electronics", icon: "💻" },
          { title: "Voir tout", icon: "🔍" },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.category}>
            <Text style={styles.categoryIcon}>{item.icon}</Text>
            <Text style={styles.categoryText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Popular Offers Section */}
      <Text style={styles.sectionTitle}>Offres Populaires</Text>
      <View style={styles.offersContainer}>
        {[1, 2, 3].map((_, index) => (
          <Image
            key={index}
            source={require("@/assets/images/black-friday-one.jpg")} // Replace with actual offer images
            style={styles.offerImage}
            resizeMode="cover"
          />
        ))}
      </View>

      {/* Discovery Section */}
      <Text style={styles.sectionTitle}>Découverte</Text>
      <View style={styles.discoveryContainer}>
        {[1, 2].map((_, index) => (
          <Image
            key={index}
            source={require("@/assets/images/black-friday-two.jpg")} // Replace with actual discovery images
            style={styles.discoveryImage}
            resizeMode="cover"
          />
        ))}
      </View>

      {/* Bottom Navigation */}
      {/* <BottomNav /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  banner: {
    width: "100%",
    height: 200,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  mapToggle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  category: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor: "#e3f2fd",
    borderRadius: 40,
  },
  categoryIcon: {
    fontSize: 24,
  },
  categoryText: {
    fontSize: 12,
    textAlign: "center",
  },
  sectionHeader: {
    backgroundColor: "lightgreen", // Light green background color
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center", // Centers the text horizontally
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000", // Ensures text color is readable on light green
  },
  sectionHeaderTitle: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#000", // Ensures text color is readable on light green
  },
  offersContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  offerImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  discoveryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  discoveryImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
});

export default HomeScreen;
