import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
export default function WorkoutScreen(props) {
  let v = props.value;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ProductTable products={v} />
      <Text>Settings!</Text>
    </View>
  );

  function ProductTable({ products }) {
    const rows = [];
    let lastCategory = null;
  
    for (let i = 0; i < products; i++) {
      rows.push(i);
      
    };
  
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}




