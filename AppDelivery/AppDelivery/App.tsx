import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View } from 'react-native';
//LOGIN VIEW
export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={ require("./assets/chef.jpg")}
        style={ styles.imageBackground }
      />
      <StatusBar style="auto" />
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
    opacity: 0.5
  }
});
