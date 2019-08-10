import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { MarketPlaceCard } from "../MarketPlaceCard/MarketPlaceCard";

/**
 * A description explaining what we use this component for
 *
 * @param {*} props - a descriptions of what props is
 * @returns {*} a React Class Component
 */
export class MarketsList extends React.PureComponent {
  state = {
    list: ["Market1", "Market2", "Market3", "Market4"]
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        {
          this.state.list.map(item =>
            <MarketPlaceCard key={item} name={item} />
          )
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});