import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Button,
  TouchableOpacity
} from "react-native";

function MyCustomButton(props) {
  return (
    <TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

let count = 0;

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  }
  const handleDecrement = () => {
    setCount(count - 1);
    {/*count = count - 1;
  alert(count);*/}
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <Text style={styles.texttitle1}>Umut Yılmaz</Text>
      <Text style={styles.texttitle2}>ConterApp</Text>
        <Image source={{ uri: "https://wallpapercave.com/wp/wp6953020.jpg" }} style={styles.image} />
        <Text style={styles.text}>Conter: {count}</Text>
        <Text style={styles.subtitle}>Click buttons to change the counter.</Text>
      </View>
      {/*<View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { marginStart: 16 }]}>
          <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
      </View>*/}
      <View style={styles.buttonContainer}>
        <MyCustomButton title="Increment +" style={{ marginStart: 16, backgroundColor: "lightblue" }} onPress={handleIncrement} />
        <MyCustomButton title="Decrement -" style={{ marginStart: 16, marginEnd: 16, backgroundColor: "lightpink" }} onPress={handleDecrement} />
      </View>
      {/* <View style={styles.buttonContainer}>
        <Button title="Increment" />
        <Button title="Decrement" />
      </View>*/}
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    marginTop: 40,
  },
  text: {
    fontSize: 30,
    marginTop: 16,
  },
  texttitle1: {
    fontSize: 35,
    marginTop: 16,
    textAlign:'center',
    color:'#06024f'
  },
  texttitle2: {
    fontSize: 30,
    marginBottom: 16,
    textAlign:'center',
    color:'#ba39c4',
  },
  subtitle: {
    fontSize: 20,
    marginTop: 4,
    color: "darkgray",
  },
  image: {
    height: 250,
    borderRadius: 12,
  },
  buttonContainer: {
    marginTop: 26,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    backgroundColor: "lightblue",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "black",
  },
});

export default App;
