import styled from 'style-components'
import { useWeb3 } from '@web3/hooks'
import Dashboard from './Dashboard'

export default function Home() {
  const { adddress, connnectWallet } = useWeb3()

  return (
     <Wrapper>
       {adddress ? (<Dashboard address={address} />) : ( 
          <WalletConnect>
            <Button onClick={() => connnectWallet('injected')}>Connect Wallet</Button>
            <Details>
              You need chrome to be 
              <br /> able to run this app.
            </Details>
          </WalletConnect>
        )}
     </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: #0a0b0d;
  color: white;
  display: grid;
  place-items: center;
`;

const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  border-radius: 500;
  background-color: #3773f5;
  border-radius: 0.4rem;
  color: #000;

  &:hover {
    cursor: pointer;
  }
`;

const Details = styled.div`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
  color: #282b2f;
`;
