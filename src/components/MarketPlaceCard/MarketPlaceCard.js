import * as React from 'react';
import { View, Text, StyleSheet } from "react-native";
import * as PropTypes from 'prop-types';
import { grey } from 'ansi-colors';

/**
 * A description explaining what we use this component for
 *
 * @param {*} props - a descriptions of what props is
 * @returns {*} a React Class Component
 */
export class MarketPlaceCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props;
    return (
      <View style={styles.card}>
        <Text>{name}</Text>
      </View>
    );
  }
}

MarketPlaceCard.propTypes = {
  name: PropTypes.string
};

MarketPlaceCard.defaultProps = {
  name: 'MarketPlace',
};

const styles = StyleSheet.create({
  card: {
    minHeight: 200,
    elevation: 3,
    padding: 8,
    margin: 8,
    borderColor: '#E5E5E5',
    borderWidth: 0.3
  }
});
