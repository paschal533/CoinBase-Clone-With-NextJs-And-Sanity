import '../styles/globals.css';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const suppportedChainIds = [4]
const connectors = {
  injected: {},
} 

function MyApp({ Component, pageProps }) {
  return ( 
    <ThirdwebWeb3Provider
      suppportedChainIds={suppportedChainIds}
      connectors={connectors}
    > 
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
