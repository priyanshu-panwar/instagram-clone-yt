import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./src/Store";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Main from "./src/Main";

const resetStore = async () => {
  await persistor.purge();
  await persistor.flush();
};

export default function App() {
  // resetStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Main />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
