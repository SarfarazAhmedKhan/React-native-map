import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import { Home, Dashboard, CreateCircle, JoinCircle, AddMember } from '../Screen';

// const HomeNavigator = createStackNavigator({
//     Dashboard: {
//         screen: Dashboard
//     },
//     Searchbar: {
//         screen: Searchbar
//     },
//     CategoryProduct: {
//         screen: CategoryProduct
//     },
//     SubCategoryProduct: {
//         screen: SubCategoryProduct
//     },
//     ViewProduct: {
//         screen: ViewProduct
//     },
//     SearchProduct: {
//         screen: SearchProduct
//     }
// }, {
//     navigationOptions: ({ navigation }) => ({
//         tabBarVisible: navigation.state.index < 1,
//     })
// });

// const AuthNavigator = createStackNavigator({
//     Signin: {
//         screen: Signin
//     },
//     Signup: {
//         screen: Signup
//     },
//     ForgetPassword: {
//         screen: ForgetPassword
//     },
//     ResetPassword: {
//         screen: ResetPassword
//     }
// }, {
//     navigationOptions: ({ navigation }) => ({
//         tabBarVisible: navigation.state.index < 0,
//     })
// });


const AuthContainer = createStackNavigator({
    Home: {
        screen: Home
    }
})

const AppContainer = createStackNavigator({
    Dashboard: {
        screen: Dashboard
    },
    CreateCircle: {
        screen: CreateCircle
    },
    JoinCircle: {
        screen: JoinCircle
    },
    AddMember: {
        screen: AddMember
    }
})


const MainNavigator = createSwitchNavigator({
    AuthContainer: {
        screen: AuthContainer
    },
    AppContainer: {
        screen: AppContainer
    }
})

export default createAppContainer(MainNavigator);