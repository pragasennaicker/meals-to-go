import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../utils/safe-area.component";
// import { FadeInView } from "../animations/fade.animation";
import { Spacer } from "../spacer/spacer.component";
import { RestaurantInfoCard } from "../../features/restaurants/components/restaurant-info-card.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantListComponent = ({ data, navigation }) => {
  return (
    <SafeArea>
      <RestaurantList
        data={data}
        navigation={navigation}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
