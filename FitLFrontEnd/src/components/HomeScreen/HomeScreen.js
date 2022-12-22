import React from 'react';
import PropTypes from 'prop-types';

HomeScreen.propTypes = {};
HomeScreen.defaultProps = {};

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
