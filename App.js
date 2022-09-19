import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  RefreshControl,
  FlatList,
  SectionList,
  ScrollView,
} from 'react-native';

const App = () => {
  let n = 3;

  const [Items, setItems] = useState([
    {
      title: 'Title 1',
      data: Array.from({length: n}, (_, i) => 'Item ' + 1 + '-' + i),
    },
  ]);
  const [counter, setCounter] = useState(2);
  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setCounter(counter + 1);
    setItems([
      ...Items,
      {
        title: 'Title ' + counter,
        data: Array.from({length: n}, (_, i) => 'Item ' + counter + '-' + i),
      },
    ]);
    setRefreshing(false);
  };

  return (
    // <FlatList
    //   keyExtractor={(item, index) => index.toString()}
    //   data={Items}
    //   renderItem={({item}) => (
    //     <View style={styles.body}>
    //       <View style={styles.item}>
    //         <Text style={styles.text}>{item.title}</Text>
    //       </View>
    //       <View style={styles.data}>
    //         <Text style={styles.text}>{item.data}</Text>
    //       </View>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh}
    //     />
    //   }
    // />
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={Items}
      renderItem={({item}) => (
        <View style={styles.data}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl refreshing={Refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
  item: {
    flex: 1,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000000',
    borderWidth: 2,
  },
  data: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000000',
    borderWidth: 1,
  },
});

export default App;
