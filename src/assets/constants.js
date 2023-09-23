import { Dimensions } from "react-native";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const DIMENSIONS = {
  height: height,
  width: width,
};

const COLORS = {
  primary: '#71CACF',
  secondary: '#AFE9EF',
  error:'red',
};

const FONT = {
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
  },
  title: {
    fontSize: 14,
    color: '#212121',
  },
  subTitle: {
    fontSize: 12,
    color: '#212121',
  },
};

const ROUTES = {
    Login : 'Login',
    Signup : 'Signup',
    Home :'Home',
}

export {DIMENSIONS, COLORS, FONT, ROUTES};