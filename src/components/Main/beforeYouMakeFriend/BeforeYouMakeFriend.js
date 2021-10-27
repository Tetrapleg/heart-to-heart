import { ContentWrapper } from '../../commonComponent/ContentWrapper';
import { DividingLine } from '../../commonComponent/DividingLine';
import { FooterTitle } from '../../commonComponent/FooterTitle';
import { LinkTo } from '../../commonComponent/CustomLinks';
import { TextItem } from '../../commonComponent/TextItem';
import { HeaderTitle } from '../../commonComponent/HeaderTitle';
import { ContentContainer } from '../../htmlContainer/ContentContainer';
import { MessageWrapper } from '../../commonComponent/MessageWrapper';
import { FigureImg } from '../../commonComponent/FigureImg';
import beforeImg from './../../../images/before_img.jpg';
import beforeImg1 from './../../../images/before_img1.jpg';
import beforeImg2 from './../../../images/before_img2.jpg';
import beforeImg3 from './../../../images/before_img3.jpg';
import beforeImg4 from './../../../images/before_img4.jpg';
import beforeImg5 from './../../../images/before_img5.jpg';
import beforeImg6 from './../../../images/before_img6.jpg';


export const BeforeYouMakeFriend = () => (
  <ContentContainer >
    <ContentWrapper >
      <MessageWrapper >
        <HeaderTitle >ПРЕЖДЕ ЧЕМ ЗАВЕСТИ ЧЕТВЕРОНОГОГО ДРУГА. СОВЕТЫ И РЕКОМЕНДАЦИИ.</HeaderTitle>
        <DividingLine />
        <TextItem >
          Когда усыновляют ребенка, будущие родители проходят психологические тесты и курсы, получают всю необходимую помощь специалистов.
        </TextItem>
        <TextItem >
          Принимая в семью животное, нужно тоже быть подготовленным, ведь собака или кошка, как и ребенок, нуждаются в Вашей любви, заботе и чувстве безопасности. Животные живут долго – Вы готовы взять «ребенка» на ближайшие 15 лет?
        </TextItem>
        <FigureImg 
          fullSizeTypeFile="photo"
          fullSizeTypeName="/full_size_content/before_img_fullsize.jpg"
          url={beforeImg}
          descr=""
          figureStyle={document.documentElement.clientWidth > 450 ? ["float: left;",
                      "margin: 1.5em;"] : ["margin: 0.5em auto;",
                      "width: fit-content;"]}
          bgImgStyle={document.documentElement.clientWidth > 360 ? ["width: 300px;",
                      "height: 200px;"] : [`width: ${document.documentElement.clientWidth - 60}px;`,
                      `height: ${(document.documentElement.clientWidth - 60) * 2 / 3}px;`]}
        />
        <TextItem >
          Заранее определитесь со своими возможностями, обстоятельствами, загляните наперёд, взвесьте все «за» и «против».
        </TextItem>
        <TextItem >
          Здесь мы расскажем большую часть того, с чем вы можете столкнуться, решив взять животное. Это поможет Вам принять правильное решение.
        </TextItem>
        <HeaderTitle >
          1) Если Вы живете один:
        </HeaderTitle>
        <DividingLine />
        <TextItem >
          Заранее подумайте, что будет с животным, если Вам придется уехать на некоторое время – сможет ли собакой заняться друг или родственник, найдутся ли деньги на передержку?
        </TextItem>
        <TextItem >
          Животное не может регулярно и долго находиться в одиночестве. Это наносит психологическую травму, приводит к проблемам со здоровьем из - за отсутствия еды, воды, выгула. Так же, при долгом отсутствии хозяина, питомец может начать портить вещи.
        </TextItem>  
        <HeaderTitle >2) У Вас есть дети или вы их планируете:</HeaderTitle>
        <DividingLine />
        <TextItem >
          Объясните детям, что питомец не игрушка.
        </TextItem>
        <FigureImg 
          fullSizeTypeFile="photo"
          fullSizeTypeName="/full_size_content/before_img1_fullsize.jpg"
          url={beforeImg1}
          descr=""
          figureStyle={document.documentElement.clientWidth > 450 ? ["float: right;",
                      "margin: 1.5em;"] : ["margin: 0.5em auto;",
                      "width: fit-content;"]}
          bgImgStyle={document.documentElement.clientWidth > 360 ? ["width: 300px;",
                      "height: 200px;"] : [`width: ${document.documentElement.clientWidth - 60}px;`,
                      `height: ${(document.documentElement.clientWidth - 60) * 2 / 3}px;`]}
        />
        <TextItem >
          Нельзя хватать, таскать его за части тела, настойчиво совать руки в пасть, пинать и т.д. Игра хороша, когда она нравится всем ее участникам.
        </TextItem>
        <TextItem >
          Если Вы планируете ребенка, то хорошо подумайте, а хватит ли Вам времени и сил на четвероногого друга?
        </TextItem>
        <TextItem >
          Бывает, что у детей возникает аллергия на шерсть. Готовы ли Вы в таком случае оставить питомца в доме или найти ему хорошего хозяина?
        </TextItem>
        <HeaderTitle >3) У Вас большая или маленькая квартира:</HeaderTitle>
        <DividingLine />
        <TextItem >
          Если хотите крупную собаку, то убедитесь, что Вам и Вашим членам семьи будет комфортно. Бывают случаи, когда люди отказываются от питомца, решив, что он слишком большой для их квадратных метров.
        </TextItem>
        <HeaderTitle >4) У Вас съемное жилье, есть финансовые, семейные и т.д. проблемы:</HeaderTitle>
        <DividingLine />
        <TextItem >
          Если у Вас нестабильная квартирная, семейная или профессиональная ситуация, подумайте, сможете ли Вы заниматься животным, не только сейчас, но также на протяжении многих лет. Уверены, что при переезде на другую съемную квартиру сможете забрать с собой питомца?
        </TextItem>
        <FigureImg 
          fullSizeTypeFile="photo"
          fullSizeTypeName="/full_size_content/before_img2_fullsize.jpg"
          url={beforeImg2}
          descr=""
          figureStyle={document.documentElement.clientWidth > 450 ? ["float: left;",
                      "margin: 1.5em;"] : ["margin: 0.5em auto;",
                      "width: fit-content;"]}
          bgImgStyle={document.documentElement.clientWidth > 360 ? ["width: 300px;",
                      "height: 200px;"] : [`width: ${document.documentElement.clientWidth - 60}px;`,
                      `height: ${(document.documentElement.clientWidth - 60) * 2 / 3}px;`]}
        />
        <HeaderTitle >5) У Вас активный образ жизни или, скорее, спокойный:</HeaderTitle>
        <DividingLine />
        <TextItem >
          Выбирайте животное с подходящим темпераментом: молодым собакам, а также некоторым породам нужен особенный уход и длительные прогулки. В противном случае они будут выплескивать энергию дома, например, портить мебель.
        </TextItem>
        <HeaderTitle >6) У Вас уже есть питомец:</HeaderTitle>
        <DividingLine />
        <TextItem >
          Если у Вас дома уже есть животное, руководствуйтесь принципом разных характеров и полов животных, которые должны жить вместе. Для начала понаблюдайте, как животные реагируют друг на друга, но сделайте это на улице, на прогулке. Дома одна из собак всегда будет доминировать, это естественное явление.
        </TextItem>
        <TextItem >
          Обычно привыкание животных друг к другу занимает в районе 2-х недель. Но, если Вы замечаете ярко выраженную агрессию между питомцами, ни в коем случае не оставляйте их без присмотра и обратитесь к кинологу или зоопсихологу.
        </TextItem>
        <HeaderTitle >7) Вы хотите подарить кому-то животное или берете в семью, приняв единоличное решение:</HeaderTitle>
        <DividingLine />
        <TextItem >
          Если Вы готовы взять домой нового члена семьи, все домочадцы должны участвовать в его выборе и принимать совместное решение.
        </TextItem>
        <FigureImg 
          fullSizeTypeFile="photo"
          fullSizeTypeName="/full_size_content/before_img3_fullsize.jpg"
          url={beforeImg3}
          descr=""
          figureStyle={document.documentElement.clientWidth > 450 ? ["float: right;",
                      "margin: 1.5em;"] : ["margin: 0.5em auto;",
                      "width: fit-content;"]}
          bgImgStyle={document.documentElement.clientWidth > 360 ? ["width: 300px;",
                      "height: 225px;"] : [`width: ${document.documentElement.clientWidth - 60}px;`,
                      `height: ${(document.documentElement.clientWidth - 60) * 2.25 / 3}px;`]}
        />
        <TextItem >
          Если же хотите подарить животное, то обязательно выясните, готова ли принимающая сторона к таким подаркам?
        </TextItem>
        <TextItem >
          Ваш душевный порыв не все оценят, а страдать будет четвероногий друг.
        </TextItem>
        <HeaderTitle >Животное в новом доме. С чем Вы можете столкнуться и что нужно делать:</HeaderTitle>
        <DividingLine />
        <TextItem >
          ● Попробуйте поставить себя на место животного: оно попадает в совершенно новое место. Для него это огромный стресс.
        </TextItem>
        <TextItem >
          Дома необходимо обеспечить спокойную обстановку. Дайте ему время привыкнуть и обследовать территорию.
        </TextItem>
        <TextItem >
          Бывает, что кот или кошка, впервые попав в дом, могут несколько дней прятаться под диваном или шкафом, выбираясь оттуда только по ночам.
        </TextItem>
        <TextItem >
          Не расстраивайтесь, дайте время обвыкнуться, такая пугливость обязательно пройдет.
        </TextItem>
        <TextItem >
          ● Для кошачьих обязательно должны быть приобретены когтеточка и лоток.
        </TextItem>
        <TextItem >
          Ждать выгула, как собаки, чтобы сходить в туалет, они не будут. А когтеточка нужна, чтобы питомец не портил мебель.
        </TextItem>
        <TextItem >
          Хотя, даже при ее наличии, кошки могут точить когти в неположенных местах. Будьте к этому готовы и по возможности покупайте мебель с обшивкой «анти коготь».
        </TextItem>
        <TextItem >
          ● Случается, что кошки при появлении ребенка могут начать ходить в туалет на его кровать (редко, но бывают случаи). Здесь будет необходима консультация зоопсихологов или иных специалистов.
        </TextItem>
        <FigureImg 
          fullSizeTypeFile="photo"
          fullSizeTypeName="/full_size_content/before_img4_fullsize.jpg"
          url={beforeImg4}
          descr=""
          figureStyle={document.documentElement.clientWidth > 450 ? ["float: left;",
                      "margin: 1.5em;"] : ["margin: 0.5em auto;",
                      "width: fit-content;"]}
          bgImgStyle={document.documentElement.clientWidth > 360 ? ["width: 300px;",
                      "height: 169px;"] : [`width: ${document.documentElement.clientWidth - 60}px;`,
                      `height: ${(document.documentElement.clientWidth - 60) * 1.69 / 3}px;`]}
        />
        <TextItem >
          ● Для собаки нужно найти спокойное место, где она сможет «спрятаться». Понаблюдайте, где она себя чувствует наиболее комфортно и безопасно, пусть это будет ее территорией.
        </TextItem>
        <TextItem >
          ● Скорее всего, на первых порах ночью собака не будет давать Вам высыпаться. Она может ходить по квартире, пугаться непривычных звуков, не сможет «найти себе место».
        </TextItem>
        <TextItem >
          Возможно, Вам придется выгуливать ее ночью или убирать «сюрпризы», если у нее произойдет расстройство кишечника, или, если она не была приучена к выгулу.
        </TextItem>
        <TextItem >
          Это пройдет в течение первых 2-4 недель, когда собака успокоится и почувствует, что она, наконец - то, дома.
        </TextItem>
        <TextItem >
          ● Постарайтесь говорить с собакой на ее языке. Ошибка многих хозяев заключается в «очеловечении» собаки.
        </TextItem>
        <TextItem >
          Собаки общаются при помощи своего тела и поведения. Стоит «выучить» этот язык, чтобы знать, почему собака ведет себя так в той или иной ситуации, что она хочет Вам «сказать», попросить.
        </TextItem>
        <TextItem >
          ● Гуляйте в спокойном месте, в первое время обязательно выводите собаку на поводке. К ошейнику или шлейке прикрепите жетон с номером Вашего телефона.
        </TextItem>
        <TextItem >
          Бывшебездомные собаки обычно очень пугливы, могут убежать и не найти обратной дороги к дому в новом месте. Даже на поводке учите собаку, чтобы она подходила к Вам по команде.
        </TextItem>
        <TextItem >
          Отпускать без поводка можно питомца только в местах, где нет рядом проезжей части, агрессивных собак или скопления бездомных животных, и, если Вы уверены, что Ваш питомец сам никому не нанесет вреда. Опять же, это можно делать только в Вашем присутствии, никаких самовыгулов быть не должно.
        </TextItem>
        <FigureImg 
          fullSizeTypeFile="photo"
          fullSizeTypeName="/full_size_content/before_img5_fullsize.jpg"
          url={beforeImg5}
          descr=""
          figureStyle={document.documentElement.clientWidth > 450 ? ["float: right;",
                      "margin: 1.5em;"] : ["margin: 0.5em auto;",
                      "width: fit-content;"]}
          bgImgStyle={document.documentElement.clientWidth > 360 ? ["width: 300px;",
                      "height: 200px;"] : [`width: ${document.documentElement.clientWidth - 60}px;`,
                      `height: ${(document.documentElement.clientWidth - 60) * 2 / 3}px;`]}
        />
        <TextItem >
          ● Собаки обожают ритуалы и повторяющиеся ситуации. Если на начальном этапе Вы будете придерживаться четких правил, обучение и адаптация собаки к новым условиям будут проходить гораздо легче.
        </TextItem>
        <TextItem >
          ● Многие бывшебездомные собаки испытывают страх одиночества: портят домашние вещи или воют, когда остаются одни.
        </TextItem>
        <TextItem >
          Решением в этой ситуации может стать постепенное (начиная с нескольких минут) приучение к отсутствию людей, а также игрушки типа «конг» (с лакомством внутри), которые занимают собаку на долгие часы.
        </TextItem>
        <HeaderTitle >
          Важно: жевание снимает у собак стресс! Собаки с радостью жуют кости (только не давайте трубчатые, они могут нанести вред здоровью).
        </HeaderTitle>
        <TextItem >
          ● Иногда (крайне редко) у животных на нервной почве в новом доме могут появиться из ниоткуда блохи или лишай. Спокойно! Такое случается! Создайте максимально спокойную атмосферу и обратитесь к ветеринару. Эти проблемы быстро решатся.
        </TextItem>
        <TextItem >
          ● Помните, что прошлое бездомного животного зачастую неизвестно, в большинстве случаев оно даже трагично.
        </TextItem>
        <TextItem >
          Питомцу, возможно, потребуются особенный подход и понимание со стороны хозяев в отношении непонятного для них поведения (фобии, агрессия, пугливость и др.), в тяжелых случаях может потребоваться помощь кинолога, зоопсихолога.
        </TextItem>
        <HeaderTitle >Подведем итоги:</HeaderTitle>
        <DividingLine />
        <TextItem >
          Животное – это не вещь! Ему нужна любовь и забота, и мы должны относиться к нему, как к члену семьи, с пониманием его инстинктов и природы, а, также, окружая заботой и в болезни, и в старости до конца его дней.
        </TextItem>
        <FigureImg 
          fullSizeTypeFile="photo"
          fullSizeTypeName="/full_size_content/before_img6_fullsize.jpg"
          url={beforeImg6}
          descr=""
          figureStyle={document.documentElement.clientWidth > 450 ? ["float: left;",
                      "margin: 1.5em;"] : ["margin: 0.5em auto;",
                      "width: fit-content;"]}
          bgImgStyle={document.documentElement.clientWidth > 360 ? ["width: 300px;",
                      "height: 200px;"] : [`width: ${document.documentElement.clientWidth - 60}px;`,
                      `height: ${(document.documentElement.clientWidth - 60) * 2 / 3}px;`]}
        />
        <TextItem >
          Правильный уход за животным стоит денег. Нужно покупать корм, водить к ветеринару, систематически прививать и обрабатывать от паразитов, приобретать различную амуницию (шлейку, поводок и многое другое). Все это – не дешево, но обязательно для содержания животного.
        </TextItem>
        <TextItem >
          Многие пристроенные нами животные возвращаются к нам. Это происходит не потому, что их взяли к себе плохие люди, а потому, что они неправильно рассчитали свои силы. А для животного - это трагедия. В очередной раз оно теряет дом, семью и веру в людей. Поэтому делайте ответственный выбор!
        </TextItem>
        <TextItem >
          Если же Вы очень хотите помочь бездомным животным, взяв домой, но где-то в глубине души таятся опасения, что не справитесь, есть и <LinkTo to="/help_for_animals">другие способы</LinkTo>!
        </TextItem>
        <TextItem >
          Присоединитесь к зооволонтерам: помогайте ухаживать за животными в приюте, возьмите кого-нибудь на передержку, помогите отвезти нуждающегося к ветеринару и т.д.
        </TextItem>
        <TextItem >
          Кто знает, может, от этого Вы получите больше радости и удовлетворения и спасете больше животных, чем неподготовленным «усыновлением»!
        </TextItem>
        <DividingLine />
        <FooterTitle >
          Но, если Вы уже сделали ответственный шаг и завели себе питомца, то помните, что несмотря на все возможные трудности и траты, животное в доме (тем более спасенное животное) – это всегда радость, это член семьи, это Ваш друг! Поэтому берегите его, и заботьтесь как о любом другом члене семьи.
        </FooterTitle>
      </MessageWrapper>
    </ContentWrapper>
  </ContentContainer>
);