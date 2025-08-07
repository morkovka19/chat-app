import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');
const App = ({ Component, pageProps }: AppProps) => {


  return (<>
    <Head >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wdth,wght@0,75..100,100..900;1,75..100,100..900&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Component {...pageProps} socket={socket} />
  </>
  );
}

export default App;
