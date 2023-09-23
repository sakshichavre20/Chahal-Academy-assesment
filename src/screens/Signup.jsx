import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { NormalInput } from "../../components/Input";
import { SetAuthenticated, SignUp } from "../Redux/actions";
import { COLORS, DIMENSIONS, FONT, ROUTES } from "../assets/constants";

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState({
    name: '',
    email: '',
    password: '',
    msg: '',
  });
  const dispatch = useDispatch();
  const handleSignup = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (name === '') {
      setErr({...err, name: 'Name Cannot be Empty'});
    } else if (email === '') {
      setErr({...err, email: 'Email Cannot be Empty'});
    } else if (reg.test(email) === false) {
      setErr({...err, email: 'Enter a valid email address'});
    } else if (password === '') {
      setErr({...err, password: 'Password cannot be empty'});
    } else {
      setErr({...err, email: '', password: '', msg: ''});
      navigation.navigate('Home');
      const userData = {name, email, password};
      dispatch(SignUp(userData));
      dispatch(SetAuthenticated(true));
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <Text style={styles.headerText}>Sign Up</Text>
        <NormalInput
          title="Name"
          required
          placeholder="Name"
          onChangeText={text => {
            setName(text);
            setErr({...err, name: '', msg: ''});
          }}
          value={name}
        />
        {err?.name && (
          <Text
            style={{
              ...FONT.subTitle,
              color: COLORS.error,
              fontSize: 12,
              paddingTop: 10,
              textAlign: 'left',
              width: '100%',
            }}>
            {err?.name}
          </Text>
        )}
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
          onPress={() => handleSignup()}>
          <Text style={{...FONT?.header, color: '#fff'}}>Signup</Text>
        </TouchableOpacity>
        <View style={styles.signUpView}>
          <Text style={{...FONT.subTitle}}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={{...FONT.subTitle, fontWeight: '800'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={require('../assets/1.webp')}
        style={{
          height: '35%',
          width: '100%',
        }}
      />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    backgroundColor: 'white',
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
