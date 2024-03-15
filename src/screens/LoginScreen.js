import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ padding: 15, backgroundColor: "white", flex: 1 }}>
      <Ionicons
        name="arrow-back"
        size={30}
        color="black"
        style={{ marginTop: 10 }}
      />
      <View style={{ width: "100%", marginVertical: 10 }}>
        <Text style={{ fontSize: 27, fontWeight: "900" }}>
          Enter your mobile number to get OTP
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <Text style={styles.inputStyling}>Mobile Number</Text>
        <View>
          <Text style={{ fontSize: 15 }}>+91</Text>
        </View>
        <View
          style={{
            height: 15,
            backgroundColor: "red",
            width: 1,
            marginHorizontal: 5,
          }}
        />
        <TextInput
          placeholder="10 digit mobile number"
          placeholderTextColor={"grey"}
          keyboardType="number-pad"
          style={{ fontSize: 15 }}
        />
      </View>
      <Pressable onPress={() => navigation.navigate("OtpScreen")}>
        <View style={styles.button}>
          <Text>Get OTP</Text>
        </View>
      </Pressable>
      <Text>
        By Clicking.I accept the{" "}
        <Text style={{ textDecorationLine: "underline" }}>
          terms of the service
        </Text>{" "}
        and{" "}
        <Text style={{ textDecorationLine: "underline" }}>privacy policy</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    height: 55,
    borderRadius: 10,
    backgroundColor: "orange",
  },
  searchContainer: {
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
  inputStyling: {
    bottom: 47,
    left: 17,
    backgroundColor: "white",
    position: "absolute",
    color: "orange",
    paddingHorizontal: 5,
  },
});
