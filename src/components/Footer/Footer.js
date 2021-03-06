import styled from 'styled-components';
import YandexShare from 'react-yandex-share';
import { ContentContainer } from '../htmlContainer/ContentContainer';
import { useDispatch } from 'react-redux';
import { setFullSizePDF } from '../../reducers/displayingFullSizeContentReducer';

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

const FooterDescrWrapper = styled.div`
  width: 100%;
  padding-top: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 450px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const OfferLink = styled(YandexShareTitle)`
  font-size: 1em;
  font-weight: 300;
  cursor: pointer;
  
  @media (max-width: 450px) {
    padding-top: 0.5em;
  }
`;

const EmailLink = styled(YandexShareTitle)`
  font-size: 1em;
  font-weight: 300;
  padding-left: 1em;
  line-height: 1.5em;

  & span {
    display: block;
    padding-left: 5.5em;
  }
  
  @media (max-width: 450px) {
    padding-top: 0.5em;
    padding-left: 0;
  }
`;

export const Footer = () => {
  const dispatch = useDispatch();

  return (
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
          <FooterDescrWrapper >
            <OfferLink 
              onClick={() => dispatch(setFullSizePDF("offer_fullsize.pdf"))}
            >Договор публичной оферты</OfferLink>
            <EmailLink >Наш e-mail: serdcemkserdcy@yandex.ru,<span>Zhmozoko@mail.ru</span></EmailLink>
          </FooterDescrWrapper>
        </ContentContainer>
      </FooterWrapper>
    </>
  )
};