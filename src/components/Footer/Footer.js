import React from 'react';
import styled from 'styled-components';
import YandexShare from 'react-yandex-share';
import { ContentContainer } from '../HTMLContainer/ContentContainer';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  background-color: rgb(93,76,96);
  border-top: 1px solid rgba(255,0,0,0.8);
  height: fit-content;
  width: 100%;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
`;

const YandexShareContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const YandexShareTitle = styled.p`
  font-size: 1.2em;
  padding-bottom: 0.5em;
  color: rgba(255,255,255,0.8);
  text-shadow: 1px 1px 2px black, 0 0 1em red;
`;

const YandexShareWrapper = styled.div`
  & li {
    margin: 0.3em 0.8em 0 0 !important;
    & a {
      font-size: 1.2em;
    }
    & span {
      width: 2.2em;
      height: 2.2em;
      & span {
        width: 2.2em !important;
        height: 2.2em !important;
        background-size: cover !important;
      }
    }
  }
`;

export const Footer = () => (
  <>
    <FooterWrapper>
      <ContentContainer>
        <YandexShareContainer>
          <YandexShareTitle>Помоги бездомным животным - расскажи о нас друзьям!</YandexShareTitle>
          <YandexShareWrapper>
            <YandexShare 
              content={{ title: 'Помоги бездомным животным - расскажи о нас друзьям!' }}
              theme={{ lang: 'ru', 
                      services: 'vkontakte,facebook,twitter,odnoklassniki,messenger,telegram',
                      curtain: true,
                      limit: 8,
                      moreButtonType: 'short',
                      popupDirection: 'auto',
                      shape: 'round',
                    }}
            />
          </YandexShareWrapper>
        </YandexShareContainer>
      </ContentContainer>
    </FooterWrapper>
  </>
);