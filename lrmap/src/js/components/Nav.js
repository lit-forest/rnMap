import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

class Nav extends Component {
    constructor() {
        super();
        this.navPress = this.navPress.bind(this);
    }
    navPress() {
        const { nav } = this.props;
        if (nav) {
            nav.pop();
        }
    }
    render() {
        return (
            <TouchableOpacity activeOpacity={1} onPress={this.navPress}>
                <View style={styles.nav} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    nav: {
        height: 10,
        width: 10,
        marginTop: 30,
        marginLeft: 2,
        marginRight: 5,
        marginBottom: 2,
        borderTopWidth: 2,
        borderTopColor: '#fff',
        borderLeftWidth: 2,
        borderLeftColor: '#fff',
        transform: [{
            rotate: '-45deg'
        }],
    }
})

Nav.propTypes = {
    nav: PropTypes.object.isRequired
};

export default Nav;