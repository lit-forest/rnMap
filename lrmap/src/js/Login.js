import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import MyScene from './MyScene';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

const background = require('../img/test.jpg');
const lockIcon = require('../img/lock.png');
const personIcon = require('../img/person.png');

class Login extends Component {
    constructor(props) {
        super(props);
    }
    signInPress() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'MyScene',
                component: MyScene
            })
        }
    }
    signUpPress() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'SignUp',
                component: SignUp
            })
        }
    }
    forgotPassword() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'ForgotPassword',
                component: ForgotPassword
            })
        }
    }
    render() {
        return (
            <Image
                style={[styles.background, styles.container]}
                source={background}
                resizeMode='cover'>
                <View style={styles.container} />
                <View style={styles.wrapper}>
                    <View style={styles.inputWrap}>
                        <View style={styles.iconWrap}>
                            <Image
                                source={personIcon}
                                style={styles.icon}
                                resizeMode='contain' />
                        </View>
                        <TextInput
                            placeholder='Username'
                            style={styles.input}
                            underlineColorAndroid='transparent' />
                    </View>
                    <View style={styles.inputWrap}>
                        <View style={styles.iconWrap}>
                            <Image
                                source={lockIcon}
                                style={styles.icon}
                                resizeMode='contain' />
                        </View>
                        <TextInput
                            placeholder='Password'
                            secureTextEntry
                            style={styles.input}
                            underlineColorAndroid='transparent' />
                    </View>
                    <TouchableOpacity activeOpacity={.7} onPress={() => this.signInPress()}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Sign In</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.other}>
                        <TouchableOpacity activeOpacity={.5} onPress={() => this.signUpPress()}>
                            <View style={styles.signUp}>
                                <Text style={styles.signUpText}>Sign Up</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.5} onPress={() => this.forgotPassword()}>
                            <View style={styles.forgotPassword}>
                                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container} />
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        width: '100%',
        height: '100%'
    },
    wrapper: {
        paddingHorizontal: 15
    },
    inputWrap: {
        flexDirection: 'row',
        marginVertical: 10,
        height: 40,
        backgroundColor: 'transparent'
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
    iconWrap: {
        paddingHorizontal: 7,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d73352'
    },
    icon: {
        width: 20,
        height: 20
    },
    button: {
        backgroundColor: '#d73352',
        paddingHorizontal: 15,
        marginVertical: 15,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18
    },
    other: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-around'
    },
    signUp: {
        width: 60
    },
    signUpText: {
        color: '#fff',
        backgroundColor: 'transparent',
        textAlign: 'center'
    },
    forgotPassword: {
        width: 130
    },
    forgotPasswordText: {
        color: '#fff',
        backgroundColor: 'transparent',
        textAlign: 'center'
    }
})

Login.propTypes = {
    navigator: PropTypes.object.isRequired
};

export default Login;