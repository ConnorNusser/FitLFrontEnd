import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./src/components/HomeScreen/HomeScreen";
import SettingsScreen from "./src/components/SettingsScreen/SettingsScreen";
const BottomTab = createBottomTabNavigator();
/*
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
*/

export default function App() {
  return (
      <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name = "Home Screen" component={HomeScreen} />
        <BottomTab.Screen name = "Settings Screen" component={SettingsScreen} />
      </BottomTab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
