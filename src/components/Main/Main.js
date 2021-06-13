import { Route, Switch } from 'react-router-dom';
import { MainPage } from './mainPage/MainPage';
import { BasicInformation } from './basicInformation/BasicInformation';
import { MainPageWrapper } from './layoutMainPageComponents/MainPageWrapper';
import { PageWithAside } from './layoutMainPageComponents/PageWithAside';
import { NewsAboutUs } from './newsAboutUs/NewsAboutUs';
import { LayoutShowPDF } from '../commonComponent/LayoutShowPDF';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { LayoutShowImg } from '../commonComponent/LayoutShowImg';
import { LayoutShowVideo } from '../commonComponent/LayoutShowVideo';
import { BeforeYouMakeFriend } from './beforeYouMakeFriend/BeforeYouMakeFriend';
import { useEffect } from 'react';
import { getJsonpVkApiData } from '../actions/getJsonpVkApiData';
import { FinancialReports } from './financialReports/FinancialReports';
import { Dogs } from './dogs/Dogs';
import { Cats } from './cats/Cats';

export const Main = () => {
  const urlPDF = useSelector(state => state.fullSizeContent.itemsPDF, shallowEqual);
  const urlImg = useSelector(state => state.fullSizeContent.itemsImg, shallowEqual);
  const idVideo = useSelector(state => state.fullSizeContent.itemsVideo, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJsonpVkApiData({count: 10, offset: 0}));
  }, [dispatch]);

  return(
    <MainPageWrapper >
      <Switch >
        <Route exact path="/" component={MainPage}/>
        <PageWithAside >
          <Route path="/basic_information" component={BasicInformation}/>
          <Route path="/news_about_us_and_our_wards" component={NewsAboutUs}/>
          <Route path="/before_you_make_a_four_legged_friend" component={BeforeYouMakeFriend}/>
          <Route path="/financial_reports_on_donations" component={FinancialReports}/>
          <Route path="/dogs_looking_for_a_home" component={Dogs}/>
          <Route path="/cats_looking_for_a_home" component={Cats}/>
        </PageWithAside>
      </Switch>
      {urlPDF && 
        <LayoutShowPDF 
          urlPDF={urlPDF}
        />
      }
      {urlImg && 
        <LayoutShowImg 
          urlImg={urlImg}
        />
      }
      {idVideo && 
        <LayoutShowVideo 
          idVideo={idVideo}
        />
      }
    </MainPageWrapper>
  )
};