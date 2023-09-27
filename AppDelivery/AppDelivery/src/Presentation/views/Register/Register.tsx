import React from 'react'
import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';
import useRegisterViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';

export const RegisterScreen = () => {

  const { name, lastname, email, phone, password, confimPassword, onChange, register } = useRegisterViewModel();

  return (
    <View style={styles.container}>
        <Image
          source={ require("../../../../assets/chef.jpg")}
          style={ styles.imageBackground }
        />
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../../assets/user_image.png")} 
            style={styles.logoImage}
          />
          <Text style={styles.logoText}>
              Seleccione una imgaen
          </Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.textForm}>
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
    //VIEW STYLES
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#000',
      },
      imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.5,
        bottom: '30%'
      },
      form: {
        width: '100%',
        height: '70%',
        backgroundColor: '#FFF',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30
      },
      textForm: {
        fontWeight: 'bold',
        fontSize: 16
      },
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
      formRegister: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center'
      },
      logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
        top: '5%'
      },
      logoImage: {
        width: 100,
        height: 100
      },
      logoText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold'
      },
      registreText: {
        fontStyle: 'italic',
        color: MyColors.primary,
        borderBottomWidth: 1,
        borderBottomColor: MyColors.primary,
        fontWeight: 'bold',
        marginLeft: 10
      }
    });
    
    /* DEFUALT BUTTON */
    /* 
     <Button
        title='Entrar'
        onPress={() => ToastAndroid.show('CLICK', ToastAndroid.LONG)} 
        color='orange' />
    */