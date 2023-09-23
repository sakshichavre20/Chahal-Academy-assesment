import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import React, { useEffect, useState } from "react";
import Signup from "./src/screens/Signup";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, LogBox, View } from "react-native";
import { useSelector } from "react-redux";
import { COLORS, DIMENSIONS } from "./src/assets/constants";

// import rootReducer from './reducers'; // Import your combined reducers


// const store = createStore(rootReducer, applyMiddleware(thunk));
const Stack = createNativeStackNavigator();

export default function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(() => {
    console.log('Logged In user', isAuthenticated);
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000);
  }, [isAuthenticated]);

  const isAuthenticated = useSelector(state => state?.isAuthenticated);
  console.log(isAuthenticated);
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
  const SplashScreenGIF = () => (
    <View
      style={{
        backgroundColor: COLORS.primary,
        width: DIMENSIONS.width,
        height: DIMENSIONS.height,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('./src/assets/logo.webp')}
        style={{
          height: DIMENSIONS.height / 2 - 60,
          width: DIMENSIONS.height / 2 - 60,
        }}
      />
    </View>
  );
  return showSplashScreen ? (
    <SplashScreenGIF />
  ) : (
    <NavigationContainer>
      {isAuthenticated ? <Navigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Home'} component={Home} />
    </Stack.Navigator>
  );
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Signup'} component={Signup} />
    </Stack.Navigator>
  );
};
