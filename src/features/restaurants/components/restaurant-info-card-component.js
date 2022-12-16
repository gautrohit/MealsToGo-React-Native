import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

const RestaurantsCard = styled(Card)`
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;
const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]}
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;
const Title = styled(Text)`
  padding: ${(props) => props.theme.space[3]}
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const ResturantInfoCard = ({ resturant = {} }) => {
  const {
    name = "Raju Dhaba-01",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "VIP Road Raipur",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = resturant;

  return (
    <>
      <RestaurantsCard elevation={5}>
        <CardCover key={name} source={{ uri: photos[0] }} />
        <Title>{name}</Title>
      </RestaurantsCard>
    </>
  );
};
