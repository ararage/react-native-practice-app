/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Provider } from "react-redux";

// Components
import Loading from "./src/sections/components/Loading";
import AppLayout from "./src/App";

// Store
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Store";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <AppLayout />
        </PersistGate>
      </Provider>
    );
  }
}
