import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native'
import { Image, Text, TextInput, ToastAndroid, View, StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../../../App';
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';
import HomeViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';

export const HomeScreen = () => {
    // USE VIEW MODEL FOR PROCESS DATA 
    const { email, password, onChanges} = HomeViewModel();
    //USER NAVIGATION SCREENS
    const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>()

    return (
    <View style={styles.container}>
        <Image
          source={ require("../../../../assets/chef.jpg")}
          style={ styles.imageBackground }
        />
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../../assets/logo.png")} 
            style={styles.logoImage}
          />
          <Text style={styles.logoText}>
              FOOD APP
          </Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.textForm}>
              INGRESAR
          </Text>
          {/* INPUT EMAIL */}
          <CustomTextInput
            image = { require('../../../../assets/email.png') }
            placeholder = 'Correo electronico'
            keyboarType = 'email-address'
            property = 'email'
            onChangeText = { onChanges }
            value = { email }
            />
          {/* INPUT PASSWORD */}
          <CustomTextInput
            image = {require("../../../../assets/password.png")}
            placeholder = 'Password'
            keyboarType = 'default'
            property = 'password'
            onChangeText = { onChanges }
            value = { password }
            secureTextEntry = {true}
            />
          <View style={{ marginTop : 30 }}>
              {/* CUSTOM COMPONENTE  */}
              <RoundedButton
                text='Entrar'
                onPress={ () => {
                  console.log(email);
                  console.log(password);
                }}
              />
          </View>
          <View style={styles.formRegister}>
              <Text>¿No tienes cuenta?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                  <Text style={styles.registreText}>Registrate</Text>
              </TouchableOpacity>
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
        height: '40%',
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
        top: '15%'
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