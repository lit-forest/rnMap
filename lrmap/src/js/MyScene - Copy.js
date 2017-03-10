'use strict';
/* eslint no-console: 0 */

import React, { Component } from 'react';
import Mapbox, { MapView } from 'react-native-mapbox-gl';
import {
    AppRegistry,
    StyleSheet,
    Text,
    StatusBar,
    View,
    TextInput,
    Image,
    ScrollView
} from 'react-native';

const searchIcon = require('../img/search.png');
const nearbyIcon = require('../img/nearby.png');
const routeIcon = require('../img/route.png');
const meIcon = require('../img/me.png');

const accessToken = 'pk.eyJ1Ijoic3lsdmVuYXMiLCJhIjoiY2owMGpnd2QwMDRtajMybHNsNjJ6eHN5NSJ9.NNj7vjs21xI-8cYcpU2RVQ';
Mapbox.setAccessToken(accessToken);

class MyScene extends Component {
    state = {
        center: {
            latitude: 31.2,
            longitude: 121.4
        },
        zoom: 12,
        userTrackingMode: Mapbox.userTrackingMode.none,
        annotations: [{
            coordinates: [31.2, 121.4],
            type: 'point',
            title: 'XX警员',
            subtitle: '正在前往XX执行XX任务',
            annotationImage: {
                source: { uri: 'poi' },
                height: 20,
                width: 20
            },
            id: 'marker1'
        }, {
            coordinates: [31.21, 121.43],
            type: 'point',
            title: 'xx警车',
            subtitle: '正在XX街道巡逻',
            annotationImage: {
                source: { uri: 'poi2' },
                height: 20,
                width: 20
            },
            id: 'marker2'
        }, {
            coordinates: [[31.2, 121.4], [31.21, 121.4], [31.2, 121.41], [31.18, 121.42], [31.17, 121.43], [31.21, 121.44], [31.2, 121.4]],
            type: 'polyline',
            strokeColor: '#00FB00',
            strokeWidth: 2,
            strokeAlpha: .5,
            id: 'foobar'
        }, {
            coordinates: [[40.749857912194386, -73.96820068359375], [40.741924698522055, -73.9735221862793], [40.735681504432264, -73.97523880004883], [40.7315190495212, -73.97438049316406], [40.729177554196376, -73.97180557250975], [40.72345355209305, -73.97438049316406], [40.719290332250544, -73.97455215454102], [40.71369559554873, -73.97729873657227], [40.71200407096382, -73.97850036621094], [40.71031250340588, -73.98691177368163], [40.71031250340588, -73.99154663085938]],
            type: 'polygon',
            fillAlpha: 1,
            strokeColor: '#ffffff',
            fillColor: '#0000ff',
            id: 'zap'
        }]
    };

    onRegionDidChange = (location) => {
        this.setState({ currentZoom: location.zoomLevel });
        console.log('onRegionDidChange', location);
    };
    onRegionWillChange = (location) => {
        console.log('onRegionWillChange', location);
    };
    onUpdateUserLocation = (location) => {
        console.log('onUpdateUserLocation', location);
    };
    onOpenAnnotation = (annotation) => {
        console.log('onOpenAnnotation', annotation);
    };
    onRightAnnotationTapped = (e) => {
        console.log('onRightAnnotationTapped', e);
    };
    onLongPress = (location) => {
        console.log('onLongPress', location);
    };
    onTap = (location) => {
        console.log('onTap', location);
    };
    onChangeUserTrackingMode = (userTrackingMode) => {
        this.setState({ userTrackingMode });
        console.log('onChangeUserTrackingMode', userTrackingMode);
    };

    componentWillMount() {
        this._offlineProgressSubscription = Mapbox.addOfflinePackProgressListener(progress => {
            console.log('offline pack progress', progress);
        });
        this._offlineMaxTilesSubscription = Mapbox.addOfflineMaxAllowedTilesListener(tiles => {
            console.log('offline max allowed tiles', tiles);
        });
        this._offlineErrorSubscription = Mapbox.addOfflineErrorListener(error => {
            console.log('offline error', error);
        });
    }

    componentWillUnmount() {
        this._offlineProgressSubscription.remove();
        this._offlineMaxTilesSubscription.remove();
        this._offlineErrorSubscription.remove();
    }

