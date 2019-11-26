import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserProfileScreen from '../../screens/UserProfileScreen';
import DiscoverScreen from '../../screens/DiscoverScreen';
import ChallengeScreen from '../../screens/ChallengeScreen';
import theme from '../../styles/themes';

const MenuRoutes = {
  UserProfile: {
    name: 'UserProfile',
    screen: UserProfileScreen,
    navigationOptions: {
      title: 'Perfil',
      tabBarIcon: ({tintColor}) => (
        <Icon name="account-circle" size={25} color={tintColor} solid />
      ),
    },
  },
  Discover: {
    name: 'Discover',
    screen: DiscoverScreen,
    navigationOptions: {
      title: 'Descobrir',
      tabBarIcon: ({tintColor}) => (
        <Icon name="map-search" size={25} color={tintColor} />
      ),
    },
  },
  Challenge: {
    name: 'Challenge',
    screen: ChallengeScreen,
    navigationOptions: {
      title: 'Desafios',
      tabBarIcon: ({tintColor}) => (
        <Icon name="dumbbell" size={25} color={tintColor} />
      ),
    },
  },
};

const MenuConfig = {
  initialRouteName: 'UserProfile',
  backBehavior: 'order',
  tabBarOptions: {
    showLabel: true,
    activeTintColor: 'white',
    inactiveTintColor: 'black',
    style: {
      backgroundColor: theme.primaryColor,
    },
  },
};

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig);

const MainNavigator = createAppContainer(MenuNavigator);

const MainApp = () => <MainNavigator />;

export default MainApp;
