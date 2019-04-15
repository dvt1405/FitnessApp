import React, { Component } from 'react';
import { View, Text, Alert, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase'
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  _signUp = (username, password) => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        () => {
          Alert.alert(
            "Signupsuccess"
          ) 
        }
      ).catch((err) => Alert.alert(err))
  }
  render() {
    return (
      <View>
        <TextInput
          style={{ width: '100%', height: 50 }}
          placeholder="Email"
          onChangeText={(text) => this.setState({
            email: text
          })}
          value={this.state.username}
        ></TextInput>
        <TextInput
          style={{ width: '100%', height: 50 }}
          placeholder="Password"
          onChangeText={(text) => this.setState({
            password: text
          })}
          value={this.state.password}
          secureTextEntry={true}
        ></TextInput>
        <TouchableOpacity
          onPress={this._signUp}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Register;
