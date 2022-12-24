import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./src/components/HomeScreen/HomeScreen";
import SettingsScreen from "./src/components/SettingsScreen/SettingsScreen";
import { Button as MaterialButton} from '@react-native-material/core';
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
        <BottomTab.Screen right = "Hi" name = "Home Screen" component={HomeScreen} />
        <BottomTab.Screen
            name="Settings Screen"
            component={SettingsScreen}
            options={({ navigation }) => ({
              title: "Settings Screen",
              headerRight: () => (
                <MaterialButton
                  title = "+"
                  onPress={() => navigation.navigate("SettingsScreen")}
                />
              )
            })}
          />
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
