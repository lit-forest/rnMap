import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Nav from '../components/Nav';

class Route extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigator } = this.props;
        return (
            <View>
                <View >
                    <Nav nav={navigator} />
                    <Text>这里是 路线 模块</Text>
                </View>
                <View >
                    <Text>这里是 推荐 车友等等 模块</Text>
                </View>
                <View >
                    <Text>这里是 选项卡 模块</Text>
                </View>
                <View >
                    <Text>这里是 下拉菜单 模块</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    }
});

export default Route;