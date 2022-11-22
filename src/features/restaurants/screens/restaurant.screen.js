import React from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { ResturantInfoCard } from "../components/restaurant-info-card-component";

// styled components
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
const SearchContainer = styled(View)`
  padding: 15px;
`;
const ResturantListContainer = styled(View)`
  flex: 1;
  padding: 15px;
  background-color: steelblue;
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <ResturantListContainer>
        <ResturantInfoCard />
      </ResturantListContainer>
    </SafeArea>
  );
};
const styles = StyleSheet.create({});
