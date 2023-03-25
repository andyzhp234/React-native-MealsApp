import React from "react";
import { View, StyleSheet, Text } from "react-native";

const List = ({ listData }) => {
  return listData.map((data) => (
    <View key={data} style={styles.listItem}>
      <Text style={styles.itemText}>{data}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginVertical: 5,
    marginHorizontal: 20,
    backgroundColor: "#e2b497",
  },
  itemText: {
    textAlign: "center",
  },
});

export default List;
