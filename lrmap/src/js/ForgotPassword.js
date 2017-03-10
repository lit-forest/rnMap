import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

class ForgotPassword extends Component {
    press() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
    render() {
        return (
            <View>
            <Text onPress={()=>this.press()}>忘记密码</Text>
            </View>
        );
    }
}

export default ForgotPassword;