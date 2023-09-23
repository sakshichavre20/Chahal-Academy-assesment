import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import React from "react";
import Signup from "./src/screens/Signup";
import thunk from "redux-thunk";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogBox } from "react-native";
import { ROUTES } from "./src/assets/constants";

// import rootReducer from './reducers'; // Import your combined reducers


// const store = createStore(rootReducer, applyMiddleware(thunk));
const Stack = createNativeStackNavigator();

export default function App() {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={"Login"} component={Login} />
        <Stack.Screen name={"Signup"} component={Signup} />
        <Stack.Screen name={"Home"} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
