/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React, { Component } from 'react';
 import { AppRegistry, Text, TextInput, Image, View, Button, Alert, ListView, Navigator } from 'react-native';

 class Greetings extends Component {
  render() {
    return (
      <Text>{this.props.name}</Text>
      );
  }
}

const onButtonPress = () => {
  Alert.alert('aaa aaaa');
  
};
function getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson.description);
        return responseJson.description;
      })
      .catch((error) => {
        console.error(error);
      });
  }


class Bananas extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
        ])
    };
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{flex: 1}}>
      
      
      <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) => 
        <View>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text>{rowData}</Text>
        <Button
        style={{padding: 20}}
        onPress={getMoviesFromApiAsync}
        title="Learn More"
        color="#64B5F6"
        accessibilityLabel="Learn more about this purple button"
        />
        </View>
      }
      />
      </View>
      );
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
      <TextInput
      style={{height: 40}}
      placeholder="Type here to translate!"
      onChangeText={(text) => this.setState({text})}
      />
      <Text style={{padding: 10, fontSize: 42}}>
      {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
      </View>
      );
  }
}

import MyScene from './MyScene';

class YoDawgApp extends Component {
  render() {
  return (
    <Navigator
      initialRoute={{ title: 'My Initial Scene', index: 0 }}
      renderScene={(route, navigator) => {
        return <MyScene title={route.title} />
      }}
    />
  );
}

}

class SimpleNavigationApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed
            onForward={() => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }
}



AppRegistry.registerComponent('AwesomeProject', () => SimpleNavigationApp);

// AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
