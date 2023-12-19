import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.txtInput} placeholder="Type of your goal" />
        <Button title="All goal" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "olive",
  },
  inputContainer:{
    flexDirection: "row",
    justifyContent: "space-around",
  },
  txtInput:{
    borderWidth:2,
    borderColor:"#cccccc",
    padding: 10,
  }
});
