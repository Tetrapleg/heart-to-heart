import { ContentWrapper } from '../../commonComponent/ContentWrapper';
import { DividingLine } from '../../commonComponent/DividingLine';
import { FooterTitle } from '../../commonComponent/FooterTitle';
import { LinkHref } from '../../commonComponent/CustomLinks';
import { TextItem } from '../../commonComponent/TextItem';
import { HeaderTitle } from '../../commonComponent/HeaderTitle';
import { ContentContainer } from '../../htmlContainer/ContentContainer';
import { FigureImg } from '../../commonComponent/FigureImg';
import { MessageWrapper } from '../../commonComponent/MessageWrapper';
import veterinaryImg from './../../../images/veterinary_img.jpg';


export const AnimalNeedOfVeterinary = () => (
  <ContentContainer >
    <ContentWrapper >
      <MessageWrapper >
        <HeaderTitle >Помните, что НИКТО не поможет сбитому машиной, раненному и другому больному животному лучше и быстрее, чем Вы – непосредственный очевидец и человек, которого судьба послала оказаться рядом с нуждающимся животным. </HeaderTitle>
        <HeaderTitle >ВНИМАНИЕ! Инструкция действий только по нашему городу!  </HeaderTitle>
        <DividingLine />
        <TextItem >
          Если вы – житель другого города, то в вашем городе также есть ветклиники и группы помощи бездомным животным, контакты которых можете найти в интернете.
        </TextItem>
        <TextItem >
          Животное необходимо как можно быстрее доставить в ветеринарную клинику. В городе Железногорске Курской области это ветклиники:
        </TextItem>
        <TextItem >
          🚑 <ins>«ЗООЦЕНТР»</ins><br/>
          ул. Горняков, д.28.<br/>
          Расписание приема:<br/>
          Пн-Вс - 9.00-19.00<br/>
          8-962-380-00-80
        </TextItem>
        <TextItem >
          🚑 <ins>"ВЕТЕРИНАРНАЯ КЛИНИКА ДОКТОРА НИКИТИНА"</ins><br/>
          🏥 г.Железногорск, ул.Молодежная, д.9.<br/>
          Расписание приема:<br/>
          Пн-Пт - 9.00-19.00<br/>
          Сб-Вс - 9.00-13.00<br/>
          ☎ 8 47148 5 41 80;<br/>
          📱 8 903 870 47 44;<br/> 
          8 920 730 42 42.
        </TextItem>
        <TextItem >
          🚑 <ins>ГУЧ "СТАНЦИЯ ПО БОРЬБЕ С БОЛЕЗНЯМИ ЖИВОТНЫХ"</ins><br/>
          🏥 ул. Болотная, д. 2<br/>
          Расписание приема:<br/>
          Пн-Вс с 8-00 до 20-00, без перерыва и выходных.<br/>
          ☎ 8 47148 2 54 20;<br/>
          8 47148 2 52 46.
        </TextItem>
        <TextItem >
          🚑 <ins>ВЕТЕРИНАРНЫЙ КАБИНЕТ "ВЕРНЫЙ ДРУГ"</ins><br/>
          🏥 ул. Мира, д.63/4<br/>
          Часы приема ветеринара Трохина Николая Александровича:<br/>
          Пн-Пт - 9.00-16.00<br/>
          Сб - 9.00-13.00.<br/>
          Вс выходной.<br/>
          📱 8 906 694 50 85;<br/>
          8 920 737 40 96.
        </TextItem>
        <TextItem >
          Наша организация «Сердцем к сердцу» сотрудничает со всеми ветклиниками города и оплата приема нуждающегося в помощи бездомного животного, всех медицинских манипуляций и операций производится за счет пожертвований неравнодушных граждан (вам по приезду в ветклинику платить не надо будет). Но для того, чтобы животное бесплатно приняли в ветклинике от нашей организации «Сердцем к сердцу» Вам нужно связаться Любовью по телефону 89513317199, либо написать в личные сообщения <LinkHref href="https://vk.com/im?media=&sel=-124002988" target="_blank" rel="noreferrer">нашей группы вконтакте</LinkHref>.  
        </TextItem>
        <FigureImg 
          fullSizeTypeFile="photo"
          fullSizeTypeName="/full_size_content/veterinary_img_fullsize.jpg"
          url={veterinaryImg}
          descr=""
          figureStyle={document.documentElement.clientWidth > 450 ? ["float: right;",
                      "margin: 1.5em;"] : ["margin: 0.5em auto;",
                      "width: fit-content;"]}
          bgImgStyle={document.documentElement.clientWidth > 360 ? ["width: 300px;",
                      "height: 200px;"] : [`width: ${document.documentElement.clientWidth - 60}px;`,
                      `height: ${(document.documentElement.clientWidth - 60) * 2 / 3}px;`]}
        />
        <TextItem >
          Учитывайте, что всегда остро стоит вопрос с передержками больных животных, и потому возможна ситуация, что после приема у ветврача, и даже после проведенной операции клиника может отказать в размещении в стационаре больного животного. Поэтому вопрос с передержкой на период лечения должна решаться Вами самостоятельно. Если не можете животное приютить у себя на время лечения, то ищете временное пристанище (передержку), спрашивайте у соседей, друзей, родственников . Наша организация же, со своей стороны, поможет всеми расходными материалами для найденной Вами передержки (лекарства, корма, обработки, амуниция и др.)
        </TextItem>
        <TextItem >
          Если у Вас возникли проблемы с транспортировкой, передержкой больного животного и т.д., сделайте фото животного и разместите пост в нашей <LinkHref href="https://vk.com/serdcem_k_serdcy_46" target="_blank" rel="noreferrer">группе «Сердцем к сердцу»</LinkHref>, но вполне возможно, что пока Вы будете заняты поиском людей, которые помогут животному вместо Вас, животное может уползти с места, спрятаться или погибнуть от травм или болезни.  
        </TextItem>
        <DividingLine />
        <FooterTitle >
        </FooterTitle>
      </MessageWrapper>
    </ContentWrapper>
  </ContentContainer>
);