import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import firebase from 'react-native-firebase';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  _loginWithEmailAndPassword = () => {
    if(this.state.username!==""&&this.state.password!==""){
      firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
      .then(() => {
        Alert.alert(
          "Login thanh cong",
          `User: ${this.state.username}`,

        )
      })
      .catch(
        function(error){
          Alert.alert(
            "Login that bai",
          )
        }
      )
    }else{
      Alert.alert(
        "Username and password can't be null"
      )
    }
  }

  render() {
    return (
      <View>
        <TextInput
          style={{ width: '100%', height: 50 }}
          placeholder="Email"
          onChangeText={(text) => this.setState({
            username: text
          })}
          value={this.state.username}
        ></TextInput>
        <TextInput
          style={{ width: '100%', height: 50 }}
          placeholder="Email"
          onChangeText={(text) => this.setState({
            password: text
          })}
          value={this.state.password}
          secureTextEntry={true}
        ></TextInput>
        <TouchableOpacity
          onPress={this._loginWithEmailAndPassword}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
