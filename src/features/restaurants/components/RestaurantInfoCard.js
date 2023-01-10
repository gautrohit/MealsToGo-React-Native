import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/start";
import open from "../../../../assets/open";
import { Spacer } from "./spacer/Spacer";
import { Text } from "./typography/Text";
import {
  RestaurantsCard,
  CardCover,
  Title,
  Address,
  Info,
  Rating,
  Section,
  SectionEnd,
  Open,
  Icon,
} from "./RestaurantInfoCard.style";

export const ResturantInfoCard = ({ resturant = {} }) => {
  const {
    name = "Raju Dhaba",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "VIP Road Raipur",
    isOpenNow = true,
    rating = 2.2,
    isClosedTemporarily = true,
  } = resturant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <RestaurantsCard>
        <CardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Title>{name}</Title>
          <Section>
            <Rating>
              {ratingArray.map(() => {
                return <SvgXml xml={star} width={25} height={25} />;
              })}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <Open xml={open} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </SectionEnd>
          </Section>
          <Address>{address}</Address>
        </Info>
      </RestaurantsCard>
    </>
  );
};
