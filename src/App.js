import React from 'react';
import Master from './components/Master'
import './App.css';
import { Provider } from 'react-redux'
import { store } from './redux/store-config/store';
function App() {
  return (
    <div>
      <Provider store={store}>
        <Master />
      </Provider>
    </div>
  );
}

export default App;
