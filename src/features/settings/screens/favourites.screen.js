import React, { useContext } from "react";
import styled from "styled-components/native";

import { Text } from "../../../components/typography/text.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantListComponent } from "../../../components/restaurant/restaurant-list.component";
import { SafeArea } from "../../../components/utils/safe-area.component";

const TextContainer = styled.View`
  padding: ${(props) => props.theme.space[4]}
  align-items: center;
`;

export const FavouritesScreen = () => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <RestaurantListComponent data={favourites} />
  ) : (
    <SafeArea>
      <TextContainer>
        <Text variant="label">You have no favourites as yet</Text>
      </TextContainer>
    </SafeArea>
  );
};
