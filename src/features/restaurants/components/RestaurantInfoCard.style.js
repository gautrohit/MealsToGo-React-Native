import styled from "styled-components";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

export const RestaurantsCard = styled(Card)`
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;
export const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]}
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;
export const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading}
  font-size: ${(props) => props.theme.fontSizes.body}
  color: ${(props) => props.theme.colors.ui.primary};
  `;
export const Address = styled(Text)`
font-family: ${(props) => props.theme.fonts.body}
font-size: ${(props) => props.theme.fontSizes.caption}
  `;
export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
export const Rating = styled(View)`
flex-direction: row
padding-top: ${(props) => props.theme.space[2]}
padding-bottom: ${(props) => props.theme.space[2]}
`;
export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;
export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Open = styled(SvgXml)`
  width: 25px;
  height: 25px;
`;
export const Icon = styled(Image)`
  width: 15px;
  height: 15px;
`;
