import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MealList from "../components/MealList/MealsList";
// import { FavoritesContext } from "../store/context/favorites-context";
import { useSelector } from "react-redux";

import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
  // const favoritesMealCtx = React.useContext(FavoritesContext);
  const favoritesMealCtx = useSelector((state) => state.favoriteMeals);

  const favoritesMeals = MEALS.filter((meal) =>
    favoritesMealCtx.ids.includes(meal.id)
  );

  if (favoritesMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealList items={favoritesMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default FavoritesScreen;
