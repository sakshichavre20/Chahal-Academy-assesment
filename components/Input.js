import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS, DIMENSIONS, FONT } from "../src/assets/constants";

const NormalInput = ({
  title,
  placeholder,
  onChangeText,
  value,
  height,
  width,
  err,
  secureTextEntry,
  keyboardType,
  editable,
  multiline,
  numberOfLines,
  required,
  style,
}) => {
  return (
    <View style={{marginVertical: 6}}>
      {title && (
        <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
          {title}
          {required ? <Text style={{color: COLORS.error}}> *</Text> : null}
        </Text>
      )}

      <TextInput
        placeholder={placeholder}
        style={{
          height: height ? height : 50,
          width: width ? width : DIMENSIONS.width - 60,
          backgroundColor: '#fff',
          borderRadius: 10,
          padding: 10,
          fontSize: 12,
          borderWidth: err ? 1 : 0,
          borderColor: err ? COLORS.error : null,
          elevation: 25,
          shadowColor: err ? `${COLORS.error}aa` : `${COLORS.primary}cc`,
          ...FONT.title,
          ...style,
        }}
        placeholderTextColor={'grey'}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        editable={editable}
        selectionColor={COLORS.primary}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </View>
  );
};

export { NormalInput};

const styles = StyleSheet.create({
  placeholderText: {
    width: '100%',
    marginBottom: 5,
  },
  errText: {
    color: COLORS.error,
    fontSize: 12,
    paddingTop: 10,
  },
});