    addNewMarkers = () => {
        // Treat annotations as immutable and create a new one instead of using .push()
        this.setState({
            annotations: [...this.state.annotations, {
                coordinates: [40.73312, -73.989],
                type: 'point',
                title: 'This is a new marker',
                id: 'foo'
            }, {
                'coordinates': [[40.749857912194386, -73.96820068359375], [40.741924698522055, -73.9735221862793], [40.735681504432264, -73.97523880004883], [40.7315190495212, -73.97438049316406], [40.729177554196376, -73.97180557250975], [40.72345355209305, -73.97438049316406], [40.719290332250544, -73.97455215454102], [40.71369559554873, -73.97729873657227], [40.71200407096382, -73.97850036621094], [40.71031250340588, -73.98691177368163], [40.71031250340588, -73.99154663085938]],
                'type': 'polygon',
                'fillAlpha': 1,
                'fillColor': '#000000',
                'strokeAlpha': 1,
                'id': 'new-black-polygon'
            }]
        });
    };

    updateMarker2 = () => {
        // Treat annotations as immutable and use .map() instead of changing the array
        this.setState({
            annotations: this.state.annotations.map(annotation => {
                if (annotation.id !== 'marker2') { return annotation; }
                return {
                    coordinates: [31.22, 121.41],
                    'type': 'point',
                    title: 'New Title!',
                    subtitle: 'New Subtitle',
                    annotationImage: {
                        source: { uri: 'https://cldup.com/7NLZklp8zS.png' },
                        height: 25,
                        width: 25
                    },
                    id: 'marker2'
                };
            })
        });
    };

    removeMarker2 = () => {
        this.setState({
            annotations: this.state.annotations.filter(a => a.id !== 'marker2')
        });
    };

    render() {
        StatusBar.setHidden(true);
        return (
            <View style={styles.container}>
                <View style={styles.search} elevation={5}>
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
                <MapView
                    ref={map => { this._map = map; }}
                    style={styles.map}
                    initialCenterCoordinate={this.state.center}
                    initialZoomLevel={this.state.zoom}
                    initialDirection={0}
                    rotateEnabled={true}
                    scrollEnabled={true}
                    zoomEnabled={true}
                    showsUserLocation={false}
                    styleURL={Mapbox.mapStyles.streets}
                    userTrackingMode={this.state.userTrackingMode}
                    annotations={this.state.annotations}
                    annotationsAreImmutable
                    onChangeUserTrackingMode={this.onChangeUserTrackingMode}
                    onRegionDidChange={this.onRegionDidChange}
                    onRegionWillChange={this.onRegionWillChange}
                    onOpenAnnotation={this.onOpenAnnotation}
                    onRightAnnotationTapped={this.onRightAnnotationTapped}
                    onUpdateUserLocation={this.onUpdateUserLocation}
                    onLongPress={this.onLongPress}
                    onTap={this.onTap}
                    attributionButtonIsHidden={true}
                    logoIsHidden={true}
                />
                <View style={styles.bottom}>
                    <View style={styles.item}>
                        <Image
                            source={nearbyIcon}
                            style={styles.itemIcon}
                            resizeMode='contain' />
                        <Text style={styles.text}>附近</Text>
                    </View>
                    <View style={styles.item}>
                        <Image
                            source={routeIcon}
                            style={styles.itemIcon}
                            resizeMode='contain' />
                        <Text style={styles.text}>路线</Text>
                    </View>
                    <View style={styles.item}>
                        <Image
                            source={meIcon}
                            style={styles.itemIcon}
                            resizeMode='contain' />
                        <Text style={styles.text}>我的</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    search: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 10,
        height: 40,
        backgroundColor: 'transparent',
        zIndex: 2,
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopRightRadius: 2,
        borderBottomRightRadius: 2,
    },
    iconWrap: {
        paddingHorizontal: 7,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 2,
        borderBottomLeftRadius: 2,
    },
    icon: {
        width: 20,
        height: 20
    },
    map: {
        //alignSelf: 'stretch',
        flex: 1,
        marginTop: -50
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        height: 40,
    },
    item: {
        flexDirection: 'row',
    },
    itemIcon: {
        marginTop: 10,
        width: 20,
        height: 20
    },
    text: {
        marginTop: 10
    }
});

export default MyScene;