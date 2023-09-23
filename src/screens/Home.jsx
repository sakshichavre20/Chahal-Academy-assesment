import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { FONT } from "../assets/constants";

const Home = () => {
  const user = useSelector(state => state.user);
    const isAuthenticated = useSelector(state => state?.isAuthenticated);
    console.log(user, isAuthenticated);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{...FONT.header}}>Welcome to Chahal Academy</Text>

      <Text style={{...FONT.subTitle}}>Using redux </Text>
      <Text style={{...FONT.subTitle}}> {user?.email}</Text>
      <Text style={{...FONT.subTitle}}> {user?.name}</Text>
    </View>
  );
}

export default Home

const styles = StyleSheet.create({})