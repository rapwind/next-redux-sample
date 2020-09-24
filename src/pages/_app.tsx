import { AppProps } from "next/app";
// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import { Provider } from "react-redux";
import store from "~/features/store";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);
export default App;
