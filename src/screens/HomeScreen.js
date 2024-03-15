import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topFlexContainer}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome name="location-arrow" size={24} color="orange" />
            <Text style={{ fontWeight: "bold", marginHorizontal: 5 }}>
              Vijayawada
            </Text>
            <Entypo name="chevron-small-down" size={24} color="black" />
          </View>
          <Text style={{ color: "grey" }}>
            GJ79+V4C, Railway Station Entrace Rd,Hanuman...
          </Text>
        </View>
        <FontAwesome
          name="user-circle"
          size={30}
          color="black"
          style={{ marginTop: 8 }}
        />
      </View>
      <View style={styles.searchContainer}>
        <View>
          <TextInput
            placeholder="Search for dishes,restaurants & grow.."
            placeholderTextColor={"grey"}
            keyboardType="number-pad"
            style={{ fontSize: 15 }}
          />
        </View>

        <View style={styles.searchItemContainer}>
          <AntDesign name="search1" size={24} color="black" />
          <View
            style={{
              height: 18,
              backgroundColor: "red",
              width: 1,
              marginHorizontal: 8,
            }}
          />
          <FontAwesome name="microphone" size={24} color="orange" />
        </View>
      </View>
      <View style={{ alignItems: "center", padding: 10 }}>
        <Image
          source={require("../../assets/celebration.webp")}
          style={{ width: 80, height: 80, padding: 50 }}
        />
        <Text style={{ fontWeight: "bold" }}>Welcome Praveen</Text>
        <Text>Enjoy flat 50% off + free delivery</Text>
      </View>
      <View style={styles.foodItemCard}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>ORDER FOOD</Text>
          <Text style={{ width: 200, fontSize: 12, color: "grey" }}>
            FROM GREAT RESTAURANTS NEAR YOU!
          </Text>
          <View style={styles.foodItemTime}>
            <Text>30-40 Mins</Text>
          </View>
        </View>
        <View>
          <Image
            source={require("../../assets/tiffin.jpeg")}
            style={{ width: 100, height: 80, borderRadius: 10, marginLeft: 30 }}
          />
          <Text style={{ fontSize: 11 }}>GoodMorning Tea and Fast</Text>
        </View>
      </View>
      <View style={styles.foodItemCard}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>INSTAMART</Text>
          <Text style={{ width: 200, fontSize: 12, color: "grey" }}>
            HOME NEEDS DELIVERED INSTANTLY
          </Text>
          <View style={styles.foodItemTime}>
            <Text>30-40 Mins</Text>
          </View>
        </View>
        <View>
          <Image
            source={require("../../assets/lays.png")}
            style={{ width: 100, height: 80, borderRadius: 10 }}
          />
          <Text style={{ fontSize: 12, marginLeft: 42 }}>Lays</Text>
        </View>
      </View>
      <View style={styles.foodItemCard}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>GENIE</Text>
          <Text style={{ width: 200, fontSize: 12, color: "grey" }}>
            PICKUP & DROP
          </Text>
        </View>
        <View>
          <Image
            source={require("../../assets/parcel.png")}
            style={{ width: 100, height: 80, borderRadius: 10 }}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 26,
    padding: 13,
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  topFlexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchContainer: {
    justifyContent: "space-between",
    marginVertical: 10,
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    position: "relative",
    height: 55,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "orange",
  },
  searchItemContainer: {
    flexDirection: "row",
    marginRight: 40,
    justifyContent: "space-around",
    alignItems: "center",
  },
  foodItemCard: {
    width: "100%",
    height: 120,
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 15,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    elevation: 3,
  },
  foodItemTime: {
    width: 90,
    borderColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 2,
    marginVertical: 10,
  },
});
