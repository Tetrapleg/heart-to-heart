import { ContentWrapper } from '../../commonComponent/ContentWrapper';
import { DividingLine } from '../../commonComponent/DividingLine';
import { TextItem } from '../../commonComponent/TextItem';
import { HeaderTitle } from '../../commonComponent/HeaderTitle';
import { ContentContainer } from '../../htmlContainer/ContentContainer';
import { FigureImg } from '../../commonComponent/FigureImg';
import { MessageWrapper } from '../../commonComponent/MessageWrapper';
import helpImg from './../../../images/help_img.jpg';
import helpImg1 from './../../../images/help_img1.jpg';


export const HelpForAnimals = () => (
  <ContentContainer >
    <ContentWrapper >
      <MessageWrapper >
        <HeaderTitle >КАКУЮ ПОМОЩЬ МОЖНО ОКАЗАТЬ БЕЗДОМНЫМ ЖИВОТНЫМ</HeaderTitle>
        <HeaderTitle >1. Пиар бездомных животных.</HeaderTitle>
        <DividingLine />
        <TextItem >
          Так как цель – найти кошкам и собакам новый дом, вы можете распространить информацию о приглянувшейся Вам кошке или собаке в интернете, социальных сетях, в блогах. 
        </TextItem>
        <HeaderTitle >2. Бесплатные передержки животных (передержки за «расходные материалы» (корм/наполнитель/лекарства).</HeaderTitle>
        <DividingLine />
        <TextItem />
        <FigureImg 
          fullSizeTypeFile="photo"
          fullSizeTypeName="/full_size_content/help_img_fullsize.jpg"
          url={helpImg}
          descr=""
          figureStyle={document.documentElement.clientWidth > 450 ? ["float: left;",
                      "margin: 1.5em;"] : ["margin: 0.5em auto;",
                      "width: fit-content;"]}
          bgImgStyle={document.documentElement.clientWidth > 360 ? ["width: 300px;",
                      "height: 200px;"] : [`width: ${document.documentElement.clientWidth - 60}px;`,
                      `height: ${(document.documentElement.clientWidth - 60) * 2 / 3}px;`]}
        />
        <TextItem >
          Бездомных животных необходимо передерживать на период лечения, либо до пристройства. Но им часто не хватает мест на передержках. Вы поможете? Алгоритм действия такой: Вы обозначаете, какую кошку или собаку хотели бы временно приютить. И животное переселяется к вам.  Затраты на лечение, корм, обработки, стерилизацию, вакцинацию несет наша организация.
        </TextItem>    
        <HeaderTitle >3. Помощь «руками» и «ногами».</HeaderTitle>
        <DividingLine />
        <TextItem >
          Волонтеров не так много, поэтому остро стоит вопрос в помощи, что называется, «руками и ногами», когда необходимо выделить время и отнести животное на прием к ветеринару или помочь найти, отловить животное. У нас в ленте часто мелькают посты с просьбой о подобной помощи.
        </TextItem>
        <HeaderTitle >4. Транспорт.</HeaderTitle>
        <DividingLine />
        <TextItem >
          Часто возникает потребность перевезти кошку или собаку из пункта А в пункт Б. Не всегда такси на это соглашаются или выставляют большой ценник. В таком случае вы можете помочь, перевезя животное безвозмездно, за оплату потраченного бензина.
        </TextItem>
        <HeaderTitle >5. Фотографирование животных.</HeaderTitle>
        <DividingLine />
        <TextItem >
          У вас имеется хороший фотоаппарат? Вы любите животных? Тогда у вас есть замечательная возможность в разы увеличить шансы бездомных животных на пристройство в семью. Хорошее фото – лучший шанс найти дом!
        </TextItem>
        <FigureImg 
          fullSizeTypeFile="photo"
          fullSizeTypeName="/full_size_content/help_img1_fullsize.jpg"
          url={helpImg1}
          descr=""
          figureStyle={document.documentElement.clientWidth > 450 ? ["float: right;",
                      "margin: 1.5em;"] : ["margin: 0.5em auto;",
                      "width: fit-content;"]}
          bgImgStyle={document.documentElement.clientWidth > 360 ? ["width: 300px;",
                      "height: 200px;"] : [`width: ${document.documentElement.clientWidth - 60}px;`,
                      `height: ${(document.documentElement.clientWidth - 60) * 2 / 3}px;`]}
        />
        <HeaderTitle >6. Реклама и дизайн.</HeaderTitle>
        <DividingLine />
        <TextItem >
          Если вы можете взять на себя разработку листовок, написание и размещение новостей в соцсетях, а также что-то придумать и порекомендовать (и осуществить это), мы будем очень рады видеть вас в нашей команде!
        </TextItem>
        <HeaderTitle >7. Материальная помощь.</HeaderTitle>
        <DividingLine />
        <TextItem >
          Постоянно необходимы для бездомных животных на передержках:
        </TextItem>
        <TextItem >
          ● Корма для собак и кошек (сухие корма, консервы, паучи, крупы, макароны и др.)
        </TextItem>
        <TextItem >
          ● Одноразовые впитывающие пеленки
        </TextItem>
        <TextItem >
          ● Ветеринарные препараты (средства для обработки от глистов, от блох и клещей, витамины, различные лекарства, шприцы, бинты и др.)
        </TextItem>
        <TextItem >
          ● Дезинфицирующие средства (Аламинол, Лайна)
        </TextItem>
        <TextItem >
          ● Инвентарь (миски, контейнеры для корма, лотки, клетки для собак и кошек, переноски, манежи, лежанки и др.)
        </TextItem>
        <TextItem >
          ● Амуниция (поводки (особенно 3-5 метровые брезентовые), ошейники, намордники, рулетки, шлейки и др.)
        </TextItem>
        <TextItem >
          ● Наполнитель для кошачьих лотков
        </TextItem>
        <TextItem >
          ● Будки, солома (для утепления уличных будок)
        </TextItem>
        <TextItem >
          ● Пледы, одеяла, полотенца (можно ветхие, неглаженные, но чистые)
        </TextItem>
        <HeaderTitle >8. Финансовая помощь.</HeaderTitle>
        <DividingLine />
        <TextItem >
          Мы не разделяем пожертвования на большие и маленькие, нам важны любые суммы, и даже 50 рублей могут сыграть решающую роль, когда нечем оплатить консультацию заболевшей кошки или собаки у ветеринара, купить лекарство.
        </TextItem>
        <TextItem >
          Ваши добровольные пожертвования ежедневно спасают кому-то жизнь, помогают лечить, кормить, а в итоге найти новый дом!
        </TextItem>
        <HeaderTitle >Наши РЕКВИЗИТЫ для ПОМОЩИ ЖИВОТНЫМ:</HeaderTitle>
        <DividingLine />
        <TextItem >
          Номер действующей карты Сбербанка -
        </TextItem>
        <TextItem >
          💳 5336 6901 6716 6869 Алевтина Александровна П.
        </TextItem>
        <TextItem >
          🥝 Киви кошелек: 9513131308
        </TextItem>
        <TextItem >
          💰 Яндекс кошелек: 4100110452100757
        </TextItem>
        <HeaderTitle >
          ЖМОЗОКО "Сердцем к сердцу"
        </HeaderTitle>
        <DividingLine />
        <TextItem >
          ИНН 4633039531
        </TextItem>
        <TextItem >
          КПП 463301001
        </TextItem>
        <TextItem >
          ОГРН/ОГРНИП 1174600000673
        </TextItem>
        <TextItem >
          Расчётный счёт 40703.810.0.33000000249
        </TextItem>
        <TextItem >
          БИК 043807606
        </TextItem>
        <TextItem >
          Банк КУРСКОЕ ОТДЕЛЕНИЕ N8596 ПАО СБЕРБАНК
        </TextItem>
        <TextItem >
          Корр. счёт 30101.810.3.00000000606
        </TextItem>
        <DividingLine />
      </MessageWrapper>
    </ContentWrapper>
  </ContentContainer>
);