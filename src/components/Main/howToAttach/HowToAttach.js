import { ContentWrapper } from '../../commonComponent/ContentWrapper';
import { DividingLine } from '../../commonComponent/DividingLine';
import { FooterTitle } from '../../commonComponent/FooterTitle';
import { LinkHref } from '../../commonComponent/CustomLinks';
import { TextItem } from '../../commonComponent/TextItem';
import { HeaderTitle } from '../../commonComponent/HeaderTitle';
import { ContentContainer } from '../../htmlContainer/ContentContainer';
import { FigureImg } from '../../commonComponent/FigureImg';
import { MessageWrapper } from '../../commonComponent/MessageWrapper';
import attachImg from './../../../images/attach_img.jpg';
import attachImg1 from './../../../images/attach_img1.jpg';
import attachImg2 from './../../../images/attach_img2.jpg';
import attachImg3 from './../../../images/attach_img3.jpg';


export const HowToAttach = () => (
  <ContentContainer >
    <ContentWrapper >
      <MessageWrapper >
        <HeaderTitle >Вы нашли на улице бездомную кошку или собаку, щенка или котенка. Что делать?</HeaderTitle>
        <DividingLine />
        <TextItem >
          Многие скажут: «В приют!» и будут неправы. Приютов в нашем городе нет, а там, где они есть – переполнены и в них зачастую объявляются карантины в связи с инфекционными заболеваниями среди животных (так всегда бывает в местах большого скопления животных). Попасть в приют щенку или котенку - это верная гибель, т.к. по возрасту они имеют слабый иммунитет и не привиты.
        </TextItem>
        <FigureImg 
          fullSizeTypeFile="photo"
          fullSizeTypeName="/full_size_content/attach_img_fullsize.jpg"
          url={attachImg}
          descr=""
          figureStyle={document.documentElement.clientWidth > 450 ? ["float: left;",
                      "margin: 1.5em;"] : ["margin: 0.5em auto;",
                      "width: fit-content;"]}
          bgImgStyle={document.documentElement.clientWidth > 360 ? ["width: 300px;",
                      "height: 200px;"] : [`width: ${document.documentElement.clientWidth - 60}px;`,
                      `height: ${(document.documentElement.clientWidth - 60) * 2 / 3}px;`]}
        />
        <TextItem >
          Если вы нашли бездомное животное, пожалуйста, верьте в себя, ведь именно вы можете найти ему хозяина, если действительно хотите помочь!
        </TextItem>
        <TextItem >
          Первое, что нужно сделать, чтобы на ваше животное обратили внимание – это красивые фото. Да, поймать удачный кадр очень нелегко, животные не сидят на месте, крутятся и бегают. Но именно от хорошего фото зависит успех в поиске дома. Потому что, каким бы ни было красивым животное, если фотография не сможет передать этой красоты, но никто ее и не увидит.
        </TextItem>
        <TextItem >
          Если животное чистое, ухоженное, сидит в кресле или на зеленой траве, а фотографии четкие и яркие – шансы на пристройство увеличатся в разы.
        </TextItem>
        <TextItem >
          Также вам нужно написать текст объявления. Оно может быть трогательным или с юмором, но обязательно должно отражать реальное положение дел: возраст (хотя бы примерно), пол, характер, информацию о проведенных обработках, приучен ли к лотку, если это кот/кошка, приучена ли к поводку и выгулу, если это собака. Описание не стоит делать длинным, но постарайтесь сделать интересным и информативным. Обязательно укажите в объявлении свой контактный телефон.
        </TextItem>
        <TextItem >
          Объявления на пристройство животное нужно разместить во всех известных вам подходящих сообществах города, а также в интернет-сервисах для объявлений - <LinkHref href="https://www.avito.ru/" target="_blank" rel="noreferrer">"Авито"</LinkHref>, <LinkHref href="https://kirov.irr.ru/" target="_blank" rel="noreferrer">"Из рук в руки"</LinkHref>, <LinkHref href="https://youla.ru/" target="_blank" rel="noreferrer">"Юла"</LinkHref>. Сделайте интересный пост о пристройстве на своей страничке и попросите друзей сделать репосты.
        </TextItem>
        <TextItem >
          Также поспрашивайте своих друзей, знакомых, коллег, возможно, кому-то приглянется животное.
        </TextItem>
        <HeaderTitle >Подходите ответственно к выбору хозяев, тщательно отбирая претендентов.</HeaderTitle>
        <DividingLine />
        <TextItem >
          К сожалению, не все люди в наше время берут бездомных животных с благими намерениями. Если человек ничего не спрашивает о животном, готов сразу приехать и забрать (а то и несколько штук) – это, как минимум, странно! Не думайте, что вам в таком случае несказанно повезло. Опыт других людей, пристраивающих животных не один год, показывает, что чудес мало, а вот злых и жестоких людей, прикидывающихся божьими одуванчиками, предостаточно.
        </TextItem>
        <FigureImg 
          fullSizeTypeFile="photo"
          fullSizeTypeName="/full_size_content/attach_img1_fullsize.jpg"
          url={attachImg1}
          descr=""
          figureStyle={document.documentElement.clientWidth > 450 ? ["float: right;",
                      "margin: 1.5em;"] : ["margin: 0.5em auto;",
                      "width: fit-content;"]}
          bgImgStyle={document.documentElement.clientWidth > 360 ? ["width: 300px;",
                      "height: 191px;"] : [`width: ${document.documentElement.clientWidth - 60}px;`,
                      `height: ${(document.documentElement.clientWidth - 60) * 1.91 / 3}px;`]}
        />
        <TextItem >
          Небольшая статистика. Из 100% звонивших вас не устроят 30%. Две трети позвонивших и пообещавших прийти на смотрины, до вас не дойдут. И не позвонят, чтобы предупредить, что передумали. Не переживайте – это в порядке вещей. Даже если встреча состоится – далеко не факт, что потенциальные хозяева возьмут животное именно у вас. Некоторые предпочитают поездить – повыбирать, это их право.
        </TextItem>
        <TextItem >
          Абсолютное большинство отсеивается ещё на этапе телефонных переговоров. Запомните: грамотно выстроенная беседа даст вам некоторое представление о семье и условиях, в которых предстоит жить животному.
        </TextItem>
        <TextItem >
          Будьте внимательны и не бойтесь задавать вопросы будущему хозяину. Но помните, что никто не идеален. Но и если ждать идеального хозяина, животное будет сидеть на передержке вечно. Поэтому определите для себя, какие условия для вас и вашего подопечного обязательны, а какие - приемлемы и допустимы.
        </TextItem>
        <HeaderTitle >Примерный список вопросов, которые следует задать претендентам на роль хозяина:</HeaderTitle>
        <DividingLine />
        <TextItem >
          ● Вы живете в доме, своей квартире, или съемной?
        </TextItem>
        <TextItem >
          ● Что будет с животным, если хозяин, сдающий вам квартиру, обнаружит его в квартире?
        </TextItem>
        <TextItem >
          ● Что будет с животным, если вас попросят освободить арендуемую квартиру?
        </TextItem>
        <TextItem >
          ● Что вы подразумеваете под домом? Это частный дом, где вы живете круглый год, или дача, где вы живете только летом?
        </TextItem>
        <FigureImg 
          fullSizeTypeFile="photo"
          fullSizeTypeName="/full_size_content/attach_img2_fullsize.jpg"
          url={attachImg2}
          descr=""
          figureStyle={document.documentElement.clientWidth > 450 ? ["float: left;",
                      "margin: 1.5em;"] : ["margin: 0.5em auto;",
                      "width: fit-content;"]}
          bgImgStyle={document.documentElement.clientWidth > 360 ? ["width: 300px;",
                      "height: 200px;"] : [`width: ${document.documentElement.clientWidth - 60}px;`,
                      `height: ${(document.documentElement.clientWidth - 60) * 2 / 3}px;`]}
        />
        <TextItem >
          ● Где будет содержаться собака – в доме или вольере? На цепи? Конура есть?
        </TextItem>
        <TextItem >
          ● Не против ли члены семьи, что вы заводите питомца? Они вообще в курсе? Не страдает ли кто-нибудь из домочадцев аллергией на домашних животных?
        </TextItem>
        <TextItem >
          ● Сколько вам лет (если голос звучит слишком молодо или слишком старо. Ребенка не пустят домой с котенком. Животное может пережить старого человека и оказаться на улице).
        </TextItem>
        <TextItem >
          ● Есть ли у вас дети? Какого они возраста? (2-летнему ребенку сложно объяснить, что котенку нельзя отрывать лапки, и таскать его за ухо. Однако не все дети относятся к котятам неосторожно).
        </TextItem>
        <TextItem >
          ● Есть ли на окнах сетки?
        </TextItem>
        <TextItem >
          ● Чем собираетесь кормить?
        </TextItem>
        <TextItem >
          ● Были ли у вас когда-нибудь кошки (собаки)?
        </TextItem>
        <TextItem >
          ● Что случилось с последним животным, которое у вас было?
        </TextItem>
        <TextItem >
          ● Если последнее животное – это умерший от неизвестной напасти котенок: Сколько времени прошло с тех пор?
        </TextItem>
        <TextItem >
          Не забывайте о том, что пристрой - это подбор не только человека для животного, но и животного для человека. Если кот привык метить и орет под дверью, частный дом с выгулом станет для него лучшим вариантом. Не стоит искать для него квартиру: он там просто не приживется.
        </TextItem>
        <TextItem >
          Не стоит отдавать животное детям или подросткам, даже если они очень хотят животное, требуйте, чтобы вам позвонил родитель. 
        </TextItem>
        <TextItem >
          Не отдавайте животных в подарок. Как вариант, предложите дарителю прийти на смотрины вместе с одариваемым. Животное должно быть обязательно желанным и долгожданным!
        </TextItem>
        <FigureImg 
          fullSizeTypeFile="photo"
          fullSizeTypeName="/full_size_content/attach_img3_fullsize.jpg"
          url={attachImg3}
          descr=""
          figureStyle={document.documentElement.clientWidth > 450 ? ["float: right;",
                      "margin: 1.5em;"] : ["margin: 0.5em auto;",
                      "width: fit-content;"]}
          bgImgStyle={document.documentElement.clientWidth > 360 ? ["width: 300px;",
                      "height: 200px;"] : [`width: ${document.documentElement.clientWidth - 60}px;`,
                      `height: ${(document.documentElement.clientWidth - 60) * 2 / 3}px;`]}
        />
        <TextItem >
          Обязательно спрашивайте, куда хотят забрать животное, в квартиру или в деревню/на дачу. И если в деревню - живет ли там кто-то постоянно? Многие заводят животное лишь на летней период, а с окончанием дачного сезона бросают там «авось выживет». Нет, не выживет!
        </TextItem>
        <TextItem >
          У пожилых людей не стесняйтесь интересоваться - есть ли родственники, готовые взять на себя уход за животным, если с хозяином что-нибудь случится и придется лечь в больницу. Минута неловкости стоит того, чтобы подстраховаться от выбрасывания кошки любящими внуками после смерти бабушки. А такое частенько бывает…
        </TextItem>
        <TextItem >
          У молодых, не семейных, или только готовящихся завести семью и ребёнка поинтересуйтесь - как решится судьба животного в случае появления у новорожденного аллергии, в случае брака или развода.
        </TextItem>
        <TextItem >
          Не забудьте просматривайте <LinkHref href="https://vk.com/topic-124002988_34189601?offset=0" target="_blank" rel="noreferrer">черный список</LinkHref> (кому не стоит отдавать животных – если живете в нашем городе).
        </TextItem>
        <DividingLine />
        <FooterTitle >
          И слушайте свой собственный голос. Если чувствуете какую-то неловкость, что что-то не так – лучше откажите и не отдавайте.
        </FooterTitle>
      </MessageWrapper>
    </ContentWrapper>
  </ContentContainer>
);