import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Main from './Main'
import CompletedScreen from './CompletedScreen'
import * as Icons from '@expo/vector-icons';

const TabNavigator = createBottomTabNavigator(
    {
        Haiku: Main,
        Completed: CompletedScreen,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: () => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Haiku') {
                    iconName = <Icons.SimpleLineIcons name="book-open" size={22} />
                } else if (routeName === 'Completed') {
                    iconName = <Icons.FontAwesome name="check-square" size={22} />
                }
                return iconName
            },
        }),
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'grey',
            labelStyle: {
                fontSize: 13,
            },
        },
    }
);

export default createAppContainer(TabNavigator);