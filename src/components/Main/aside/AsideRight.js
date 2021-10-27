import { LinkHref } from '../../commonComponent/CustomLinks';
import { DividingLine } from '../../commonComponent/DividingLine';
import { TextItem } from '../../commonComponent/TextItem';
import { HeaderTitle } from '../../commonComponent/HeaderTitle';
import { Aside } from '../layoutMainPageComponents/Aside';
import { AsideMessageWrapper } from './AsideLeft';
import { FigureImg } from '../../commonComponent/FigureImg';
import beforeAndAfter from './../../../images/beforeAndAfter.jpg';

export const AsideRight = ({ ...props }) => (
  <Aside 
    side="right"
    {...props}
  >
    <AsideMessageWrapper >
      <HeaderTitle >Защита животных</HeaderTitle>
      <DividingLine />
      <TextItem >
        На сайте Госдумы размещена статья <LinkHref href="http://duma.gov.ru/news/51038/" target="_blank">"Как закон защищает животных"</LinkHref>, в ней конкретная простая инструкция о привлечении живодеров к ответственности (начиная со слов "Если вы столкнулись с жестоким обращением с животными"), призываем всех действовать по плану из статьи, это несложно и не отнимает много времени.
      </TextItem>
    </AsideMessageWrapper>
    <AsideMessageWrapper >
      <HeaderTitle >Фото " До и После"</HeaderTitle>
      <DividingLine />
      <FigureImg 
          fullSizeTypeFile="photoalbum"
          fullSizeTypeName="262478770"
          url={beforeAndAfter}
          descr=""
          figureStyle={["margin: 0.2em;"]}
          bgImgStyle={["width: 200px;",
                      "height: 132px;"]}
        />
    </AsideMessageWrapper>
    <AsideMessageWrapper >
      <HeaderTitle >Немного истории...</HeaderTitle>
      <DividingLine />
      <TextItem >
        В 2016 году несколько людей объединились и начали помогать бездомным животным. Так поочередно появились наши сообщества «Сердцем к сердцу» в соцсетях: <LinkHref href="https://ok.ru/group/53568865697985" target="_blank" rel="noreferrer">одноклассники</LinkHref>, <LinkHref href="https://vk.com/serdcem_k_serdcy_46" target="_blank" rel="noreferrer">ВКонтакте</LinkHref>, <LinkHref href="https://instagram.com/serdcem_k_serdcu46?igshid=1wu3d..." target="_blank" rel="noreferrer">инстаграм</LinkHref>.
      </TextItem>
    </AsideMessageWrapper>
  </Aside>
);