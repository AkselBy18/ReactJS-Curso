import { StyleSheet } from 'react-native';
import { MyColors } from '../../theme/AppTheme';

   const HomeStyles = StyleSheet.create({
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
  
  export default HomeStyles;