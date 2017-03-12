import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, ScrollView } from 'react-native';
import Nav from '../components/Nav';

const searchIcon = require('../../img/search.png');
const meishi = require('../../img/recommendList/meishi.png');
const jiudian = require('../../img/recommendList/jiudian.png');
const jingdian = require('../../img/recommendList/jingdian.png');
const yinhang = require('../../img/recommendList/yinhang.png');
const dianying = require('../../img/recommendList/dianying.png');
const weizhang = require('../../img/recommendList/weizhang.png');
const gongjiao = require('../../img/recommendList/gongjiao.png');
const tingchechang = require('../../img/recommendList/tingchechang.png');
const jiayouzhan = require('../../img/recommendList/jiayouzhan.png');
const gengduo = require('../../img/recommendList/gengduo.png');

class Nearby extends Component {
    constructor(props) {
        super(props);
    }
    press() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
    render() {
        const { navigator } = this.props;
        return (
            <View>
                <View style={styles.search} elevation={5}>
                    <Nav nav={navigator} style={styles.nav} />
                    <View style={styles.iconWrap}>
                        <Image
                            source={searchIcon}
                            style={styles.icon}
                            resizeMode='contain' />
                    </View>
                    <TextInput
                        placeholder='查找地点、公交、地铁'
                        style={styles.input}
                        underlineColorAndroid='transparent' />
                </View>
                <View style={styles.menuBar}>
                    <Text>推荐</Text>
                    <Text>车友</Text>
                    <Text>吃货</Text>
                    <Text>旅游</Text>
                    <Text>玩乐</Text>
                </View>
                <View>
                    <ScrollView style={styles.scrollContainer}>
                        <View style={styles.recommend}>
                            <View style={styles.recommendList}>
                                <Image
                                    style={styles.recommendIcon}
                                    source={meishi}
                                    resizeMode='contain' />
                                <Text style={styles.recommendListText}>美食</Text>
                            </View>
                            <View style={styles.recommendList}>
                                <Image
                                    style={styles.recommendIcon}
                                    source={jiudian}
                                    resizeMode='contain' />
                                <Text style={styles.recommendListText}>酒店</Text>
                            </View>
                            <View style={styles.recommendList}>
                                <Image
                                    style={styles.recommendIcon}
                                    source={jingdian}
                                    resizeMode='contain' />
                                <Text style={styles.recommendListText}>景点</Text>
                            </View>
                            <View style={styles.recommendList}>
                                <Image
                                    style={styles.recommendIcon}
                                    source={yinhang}
                                    resizeMode='contain' />
                                <Text style={styles.recommendListText}>银行</Text>
                            </View>
                            <View style={styles.recommendList}>
                                <Image
                                    style={styles.recommendIcon}
                                    source={dianying}
                                    resizeMode='contain' />
                                <Text style={styles.recommendListText}>电影</Text>
                            </View>
                        </View>
                        <View style={styles.recommend}>
                            <View style={styles.recommendList}>
                                <Image
                                    style={styles.recommendIcon}
                                    source={weizhang}
                                    resizeMode='contain' />
                                <Text style={styles.recommendListText}>违章查询</Text>
                            </View>
                            <View style={styles.recommendList}>
                                <Image
                                    style={styles.recommendIcon}
                                    source={gongjiao}
                                    resizeMode='contain' />
                                <Text style={styles.recommendListText}>公交地铁</Text>
                            </View>
                            <View style={styles.recommendList}>
                                <Image
                                    style={styles.recommendIcon}
                                    source={tingchechang}
                                    resizeMode='contain' />
                                <Text style={styles.recommendListText}>停车场</Text>
                            </View>
                            <View style={styles.recommendList}>
                                <Image
                                    style={styles.recommendIcon}
                                    source={jiayouzhan}
                                    resizeMode='contain' />
                                <Text style={styles.recommendListText}>加油站</Text>
                            </View>
                            <View style={styles.recommendList}>
                                <Image
                                    style={styles.recommendIcon}
                                    source={gengduo}
                                    resizeMode='contain' />
                                <Text style={styles.recommendListText}>更多</Text>
                            </View>
                        </View>
                        <View>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                            <Text>这里是 下拉菜单 模块</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    //搜索栏
    search: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        height: 60,
        backgroundColor: '#007aff',
        zIndex: 2,
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopRightRadius: 2,
        borderBottomRightRadius: 2,
        marginTop: 15,
        marginBottom: 5,
        height: 40
    },
    iconWrap: {
        paddingHorizontal: 7,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 2,
        borderBottomLeftRadius: 2,
        marginTop: 15,
        marginBottom: 5,
        height: 40
    },
    icon: {
        width: 20,
        height: 20
    },
    //选项卡
    menuBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: '#C0C0C0'
    },
    //滚动容器
    scrollContainer: {
        //flex: 1,
        height: 800,
        marginTop: 3
    },
    recommend: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    recommendIcon: {
        width: 20,
        height: 20,
        //marginLeft: 5,
        // marginRight: 30
    },
    recommendList: {
        width: '16%',
        alignItems: 'center'
    },
    recommendListText: {
        fontSize: 10
    }
})

export default Nearby;