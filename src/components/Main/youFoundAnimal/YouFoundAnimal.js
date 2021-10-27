import { ContentWrapper } from '../../commonComponent/ContentWrapper';
import { DividingLine } from '../../commonComponent/DividingLine';
import { FooterTitle } from '../../commonComponent/FooterTitle';
import { LinkTo, LinkHref } from '../../commonComponent/CustomLinks';
import { TextItem } from '../../commonComponent/TextItem';
import { HeaderTitle } from '../../commonComponent/HeaderTitle';
import { ContentContainer } from '../../htmlContainer/ContentContainer';
import { FigureImg } from '../../commonComponent/FigureImg';
import { MessageWrapper } from '../../commonComponent/MessageWrapper';
import foundImg from './../../../images/found_img.jpg';
import foundImg1 from './../../../images/found_img1.jpg';


export const YouFoundAnimal = () => (
  <ContentContainer >
    <ContentWrapper >
      <MessageWrapper >
        <HeaderTitle >
          Итак, вы нашли на улице собаку или кошку и хотите им помочь. В первую очередь, нужно обратить внимание на поведение животного и внешний вид.
        </HeaderTitle>
        <HeaderTitle >Если животное чистое, упитанное или явно домашнее.</HeaderTitle>
        <DividingLine />
        <TextItem >
          Если животное чистое, опрятное, то, возможно, оно на самовыгуле. Да, такое случаетсяв виду безответственности некоторых хозяев. Если на животном есть ошейник с адресником/"пулей", то проверьте их на наличие номера телефона ("пуля" раскручивается и внутри может находиться информация о владельце). Иногда номер телефона может быть указан на внутренней стороне ошейника. Тогда вы могли бы позвонить по номеру телефона и уточнить, убежало ли животное и придержать его до приезда хозяев.
        </TextItem>
        <FigureImg 
          fullSizeTypeFile="photo"
          fullSizeTypeName="/full_size_content/found_img_fullsize.jpg"
          url={foundImg}
          descr=""
          figureStyle={document.documentElement.clientWidth > 450 ? ["float: left;",
                      "margin: 1.5em;"] : ["margin: 0.5em auto;",
                      "width: fit-content;"]}
          bgImgStyle={document.documentElement.clientWidth > 360 ? ["width: 300px;",
                      "height: 200px;"] : [`width: ${document.documentElement.clientWidth - 60}px;`,
                      `height: ${(document.documentElement.clientWidth - 60) * 2 / 3}px;`]}
        />
        <TextItem >
          Если вы пришли к выводу, что животное явно потеряшка, сфотографируйте его и разместите во всех местных группах, которые знаете, например, <LinkHref href="https://vk.com/serdcem_k_serdcy_46" target="_blank" rel="noreferrer">в группе «Сердцем к сердцу».</LinkHref>
        </TextItem>
        <TextItem >
          Пока ведутся поиски прежних хозяев, животное (особенно собака) может убежать из той части города, где видели его вы, и было бы правильно взять его на передержку на период поиска прежних хозяев. Как показывает практика, если хозяева есть – они находятся в течение пары-тройки дней.
        </TextItem>
        <TextItem >
          Если животное породное, необходимо поискать у него татуировку-клеймо (в паху или на ухе). Если клеймо нашли – введите в поисковике любого браузера (Google, Yandex и др.) слово «клеймо» и код с татуировки. Результатом поиска должен быть конкретный питомник или клуб за которым РКФ закрепила этот код. Потом нужно связаться с владельцем этого питомника или клуба, который поднимет свои племенные книги и договоры купли-продажи животных, сможет найти владельца животного.
        </TextItem>
        <TextItem >
          Подготовьте и расклейте объявления о найденном животном с его фото и вашим контактным номером в том районе, где нашли животное. Возможно владельцы – пожилые и не пользуются социальными сетями.
        </TextItem>
        <TextItem >
          Если у животного есть особые приметы или клеймо – не указывайте их в объявлении. Настоящий хозяин должен сам их назвать. И показать вам фото своего питомца до потери.
        </TextItem>
        <TextItem >
          Если вы нигде не видите объявлений о пропаже найденного вами животного, это не значит,  что его не любят и не ищут! Не все являются подписчиками интернет-сообществ и не все, кто с ними знаком – знают в каких именно нужно искать/выставлять объявления! Хозяин может элементарно не знать, как искать и вечерами бегает по району и зовет своего питомца, не развешивая объявлений о пропаже.
        </TextItem>
        <TextItem >
          И помните, что если вы не нашли прежних хозяев, но держать животное у себя больше не можете и нашли ему новых владельцев, <b>обязательно</b> отдавайте с оговоркой, что если найдется прежний хозяин – животное придется вернуть.
        </TextItem>
        <HeaderTitle >Если животное бездомное, но вы хотите ему помочь.</HeaderTitle>
        <DividingLine />
        <TextItem >
          Помочь уличному животному, если оно не нуждается в неотложной ветеринарной помощи (если нуждается – <LinkTo to="/you_find_an_animal_in_need_of_veterinary_care">вам сюда</LinkTo>) можно только найдя ему хороших хозяев! А осуществить это можно только, если вы готовы взять его к себе на период поиска хорошего дома.
        </TextItem>
        <FigureImg 
          fullSizeTypeFile="photo"
          fullSizeTypeName="/full_size_content/found_img1_fullsize.jpg"
          url={foundImg1}
          descr=""
          figureStyle={document.documentElement.clientWidth > 450 ? ["float: right;",
                      "margin: 1.5em;"] : ["margin: 0.5em auto;",
                      "width: fit-content;"]}
          bgImgStyle={document.documentElement.clientWidth > 360 ? ["width: 300px;",
                      "height: 177px;"] : [`width: ${document.documentElement.clientWidth - 60}px;`,
                      `height: ${(document.documentElement.clientWidth - 60) * 1.77 / 3}px;`]}
        />
        <TextItem >
          Если это собака – посмотрите, имеется ли на ухе бирка. При желании, по форме и номеру бирки можно узнать организацию, которая стерилизовала эту собаку, а так же узнать дату вакцинации, а возможно, даже историю этой собаки. Для этого достаточно разместить пост <LinkHref href="https://vk.com/serdcem_k_serdcy_46" target="_blank" rel="noreferrer">в группе «Сердцем к сердцу».</LinkHref>
        </TextItem>
        <TextItem >
          Любому животному, найденному на улице, необходим первичный ветеринарный осмотр, включающий в себя: просвет на лишай, соскобы с залысин (если таковые имеются), оценка специалистом общего состояния животного, определение возраста.
        </TextItem>
        <TextItem >
          ВНИМАНИЕ! Не мойте животное перед поездкой к ветеринару. Вы сделаете только хуже, если животное болеет.
        </TextItem>
        <TextItem >
          У ветеринарного врача расспросите про дальнейшие действия по обработке от блох, клещей, глистов и вакцинации. Там же узнать про стерилизацию/кастрацию, готово ли животное к данным манипуляциям сейчас или нужно подождать.
        </TextItem>
        <TextItem >
          Если вы твердо решили держать у себя бездомное животное на период поиска лучших ручек, наша организация, при необходимости, может помочь вам кормом и обработками от внешних и внутренних паразитов для бездомыша, а также оплатой стерилизации/кастрации.
        </TextItem>
        <TextItem >
          А дальше в ваших силах приложить все усилия для поиска животному добрых хозяев!
        </TextItem>
        <TextItem >
          <LinkTo to="/how_to_attach_an_animal">Советы по пристройству животного.</LinkTo>
        </TextItem>
        <DividingLine />
        <FooterTitle >
          Если вы не проживаете в нашем городе, то все рекомендации актуальны, но учитывая, что за помощью вам необходимо будет обращаться в зоозащитные организации вашего города.
        </FooterTitle>
      </MessageWrapper>
    </ContentWrapper>
  </ContentContainer>
);