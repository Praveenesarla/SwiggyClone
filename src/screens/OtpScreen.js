import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useMemo, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
const OtpScreen = ({ navigation }) => {
  const [text, onChangeText] = useState("");
  let inputRef = useRef();
  const onPress = () => inputRef.current?.focus();

  const otpContent = useMemo(
    () => (
      <View style={styles.containerStyle}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Text
            onPress={onPress}
            style={[styles.textStyle, text[i] ? styles.filledStyle : {}]}
          >
            {text[i]}
          </Text>
        ))}
      </View>
    ),
    [text]
  );
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
          Verify with OTP sent to 8186827673
        </Text>
      </View>

      <TextInput
        maxLength={6}
        ref={inputRef}
        style={styles.input}
        onChangeText={(text) => onChangeText(text)}
        value={text}
        keyboardType="number-pad"
      />
      {otpContent}
      <View style={{ flexDirection: "row" }}>
        <ActivityIndicator color={"orange"} />
        <Text style={{ marginVertical: 10 }}>Auto fetching OTP</Text>
      </View>

      <View
        style={{
          marginVertical: 10,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          width: "100%",
          height: 55,
          borderRadius: 10,
          backgroundColor: "orange",
        }}
      >
        <Pressable onPress={() => navigation.navigate("HomeScreen")}>
          <Text>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  input: {
    height: 0,
    width: 0,
  },
  containerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textStyle: {
    height: 50,
    width: 50,
    borderColor: "#D3D3D3",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 28,
    textAlign: "center",
    paddingTop: 8,
  },
  filledStyle: {
    backgroundColor: "#d1d1d1",
    overflow: "hidden",
  },
  titleStyle: {
    fontSize: 24,
    marginVertical: 14,
  },
  safeAreaStyle: {
    marginHorizontal: 20,
  },
});
