import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import Preloader from '../animationElements/Preloader';
import { dbMenu } from '../DB';

const nodbPages = [
  {
    menuItem: 'Главная страница',
    link: 'heart-to-heart',
    icon: '',
  },
  {
    menuItem: 'Полезная информация',
    link: 'useful_information',
    icon: '',
  },
  {
    menuItem: 'Помощь животным',
    link: 'help_for_animals',
    icon: '',
  },
];

const arrDB = dbMenu.sideBarMenu.aboutUs.menuItems
.concat(dbMenu.sideBarMenu.takeAPet.menuItems, 
        dbMenu.sideBarMenu.facingProblem.menuItems,
        nodbPages);

const MainContent = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  padding: 3em;
  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  & p {
    color: rgba(255,255,255,1);
    filter: drop-shadow(0 0 2px rgba(255,0,0,0.5));
  }
`;

export const Mainc = ({ children, ...props }) => {
  const location = useLocation().pathname.slice(1);
  const [pageName, setPageName] = useState(null);
  const [bgImage, setBgImage] = useState(null);

  useEffect(() => {
    const newDB = arrDB.filter(i => i.link === location);
    console.log(location);
    setPageName(newDB[0].menuItem);
    setBgImage(null);
    const apiKey = '20475424-74f8f943b4b24c8d3e523c57e';
    const animals = () => {
      const num = Math.ceil(Math.random() * 10);

      return num < 5 ? 'cat' : 'dog';
    };
    const URL = `https://pixabay.com/api/?key=${apiKey}&category=animals&q=${animals()}&image_type=photo`;

    const getPhoto = async () => {
      const result = await fetch(URL);
      if(!result.ok) {

        console.log('Ошибка: ' + result.status);
      }
      
      return result.json();
    };

    getPhoto()
            .then(data => {
              const num = Math.floor(Math.random() * data.hits.length);
              const dataImg = data.hits[num].largeImageURL;
              
              setBgImage(dataImg);
            });
    
  }, [location]);

  return(
  <MainContent bgImage={bgImage}>
    {pageName && <p>{pageName}</p>}
    {children}
    {!bgImage && <Preloader />}
  </MainContent>
)};