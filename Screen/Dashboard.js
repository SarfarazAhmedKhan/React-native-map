import React from 'react';
import {
    StyleSheet, Text, TouchableOpacity, View, Dimensions
} from 'react-native';
import { Header } from 'react-native-elements'
import { connect } from 'react-redux';
import * as Routes from '../Config/Routes/routes'
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation'
import LinearGradient from 'react-native-linear-gradient';
import ModalDropdown from 'react-native-modal-dropdown';

let _this = this

class Dashboard extends React.Component {
    componentDidMount() {
        _this = this
        Geolocation.getCurrentPosition(info => {
            this.setState({
                coordinate: info.coords
            })
        })
    }
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let headerStyle = { backgroundColor: "#0c9463" }
        let headerTitle = (<View style={{ display: "flex", flexDirection: "row" }}><Text style={{ fontSize: 20, marginLeft: 30, color: "white" }}>Home</Text></View>);
        let headerRight = (<View style={{ display: "flex", flexDirection: "row", marginRight: 10 }}><Icon name="person" size={30} color={"white"} /><TouchableOpacity onPress={() => _this.CreateCircle()}><Icon name="group-add" size={30} color={"white"} /></TouchableOpacity>
            <ModalDropdown dropdownStyle={{ width: 200 }} dropdownTextStyle={{ fontSize: 20 }} textStyle={{ fontsize: 20 }} dropdownStyle={{ width: 160 }} onSelect={(e) => _this.CreateCircle(e)} textStyle={{ fontsize: 10 }} options={['Create Circle', 'Join Circle', 'Edit Profile']}>
                <Icons name="dots-vertical" size={30} color={"white"}></Icons>
            </ModalDropdown></View>);
        return {
            headerTitle,
            headerRight,
            headerStyle
        };
    }
    constructor(props) {
        super()
        this.state = {
            products: "",
            latLng: {
                latitude: 24.8721307,
                longitude: 67.1965953
            },
            coordinate: ""
        }
    }

    CreateCircle = (e) => {
        if (e == 0) {
            this.props.navigation.navigate('CreateCircle')
        } else if (e == 1) {
            this.props.navigation.navigate('JoinCircle')
        } else if (e == 2) {
            this.props.navigation.navigate('EditProfile')
        }
        console.log("cview selections", e)
    }

    render() {
        const { coordinate } = this.state
        return (
            <React.Fragment>
                <View style={styles.backgroundContainer}>
                    {
                        this.state.coordinate != null &&
                        <>
                            <MapView style={styles.map}
                                initialRegion={{
                                    latitude: 24.8721307,
                                    longitude: 67.1965953,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                            >
                                <Marker
                                    coordinate={{
                                        latitude: coordinate.latitude,
                                        longitude: coordinate.longitude
                                    }}
                                />
                            </MapView>
                            <View style={{ display: "flex", alignItems: "center" }}>
                                <TouchableOpacity style={styles.danger}>
                                    <Text style={{ color: "white" }}>I am in danger</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    }
                </View>
            </React.Fragment>
        );
    }
}
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const mapStateToProps = state => {
    return {
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: (id, email, name, status) => {
            dispatch(USER(id, email, name, status))
        }
    }
}
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        ...StyleSheet.absoluteFillObject
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    danger: {
        backgroundColor: "red",
        width: 300,
        alignItems: "center",
        justifyContent: "center",
        marginTop: HEIGHT - 160,
        display: "flex",
        borderRadius: 5,
        padding: 13
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)