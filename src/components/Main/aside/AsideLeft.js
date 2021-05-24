import styled from 'styled-components';
import { Aside } from '../layoutMainPageComponents/Aside';
import { TextItem } from '../../commonComponent/TextItem';
import { Title } from '../../commonComponent/Title';
import { DividingLine } from '../../commonComponent/DividingLine';
import { LinkHref } from '../../commonComponent/CustomLinks';

const AsideContentWrapper = styled.section`
  position: sticky;
  top: 3em;
`;

export const AsideLeft = () => (
  <Aside side="left">
    <AsideContentWrapper >
      <Title >Немного истории...</Title>
      <DividingLine />
      <TextItem >
      Николай Пашнин 3 дня Статья на сайте Госдумы Как закон защищает животных <LinkHref href="http://duma.gov.ru/news/51038/" target="_blank">Закон</LinkHref> в ней конкретная простая инструкция о привлечении живодеров к ответственности (начиная со слов "Если вы столкнулись с жестоким обращением с животными") призываю всех действовать по плану из статьи, это несложно и не отнимает много времени
      </TextItem>
    </AsideContentWrapper>
  </Aside>
);