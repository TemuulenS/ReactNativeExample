import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Button } from 'react-native';
import ActionBar from 'react-native-action-bar';


export default class MyScene extends Component {
  render() {
    return (
      <View>
         <ActionBar
            backgroundColor={'#fdd20a'}
            onLeftPress={this.props.onBack}
            title={'Title'}
            onTitlePress={this.handleTitlePress}
            onRightPress={this.handleRightAction}
            titleStyle={{color: "#002679", fontSize:20}}
            leftIconStyle={{tintColor : "#002679"}}
          />
        <Text>Current Scene: {this.props.title}</Text>

         <Button
        style={{padding: 20}}
        onPress={this.props.onForward}
        title="Tap me to load the next scene"
        color="#64B5F6"
        accessibilityLabel=""
        />

         <Button
        style={{padding: 20}}
        onPress={this.props.onBack}
        title="Tap me to go back"
        color="#64B5F6"
        accessibilityLabel=""
        />
      </View>
    )
  }
}

MyScene.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};
