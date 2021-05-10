import { GlobalStyle } from './components/styles/GlobalStyles';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { ContentWrapper } from './components/contentWrapper/ContentWrapper';
import { Main } from './components/main/Main';

function App() {

  return (
    <>
      <GlobalStyle />
      <ContentWrapper>
        <Header />
        <Main />
        <Footer />
      </ContentWrapper>
    </>
  );
}

export default App;
