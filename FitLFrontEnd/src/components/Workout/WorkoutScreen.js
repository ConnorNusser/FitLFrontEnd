import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
export default function WorkoutScreen(props) {
  let v = props.value;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <ProductTable v={v} />
    </View>
  );

  function ProductCategoryRow({ category }) {
    return (
          <View><Text>{category}</Text></View>
    );
  }

  function ProductTable(products) {
    if (products <= 0) {
      products = 1;
    }
    const rows = [];
    let lastCategory = null;
  
    for (let i = 0; i < 25; i++) {
      rows.push(<ProductCategoryRow category = {i} />);
      
    };
    console.log(rows.length);
    return (
      <View>
      <Text>Hello</Text>
      </View>
    );
  }
}




