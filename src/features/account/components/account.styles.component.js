import React from "react";
import { ImageBackground } from "react-native";
import styled from "styled-components/native";

const image = { uri: "https://reactjs.org/logo-og.png" };

const Container = styled.View`
  flex: 1;
`;

const CoverImage = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
`;

const DemoText = styled.Text`
  color: white;
  font-size: 42px;
  line-height: 84px;
  font-weight: bold;
  text-align: center;
  background-color: #000000c0;
`;

export const BackgroundImage = ({ text }) => (
  <Container>
    <CoverImage source={image} resizeMode="cover">
      <DemoText>{text}</DemoText>
    </CoverImage>
  </Container>
);
