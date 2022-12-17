import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/start"
import open from "../../../../assets/open"

const RestaurantsCard = styled(Card)`
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;
const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]}
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading}
  font-size: ${(props) => props.theme.fontSizes.body}
  color: ${(props) => props.theme.colors.ui.primary};
  `;
const Address = styled(Text)`
font-family: ${props => props.theme.fonts.body}
font-size: ${props => props.theme.fontSizes.caption}
  `;
const Info = styled(View)`
padding: ${props => props.theme.space[3]}
`;
const Rating = styled(View)`
flex-direction: row
padding-top: ${props => props.theme.space[2]}
padding-bottom: ${props => props.theme.space[2]}
`
const Wrap1 = styled(View)`
flex-direction: row
justify-content: space-between;
`;

export const ResturantInfoCard = ({ resturant = {} }) => {
  const {
    name = "Raju Dhaba",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "VIP Road Raipur",
    isOpenNow = true,
    rating = 3.2,
    isClosedTemporarily = "Close",
  } = resturant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <RestaurantsCard elevation={5}>
        <CardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Title>{name}</Title>
          <Wrap1>
            <Rating>
              {
                ratingArray.map(() => {
                  return <SvgXml xml={star} width={25} height={25} />
                })
              }
            </Rating>
            {isOpenNow ? <SvgXml xml={open} width={25} height={25} /> : <Text>{isClosedTemporarily}</Text>}

          </Wrap1>
          <Address>{address}</Address>
        </Info>
      </RestaurantsCard>
    </>
  );
};
