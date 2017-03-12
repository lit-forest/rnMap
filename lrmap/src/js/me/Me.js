import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Nav from '../components/Nav';

class Me extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigator } = this.props;
        return (
            <View>
                <Nav nav={navigator} />
                <Text>这里是 我的 模块</Text>
            </View>
        );
    }
}

export default Me;