import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utils/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { LocationContext } from "../../../services/location/location.context";
import { colors } from "../../../infrastructure/theme/colors";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantListComponent } from "../../../components/restaurant/restaurant-list.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const LoadingContainer = styled.View`
  position: absolute,
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { error: locationError } = useContext(LocationContext);
  const { isLoading, restaurants, error } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  const hasError = !!error || !!locationError;

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <ActivityIndicator
            animating={isLoading}
            color={colors.brand.primary}
          />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <Spacer position="left" size="large">
        {hasError && (
          <Text variant="error">Something went wrong retrieving the data</Text>
        )}
      </Spacer>
      {!hasError && (
        <RestaurantListComponent data={restaurants} navigation={navigation} />
      )}
    </SafeArea>
  );
};
