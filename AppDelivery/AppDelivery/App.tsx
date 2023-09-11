import { Image, StyleSheet, View, Text, TextInput, Button, ToastAndroid } from 'react-native';
import { RoundedButton } from './src/components/RoundedButton';
import { MyColors } from './src/theme/AppTheme';

//LOGIN VIEW
export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={ require("./assets/chef.jpg")}
        style={ styles.imageBackground } />
      <View style={styles.logoContainer}>
        <Image
          source={require("./assets/logo.png")} 
          style={styles.logoImage}/>
        <Text style={styles.logoText}>
          FOOD APP
        </Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.textForm}>
          INGRESAR
        </Text>
        <View style={styles.formInput}>
          <Image
            source={require("./assets/email.png")}
            style={styles.formIcon} />
          <TextInput
            placeholder='Corrreo electronico'
            style={styles.formTextImput}
            keyboardType='email-address' />
        </View>
        <View style={styles.formInput}>
          <Image
            source={require("./assets/password.png")}
            style={styles.formIcon}/>
          <TextInput
            placeholder='Contraseña'
            style={styles.formTextImput}
            keyboardType='default'
            secureTextEntry={true} />
        </View>
        <View style={{ marginTop : 30 }}>
          <RoundedButton 
            text='Entrar'
            onPress={ () => ToastAndroid.show('HOLA', ToastAndroid.SHORT)}/>
        </View>
        <View style={styles.formRegister}>
          <Text>¿No tienes cuenta?</Text>
          <Text style={styles.registreText}>Registrate</Text>
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