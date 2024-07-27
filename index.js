/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const App2 = () => {
  let app = <App />;
  const withStrictMode = false;
  if (withStrictMode) {
    app = <React.StrictMode>{app}</React.StrictMode>;
  }
  return app;
};

AppRegistry.registerComponent(appName, () => App2);
