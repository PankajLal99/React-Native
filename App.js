import { StatusBar } from 'expo-status-bar';
import React ,{ useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [textData, settextData] = useState("Hello World !!!")
  return (
    <View style={styles.container}>
      <Text style={styles.size}>{textData}</Text>
      <Button style={styles.buttonstyle} onPress={()=>textData == "Hello World !!!" ? settextData("This is me") : settextData("Hello World !!!")}
       title="Toggle Button" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  size:{
    fontSize:22,
  },
});
