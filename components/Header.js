import styled from 'style-component'

const Header = ({ wallectAddress, connectWallect }) => {
    return (
       <Wrapper>
         <Title>Assets</Title>
         <ButtonsContainer>
           <WalletLink>
             <WalletLinkTitle>Wallet Connected</WalletLinkTitle>
             <WallectAddress>
               {wallectAddress.slice(0, 7)}...{wallectAddress.slice(35)}
             </WallectAddress>
           </WalletLink>
           <Button style={{ background: '#3773f5', color: '#000'}}>
             Buy / Sell
           </Button>
           <Button>Send / Receive</Button>
         </ButtonsContainer>
       </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
  width: calc(100% - 3rem);
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #282b2f;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  flex: 1;
`;

const ButtonsContainer = styled.div`
  diaplay: flex;
`;

const Button = styled.div`
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  border-radius: 500;
  border-radius: 0.4rem;
  color: #000;

  &:hover {
    cursor: pointer;
  }
`;

const WalletLink = styled.div`
  font-size: 0.8rem;
  border: 1px solid #282b2f;
  border-radius: 50rem;
  font-size: 1.2rem;
  margin-right: 1rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const WalletLinkTitle = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: #27ad75;
  font-weight: 600;
`;

const WallectAddress = styled.div`
  font-size: 0.8rem;
`;
