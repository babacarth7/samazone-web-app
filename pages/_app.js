import '../styles/globals.css'
import '../styles/globals.css';
import { StoreProvider } from '../utils/cart.context';

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;