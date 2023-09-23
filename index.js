import App from "./App";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { name as appName } from "./app.json";
import { store } from "./src/Redux/store";

/**
 * @format
 */



const ReduxProvider = () =>{
    return(
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => ReduxProvider);
