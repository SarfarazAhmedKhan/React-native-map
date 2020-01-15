import React from 'react';
import {
    StyleSheet, Text, TouchableOpacity, View, Dimensionsm, KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import * as Routes from '../Config/Routes/routes'
import axios from 'axios';
import { Button, Card, Title, Paragraph, TextInput, HelperText } from 'react-native-paper';

class AddMember extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let headerStyle = { backgroundColor: "#0c9463", color: "white" }
        let headerTitle = (<Text style={{ fontSize: 20, marginLeft: 30, color: "white" }}>Create Circle</Text>);
        return {
            headerTitle,
            headerStyle
        };
    }
    constructor(props) {
        super()
        this.state = {
            circle: ""
        }
    }

    CircleName = () => {
        console.log("view circle here")
    }

    CreateCircle = () => {
        console.log("view create circle here")
    }

    render() {
        return (
            <React.Fragment>
                <View style={styles.form}>
                    <Card style={styles.card}>
                        <Text>Enter phone number to send invite:</Text>
                        <Card.Content>
                            <TextInput
                                label='Enter Circle name'
                                style={styles.input}
                                mode='outlined'
                                onChangeText={(e) => this.CircleName(e)}
                            />
                        </Card.Content>
                        <Card.Actions style={{ justifyContent: "center", padding: 10, marginTop: 15 }}>
                            <TouchableOpacity style={styles.button} onPress={() => { this.CreateCircle(); Keyboard.dismiss }}>
                                <Text style={{ color: "white", textAlign: "center" }}>Create Circle</Text>
                            </TouchableOpacity>
                        </Card.Actions>
                    </Card>
                </View>
            </React.Fragment>
        );
    }
}

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
    form: {
        flex: 1,
        backgroundColor: "white",
        textAlign: "center",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    card: {
        width: "90%",
        borderRadius: 15
    },
    input: {
        backgroundColor: "white"
    },
    button: {
        borderRadius: 5,
        width: 130,
        padding: 15,
        backgroundColor: "#10316b",
        width: "96%"
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddMember)