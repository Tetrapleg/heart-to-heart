import { Route, Switch, useLocation } from 'react-router-dom';
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
import { HelpForAnimals } from './helpForAnimals/HelpForAnimals';
import { YouFoundAnimal } from './youFoundAnimal/YouFoundAnimal';
import { HowToAttach } from './howToAttach/HowToAttach';
import { AnimalNeedOfVeterinary } from './animalNeedOfVeterinary/AnimalNeedOfVeterinary';
import { createPortal } from 'react-dom';
import { LayoutPhotoAlbum } from '../commonComponent/LayoutPhotoAlbum';
import { YourPetIsMissing } from './yourPetIsMissing/YourPetIsMissing';

export const Main = () => {
  const urlPDF = useSelector(state => state.fullSizeContent.itemsPDF, shallowEqual);
  const urlImg = useSelector(state => state.fullSizeContent.itemsImg, shallowEqual);
  const idVideo = useSelector(state => state.fullSizeContent.itemsVideo, shallowEqual);
  const idPhotoAlbum = useSelector(state => state.fullSizeContent.idPhotoAlbum, shallowEqual);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(getJsonpVkApiData({count: 10, offset: 0}));
  }, [dispatch]);
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
          <Route path="/help_for_animals" component={HelpForAnimals}/>
          <Route path="/you_found_a_animal_on_the_street" component={YouFoundAnimal}/>
          <Route path="/how_to_attach_an_animal" component={HowToAttach}/>
          <Route path="/you_find_an_animal_in_need_of_veterinary_care" component={AnimalNeedOfVeterinary}/>
          <Route path="/your_pet_is_missing" component={YourPetIsMissing}/>
        </PageWithAside>
      </Switch>
      {urlPDF && 
        createPortal(<LayoutShowPDF 
          urlPDF={urlPDF}
        />, document.body)
      }
      {urlImg && 
        createPortal(<LayoutShowImg 
          urlImg={urlImg}
        />, document.body)
      }
      {idVideo && 
        createPortal(<LayoutShowVideo 
          idVideo={idVideo}
        />, document.body)
      }
      {idPhotoAlbum && 
        createPortal(<LayoutPhotoAlbum 
          idPhotoAlbum={idPhotoAlbum}
        />, document.body)
      }
    </MainPageWrapper>
  )
};