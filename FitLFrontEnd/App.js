import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./src/components/HomeScreen/HomeScreen";
import WorkoutScreen from "./src/components/Workout/WorkoutScreen";
import { Button as MaterialButton} from '@react-native-material/core';
import { useState } from 'react';
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
  const [logs, setLogs] = useState(0);
  return (
      <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name = "Home Screen" component={HomeScreen} />
        <BottomTab.Screen
            name="Workouts"
            children={()=><WorkoutScreen value = {logs} />}
            options={() => ({
              title: "Workouts",
              headerRight: () => (
                <MaterialButton
                  title = "+"
                  onPress={() => setLogs(logs + 1)}
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
