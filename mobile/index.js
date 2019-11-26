import {AppRegistry} from 'react-native';
import RootNavigator from './src/navigation/navigators/RootNavigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => RootNavigator);
