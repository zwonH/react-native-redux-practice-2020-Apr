import React from 'react';
import { SafeAreaView } from 'react-native';
import Home from './src/screens/Home';
import { Provider } from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default App;
