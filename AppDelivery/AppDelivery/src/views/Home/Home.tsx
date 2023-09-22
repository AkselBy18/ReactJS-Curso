import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native'
import { Image, Text, TextInput, ToastAndroid, View, StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';
import { RootStackParamsList } from '../../../App';
import { StackNavigationProp } from '@react-navigation/stack';

export const HomeScreen = () => {
    //USER NAVIGATION SCREENS
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>()
    return (
    <View style={styles.container}>
        <Image
          source={ require("../../../assets/chef.jpg")}
          style={ styles.imageBackground }
        />
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/logo.png")} 
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
          <View style={styles.formInput}>
              <Image
                source={require("../../../assets/email.png")}
                style={styles.formIcon}
              />
              <TextInput
                placeholder='Corrreo electronico'
                style={styles.formTextImput}
                keyboardType='email-address'
                value={ email }
                onChangeText={textEmail => setEmail(textEmail)}
              />
          </View>
          {/* INPUT PASSWORD */}
          <View style={styles.formInput}>
              <Image
                source={require("../../../assets/password.png")}
                style={styles.formIcon}
              />
              <TextInput
                placeholder='Contraseña'
                style={styles.formTextImput}
                keyboardType='default'
                secureTextEntry={true}
                value={password}
                onChangeText={textPassword => setPassword(textPassword)}
              />
          </View>
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