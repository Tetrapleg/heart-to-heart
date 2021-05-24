import { Route, Switch } from 'react-router-dom';
import { MainPage } from './mainPage/MainPage';
import { BasicInformation } from './basicInformation/BasicInformation';
import { MainPageWrapper } from './layoutMainPageComponents/MainPageWrapper';
import { PageWithAside } from './layoutMainPageComponents/PageWithAside';
import { NewsAboutUs } from './newsAboutUs/NewsAboutUs';
import { LayoutShowPDF } from '../commonComponent/LayoutShowPDF';
import { shallowEqual, useSelector } from 'react-redux';

export const Main = () => {
  const urlPDF = useSelector(state => state.fullSizeContent.itemsPDF, shallowEqual);

  return(
    <MainPageWrapper >
      <Switch >
        <Route exact path="/" component={MainPage}/>
        <PageWithAside >
          <Route path="/basic_information" component={BasicInformation}/>
          <Route path="/news_about_us_and_our_wards" component={NewsAboutUs}/>
        </PageWithAside>
      </Switch>
      {urlPDF && 
        <LayoutShowPDF 
          urlPDF={urlPDF}
        />
      }
    </MainPageWrapper>
  )
};