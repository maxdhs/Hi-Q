import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Main from './Main'
import CompletedScreen from './CompletedScreen'

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
                    iconName = '📜'
                } else if (routeName === 'Completed') {
                    iconName = `✔️`;
                }
                return <Text style={{fontSize: 25}}>{iconName}</Text>;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

export default createAppContainer(TabNavigator);