import React from 'react'
import { Image, KeyboardType, StyleSheet, TextInput, View } from 'react-native';
import { MyColors } from '../theme/AppTheme';
import RegisterStyles from '../views/Register/Styles';

interface Props {
    image: any,
    placeholder: string,
    value: string,
    keyboarType: KeyboardType,
    secureTextEntry?: Boolean,
    property: string,
    onChangeText: (property: string, value: any) => void
}

export const CustomTextInput = ({
    image,
    placeholder,
    value,
    keyboarType,
    property,
    onChangeText,
    secureTextEntry
}: Props) => {
  return (
    <View style={RegisterStyles.formInput}>
        <Image
            source={ image }
            style={ RegisterStyles.formIcon }
            />
        <TextInput
            placeholder = { placeholder }
            style = { RegisterStyles.formTextImput }
            keyboardType = { keyboarType }
            value = { value }
            onChangeText = { textEmail => onChangeText(property, textEmail) }
            secureTextEntry = { secureTextEntry ? true : false }
            />
    </View>
  )
}