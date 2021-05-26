import { AppRegistry, Platform } from 'react-native';
import { App } from './src/App';

const isWeb = Platform.OS === 'web';

AppRegistry.registerComponent(isWeb ? 'main' : 'RNW', () => App);
if (isWeb) {
  const rootTag =
    document.getElementById('root') ?? document.getElementById('main');
  AppRegistry.runApplication('main', { rootTag });
}
