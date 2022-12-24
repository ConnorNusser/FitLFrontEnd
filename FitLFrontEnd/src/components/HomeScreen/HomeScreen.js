import {React, useState } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
export default function HomeScreen({props}) {
  const [logs, setLogs] = useState(props); 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>HomeScreen!</Text>
      <Text>You clicked {logs} times</Text>
    </View>
  );
}
