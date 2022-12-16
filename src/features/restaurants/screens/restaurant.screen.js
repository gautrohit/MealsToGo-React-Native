import React from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { ResturantInfoCard } from "../components/restaurant-info-card-component";

// styled components
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  // checking if statusBar has a value (it's only in android not ios) $ is variable
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const ResturantListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]}
  background-color: ${(props) => props.theme.colors.bg.secondary};
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
