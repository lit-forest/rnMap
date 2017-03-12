import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class componentName extends Component {
    press() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
    render() {
        return (
            <View>
                <Text onPress={() => this.press()}>这里是附件模块</Text>
            </View>
        );
    }
}

export default componentName;