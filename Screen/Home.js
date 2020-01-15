import React from 'react';
import {
    StyleSheet, Text, TouchableOpacity, View, Dimensions, ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import * as Routes from '../Config/Routes/routes'
import axios from 'axios';
import Logo from '../assets/TrackBuddy.png'
import { LoginButton, AccessToken } from 'react-native-fbsdk';

class Home extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        };
    }
    constructor(props) {
        super()
        this.state = {
            products: ""
        }
    }

    Dashboard = () => {
        this.props.navigation.navigate('AppContainer')
    }

    render() {
        return (
            <React.Fragment>
                <View style={{ width: WIDTH, height: HEIGHT }}>
                    <ImageBackground
                        source={Logo}
                        resizeMode='cover'
                        style={{ imageRendering: "pixelated", width: WIDTH, height: HEIGHT }}
                    >
                        <View style={{ alignItems: "center", marginBottom: 0, marginTop: (HEIGHT - 100), display: "flex" }}>
                            <LoginButton
                                onLoginFinished={
                                    (error, result) => {
                                        if (error) {
                                            console.log("login has error: " + result.error);
                                        } else if (result.isCancelled) {
                                            console.log("login is cancelled.");
                                        } else {
                                            AccessToken.getCurrentAccessToken().then(
                                                (data) => {
                                                    console.log(data.getUserId())
                                                    this.Dashboard()
                                                }
                                            )
                                        }
                                    }
                                }
                                onLogoutFinished={() => console.log("logout.")} />
                        </View>
                    </ImageBackground>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)