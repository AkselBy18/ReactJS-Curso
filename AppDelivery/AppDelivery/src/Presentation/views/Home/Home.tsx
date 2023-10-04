import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native'
import { Image, Text, TextInput, ToastAndroid, View, StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../../../App';
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';
import HomeViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';

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