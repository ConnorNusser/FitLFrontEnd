import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen} from "./src/components/HomeScreen/HomeScreen";
import { SettingsScreen } from "./src/components/SettingsScreen/SettingsScreen";
const BottomTab = createBottomTabNavigator();
export default function App() {
  return (
      <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Home" component={HomeScreen} />
        <BottomTab.Screen name="Settings" component={SettingsScreen} />
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
