import React from 'react'
import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';
import useRegisterViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import RegisterStyle from './Styles';

export const RegisterScreen = () => {

  const { name, lastname, email, phone, password, confimPassword, onChange, register } = useRegisterViewModel();

  return (
    <View style={RegisterStyle.container}>
        <Image
          source={ require("../../../../assets/chef.jpg")}
          style={ RegisterStyle.imageBackground }
        />
        <View style={RegisterStyle.logoContainer}>
          <Image
            source={require("../../../../assets/user_image.png")} 
            style={RegisterStyle.logoImage}
          />
          <Text style={RegisterStyle.logoText}>
              Seleccione una imgaen
          </Text>
        </View>
        <View style={RegisterStyle.form}>
          <Text style={RegisterStyle.textForm}>
              Registrate
          </Text>
          <CustomTextInput
            placeholder='Nombres'
            keyboarType='default'
            image={require("../../../../assets/user.png")}
            property='name'
            onChangeText={ onChange }
            value={ name }
            />
          <CustomTextInput
            placeholder='Apellidos'
            keyboarType='default'
            image={require("../../../../assets/my_user.png")}
            property='lastname'
            onChangeText={ onChange }
            value={ lastname }
            />
          <CustomTextInput
            placeholder='Corrreo electronico'
            keyboarType='email-address'
            image={require("../../../../assets/email.png")}
            property='email'
            onChangeText={ onChange }
            value={ email }
            />
          <CustomTextInput
            placeholder='Telefono'
            keyboarType='numeric'
            image={require("../../../../assets/phone.png")}
            property='phone'
            onChangeText={ onChange }
            value={ phone }
            />
          <CustomTextInput
            placeholder='Contraseña'
            keyboarType='default'
            image={require("../../../../assets/password.png")}
            property='password'
            onChangeText={ onChange }
            value={ password }
            secureTextEntry = { true }
            />
          <CustomTextInput
            placeholder='Confirmar contraseña'
            keyboarType='default'
            image={require("../../../../assets/confirm_password.png")}
            property='confirmPassword'
            onChangeText={ onChange }
            value={ confimPassword }
            secureTextEntry={ true }
            />
          <View style={{ marginTop : 30 }}>
              <RoundedButton
                text='Confirmar'
                onPress={ () => register()}
              />
          </View>
        </View>
    </View>
    );
}