import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faYandex, faOdnoklassniki, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { SocialLink } from './SocialLink';
import instagramIcon from '../../images/instagram.svg';

const SocialMenuWrapper = styled.nav`
  margin-top: 1.5em;
  margin-bottom: auto;
  width: fit-content;
  & ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 1em;
    & li {
      height: 2.2em;
      width: 2.2em;
      background-color: rgba(255,255,255,0.2);
      border-radius: 50%;
      transition: all .2s;
      &:hover{
        background-color: rgba(255,255,255,0.7);
      }
    }
    & li + li {
      margin-left: 0.7em;
    }
  }

  @media (max-width: 380px) {
    & ul {
      margin-right: 0.3em;
      & li + li {
        margin-left: 0.3em;
      }
    }
  }
`;

const InstagramImg = styled.img`
  height: 1.5em;
`;

export const SocialMenu = () => (
  <SocialMenuWrapper>
    <ul>
      <li>
        <SocialLink
          color='rgb(77,180,254)'
          href='https://vk.com/serdcem_k_serdcy_46'
        >
          <FontAwesomeIcon icon={faVk} size="lg" fixedWidth />
        </SocialLink>
      </li>
      <li>
        <SocialLink
          color='rgb(255,0,0)'
          href='https://zen.yandex.ru/id/605721184b415e622e1e6092'
        >
          <FontAwesomeIcon icon={faYandex} size="lg" fixedWidth />
        </SocialLink>
      </li>
      <li>
        <SocialLink
          color='rgb(238,130,8)'
          href='https://ok.ru/serdtsem'
        >
          <FontAwesomeIcon icon={faOdnoklassniki} size="lg" fixedWidth />
        </SocialLink>
      </li>
      <li>
        <SocialLink
          href='https://www.instagram.com/p/CKmYoCZhYWd/'
        >
          <InstagramImg src={instagramIcon} alt="instagram" />
        </SocialLink>
      </li>
      <li>
        <SocialLink
          color='rgb(255,0,0)'
          href='https://www.youtube.com/channel/UCafm7Mt8Kf0I3BY4g9d44xA/videos?disable_polymer=1'
        >
          <FontAwesomeIcon icon={faYoutube} size="lg" fixedWidth />
        </SocialLink>
      </li>
    </ul>
  </SocialMenuWrapper>
)