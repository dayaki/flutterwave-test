import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigation';
import { Provider } from './store';

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
