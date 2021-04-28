import { GlobalStyle } from './components/styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ContentWrapper } from './components/ContentWrapper/ContentWrapper';
import { Main } from './components/Main/Main';

function App() {

  return (
    <>
      <GlobalStyle />
      <ContentWrapper>
        <Header />
        {/* <Main /> */}
        <Footer />
      </ContentWrapper>
    </>
  );
}

export default App;
