import React from 'react'
import { Image, KeyboardType, StyleSheet, TextInput, View } from 'react-native';
import { MyColors } from '../theme/AppTheme';

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
    <View style={styles.formInput}>
        <Image
            source={ image }
            style={ styles.formIcon }
            />
        <TextInput
            placeholder = { placeholder }
            style = { styles.formTextImput }
            keyboardType = { keyboarType }
            value = { value }
            onChangeText = { textEmail => onChangeText(property, textEmail) }
            secureTextEntry = { secureTextEntry ? true : false }
            />
    </View>
  )
}

const styles = StyleSheet.create({
    formInput: {
        flexDirection: 'row',
        marginTop: 30
      },
      formTextImput:{
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: MyColors.background,
        marginLeft: 15
      },
      formIcon: {
        width: 25,
        height: 25,
        marginTop: 5
      },
});