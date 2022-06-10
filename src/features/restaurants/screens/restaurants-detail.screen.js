import React from "react";
import { List, Divider } from "react-native-paper";
import { View, ScrollView } from "react-native";

import { SafeArea } from "../../../components/utils/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [expandedBreakfast, setExpandedBreakfast] = React.useState(false);
  const [expandedLunch, setExpandedLunch] = React.useState(false);
  const [expandedDinner, setExpandedDinner] = React.useState(false);

  const handlePressB = () => setExpandedBreakfast(!expandedBreakfast);
  const handlePressL = () => setExpandedLunch(!expandedLunch);
  const handlePressD = () => setExpandedDinner(!expandedDinner);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={expandedBreakfast}
          onPress={handlePressB}
        >
          <List.Item title="Museli" />
          <Divider />
          <List.Item title="Scrambled eggs" />
          <Divider />
          <List.Item title="Avo and toast" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="food" />}
          expanded={expandedLunch}
          onPress={handlePressL}
        >
          <List.Item title="Burgers" />
          <Divider />
          <List.Item title="Toasted sandwiches" />
          <Divider />
          <List.Item title="Salad" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Dinner"
          left={(props) => (
            <List.Icon {...props} icon="silverware-fork-knife" />
          )}
          expanded={expandedDinner}
          onPress={handlePressD}
        >
          <List.Item title="Pizza" />
          <Divider />
          <List.Item title="Steak" />
          <Divider />
          <List.Item title="Lamb chops" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
