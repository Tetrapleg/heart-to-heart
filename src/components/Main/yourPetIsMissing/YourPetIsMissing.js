import { ContentWrapper } from '../../commonComponent/ContentWrapper';
import { DividingLine } from '../../commonComponent/DividingLine';
import { TextItem } from '../../commonComponent/TextItem';
import { HeaderTitle } from '../../commonComponent/HeaderTitle';
import { ContentContainer } from '../../htmlContainer/ContentContainer';
import { FigureImg } from '../../commonComponent/FigureImg';
import { MessageWrapper } from '../../commonComponent/MessageWrapper';
import missImg from './../../../images/missing.jpg';
import missImg1 from './../../../images/missing1.jpg';
import { FooterTitle } from '../../commonComponent/FooterTitle';


export const YourPetIsMissing = () => (
  <ContentContainer >
    <ContentWrapper >
      <MessageWrapper >
        <HeaderTitle >Пропал Ваш домашний любимец. Что делать?</HeaderTitle>
        <TextItem >
          Собаки и кошки теряются довольно часто. Из-за любопытства отстают на прогулке, незаметно выбегают за дверь или даже спрыгивают с балконов, пугаются салютов, петард и дают дёру.
        </TextItem>
        <HeaderTitle >
          1) При потере кошки первым делом нужно проверить подъезды на всех этажах, подвал, чердак в вашем и соседних домах.          
        </HeaderTitle>
        <DividingLine />
        <TextItem >
          Чаще всего животные находятся именно там, даже спустя несколько недель. Проверять нужно регулярно, по возможности два раза в сутки. Чтобы осмотреть подвалы и чердаки, нужно взять ключи в управляющей компании.
        </TextItem>
        <TextItem >
          Во время поисков нужно ласково, но достаточно громко звать животное по имени и прислушиваться: мяуканье в ответ может быть тихим. Можно взять с собой его любимые лакомства: если питомец проголодался, он выйдет на шуршание упаковки и запах. Пригодится хороший фонарик — в полумраке или темноте притаившуюся кошку можно не заметить.
        </TextItem>
        <HeaderTitle >2) При потере собаки нужно проверить места выгула.</HeaderTitle>
        <DividingLine />
        <TextItem />
        <FigureImg 
          fullSizeTypeFile="photo"
          fullSizeTypeName="/full_size_content/missing_fullsize.jpg"
          url={missImg}
          descr=""
          figureStyle={document.documentElement.clientWidth > 450 ? ["float: left;",
                      "margin: 1.5em;"] : ["margin: 0.5em auto;",
                      "width: fit-content;"]}
          bgImgStyle={document.documentElement.clientWidth > 360 ? ["width: 300px;",
                      "height: 177px;"] : [`width: ${document.documentElement.clientWidth - 60}px;`,
                      `height: ${(document.documentElement.clientWidth - 60) * 2 / 3}px;`]}
        />
        <TextItem >
          Если кошки крайне редко покидают знакомую территорию и при испуге часто залезают в близлежащие подвалы и на деревья, то потерявшиеся собаки могут убежать на несколько километров или даже попасть на другой конец города, иногда с помощью общественного транспорта.
        </TextItem>    
        <TextItem >
          При поиске собаки нужно проверить ближайшие места выгула и территории, где могут быть другие собаки. Стоит предупредить знакомых владельцев собак, что питомец потерялся. Если они узнают, как он выглядит, то помогут в поисках.
        </TextItem>    
        <HeaderTitle >3) Распространить информацию о потере животного.</HeaderTitle>
        <DividingLine />
        <TextItem >
          Можно разместить объявления о пропаже в интернете во всех знакомых вам группах вашего города. Но более результативное –как можно быстрее распечатать бумажные объявления, лучше в цвете, и расклеить их на подъездах, автобусных остановках и рядом с магазинами в микрорайоне пропажи, особенно много – на вашем и соседних домах. Используйте файлы для бумаги — они помогут защитить объявление от плохой погоды. Также стоит предупредить о пропаже продавцов, дворников и жителей дворов. Опросите местных бабулек, они могли заметить, что кто-то забирал с улицы вашего питомца
        </TextItem>
        <HeaderTitle >
          4) Если в вашем населенном пункте выпускают местную газету, то можно подать туда объявление о пропаже.
        </HeaderTitle>
        <DividingLine />
        <TextItem />
        <FigureImg 
          fullSizeTypeFile="photo"
          fullSizeTypeName="/full_size_content/missing1_fullsize.jpg"
          url={missImg1}
          descr=""
          figureStyle={document.documentElement.clientWidth > 450 ? ["float: right;",
                      "margin: 1.5em;"] : ["margin: 0.5em auto;",
                      "width: fit-content;"]}
          bgImgStyle={document.documentElement.clientWidth > 360 ? ["width: 300px;",
                      "height: 200px;"] : [`width: ${document.documentElement.clientWidth - 60}px;`,
                      `height: ${(document.documentElement.clientWidth - 60) * 2 / 3}px;`]}
        />
        <TextItem >
          Чтобы не рисковать, лучше заранее купить адресник, чтобы люди, нашедшие ваше животное, могли с вами связаться. Они могут быть сделаны в виде закручивающейся капсулы, в которую влезет скрученная записка или жетона, на котором можно сделать гравировку. Такой кулон прикрепляют к ошейнику питомца. Продаются во всех зоомагазинах.
        </TextItem>
        <TextItem >
          Также в последнее время очень популярны GPS-трекеры для животных, которые по технологии маячка помогают отследить местоположение питомца с точностью до нескольких метров. Их крепят на ошейник и надевают перед прогулкой, заряжают при необходимости. Увидеть локацию питомца можно в приложении для смартфона, планшета или компьютера.
        </TextItem>
        <DividingLine />
        <FooterTitle >
          И напоминаем лишний раз любителям отпускать своих питомцев на самовыгул, что такой способ выгуливания животного рано или поздно приведет к беде, и довольно часто – с летальным исходом.
        </FooterTitle>
        <FooterTitle >
          Мы в ответе за тех, кого приручили!
        </FooterTitle>
      </MessageWrapper>
    </ContentWrapper>
  </ContentContainer>
);