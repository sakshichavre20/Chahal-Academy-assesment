import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NormalInput } from "../../components/Input";
import { SignIn } from "../Redux/actions";
import { COLORS, DIMENSIONS, FONT, ROUTES } from "../assets/constants";

import {

  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState({
    email: '',
    password: '',
    msg: '',
  });
  const dispatch = useDispatch();

 


  const handleSignIn = () => {
     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
     if (email === '') {
       setErr({...err, email: 'Email Cannot be Empty'});
     } else if (reg.test(email) === false) {
       setErr({...err, email: 'Enter a valid email address'});
     } else if (password === '') {
       setErr({...err, password: 'Password cannot be empty'});
     } else {
       setErr({...err, email: '', password: '', msg: ''});
       navigation.navigate("Home");
       const userData = {email, password};
       dispatch(SignIn(userData));

     }
  
  };

  return (
    <View style={styles.Container}>
      <Image
        source={require('../assets/1.webp')}
        style={{
          height: '50%',
          width: '100%',
          position: 'absolute',
          transform: [{rotate: '180deg'}],
        }}
      />
      <View style={{flex: 1, justifyContent: 'center', top: 20}}>
        <Text style={styles.headerText}>Login</Text>

        <NormalInput
          title="Email"
          required
          placeholder="Email"
          onChangeText={text => {
            setEmail(text);
            setErr({...err, email: '', msg: ''});
          
          }}
          value={email}
          autoCapitalize="none"
        />
        {err?.email && (
          <Text
            style={{
              ...FONT.subTitle,
              color: COLORS.error,
              fontSize: 12,
              paddingTop: 10,
              textAlign: 'left',
              width: '100%',
            }}>
            {err?.email}
          </Text>
        )}
        <NormalInput
          title="Password"
          required
          placeholder="Password"
          onChangeText={text => {
            setPassword(text);
            setErr({...err, password: '', msg: ''});
          }}
          value={password}
          secureTextEntry={true}
        />
        {err?.password && (
          <Text
            style={{
              ...FONT.subTitle,
              color: COLORS.error,
              fontSize: 12,
              paddingTop: 10,
              textAlign: 'left',
              width: '100%',
            }}>
            {err?.password}
          </Text>
        )}

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.Button}
          onPress={() => handleSignIn()}>
          <Text style={{...FONT?.header, color: '#fff'}}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signUpView}>
          <Text style={{...FONT.subTitle}}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Signup");
            }}>
            <Text style={{...FONT.subTitle, fontWeight: '800'}}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Login;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  headerText: {
    color: COLORS.primary,
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    textShadowColor: '#2d2d2d',
    textShadowRadius: 1,
  },
  textInput: {
    height: 50,
    width: DIMENSIONS.width - 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
  },
  Button: {
    width: DIMENSIONS.width - 80,
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    marginTop: 40,
    marginVertical: 10,
    alignSelf: 'center',
  },
  signUpView: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});