import React from "react";
import { View } from "react-native";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar";
import { MarketsList } from "../../components/MarketsList/MarketsList";

/**
 * A description explaining what we use this component for
 *
 * @returns {*} a React Stateless Functional Component
 */
export const DashboardPage = () => (
  <View>
    <NavigationBar />
    <MarketsList />
  </View>
);