import React, {useState} from 'react';
import {StyleSheet, Text, View, Linking, Button} from 'react-native';

const App = () => {
  const [total, setTotal] = useState(0);
  const [clickedCounter, setClickedCounter] = useState(0);

  const onclickHandler = () => {
    setTotal(total + 5);
    setClickedCounter(clickedCounter + 1);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}> {total} </Text>
      <Button title="ADD" onPress={onclickHandler} />
      <Text style={styles.text}> You clicked {clickedCounter} times </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
