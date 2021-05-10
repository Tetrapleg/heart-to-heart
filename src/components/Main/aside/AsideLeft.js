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
        В 2016 году несколько людей объединились и начали помогать бездомным животным. Так поочередно появились наши сообщества «Сердцем к сердцу» в соцсетях: <LinkHref href="https://ok.ru/group/53568865697985" target="_blank" rel="noreferrer">одноклассники</LinkHref>, <LinkHref href="https://vk.com/serdcem_k_serdcy_46" target="_blank" rel="noreferrer">ВКонтакте</LinkHref>, <LinkHref href="https://instagram.com/serdcem_k_serdcu46?igshid=1wu3d..." target="_blank" rel="noreferrer">инстаграм</LinkHref>.
      </TextItem>
    </AsideContentWrapper>
  </Aside>
);