import Header from '../components/Header';
import styled from 'styled-components';
import Main from '../components/Main';
import SideBar from '../components/SideBar';


const Dashboard = ({ address }) => {
    return (
      <Wrapper>
        <SideBar />
        <MainContainer>
          <Header wallectAddress={address} />
          <Main />
        </MainContainer>
      </Wrapper>
    )
}

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
  overflow: hidden;
`;

const MainContainer = styled.div`
  flex: 1;
`;
