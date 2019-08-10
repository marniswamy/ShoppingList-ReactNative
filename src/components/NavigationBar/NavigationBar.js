import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

/**
 * NavigationBar component holds the header of the application
 *
 * @returns {*} a React Stateless Functional Component
 */
export const NavigationBar = () => (
  <View style={styles.navBar}>
    <Text>Welcome Marni!</Text>
    <View style={styles.rightNav}>
      <TouchableOpacity>
        <Icon style={styles.navItem} name="search" size={25} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon style={styles.navItem} name="account-circle" size={25} />
      </TouchableOpacity>
    </View>
  </View>
);


const styles = StyleSheet.create({
  navBar: {
    height: 55,
    backgroundColor: '#0366D6',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rightNav: {
    flexDirection: 'row'
  },
  navItem: {
    marginLeft: 25
  }
});
