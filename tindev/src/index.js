import React from 'react';

// For warnings that i know that wont break my app and to not show the warning in developing
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);
 

import Routes from './routes';

export default function App() {
  return (
    <Routes />
  );
}
