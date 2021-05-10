import { Route, Switch } from 'react-router-dom';
import { MainPage } from './mainPage/MainPage';
import { BasicInformation } from './basicInformation/BasicInformation';
import { MainPageWrapper } from './layoutMainPageComponents/MainPageWrapper';

export const Main = () => {

  return(
    <MainPageWrapper >
      <Switch >
        <Route exact path="/" component={MainPage}/>
        <Route path="/basic_information" component={BasicInformation}/>
      </Switch>
    </MainPageWrapper>
  )
};