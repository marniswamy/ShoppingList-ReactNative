import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

/**
 * NavigationBar component holds the header of the application
 *
 * @returns {*} a React Stateless Functional Component
 */
export const NavigationBar = () => (
  <View style={styles.navBar}>
    <Text>Welcome User!</Text>
    <View style={styles.rightNav}>
      <TouchableOpacity>
        <Icon style={styles.navItem} name="search" size={25} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon style={styles.navItem} name="add" size={25} />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  navBar: {
    height: 55,
    color: "#FFFFFF",
    backgroundColor: "#1976d2",
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  rightNav: {
    flexDirection: "row"
  },
  navItem: {
    marginLeft: 25
  }
});
