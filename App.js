import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {LogContextProvider} from './contexts/LogContext';

function App() {
  return (
    <NavigationContainer>
      <LogContextProvider value="안녕하세요.">
        <RootStack />
      </LogContextProvider>
    </NavigationContainer>
  );
}

export default App;
