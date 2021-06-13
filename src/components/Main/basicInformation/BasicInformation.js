import { ContentWrapper } from '../../commonComponent/ContentWrapper';
import { DividingLine } from '../../commonComponent/DividingLine';
import { FooterTitle } from '../../commonComponent/FooterTitle';
import { LinkTo, LinkHref } from '../../commonComponent/CustomLinks';
import { TextItem } from '../../commonComponent/TextItem';
import { HeaderTitle } from '../../commonComponent/HeaderTitle';
import { ContentContainer } from '../../htmlContainer/ContentContainer';
import certificate from './../../../images/certificate.jpg';
import { FigureImg } from '../../commonComponent/FigureImg';
import { MessageWrapper } from '../../commonComponent/MessageWrapper';


export const BasicInformation = () => (
  <ContentContainer >
    <ContentWrapper >
      <MessageWrapper >
        <HeaderTitle >Немного истории...</HeaderTitle>
        <DividingLine />
        <TextItem >
          В 2016 году несколько человек объединились и начали помогать бездомным животным. Так поочередно появились наши сообщества «Сердцем к сердцу» в соцсетях: <LinkHref href="https://ok.ru/group/53568865697985" target="_blank" rel="noreferrer">одноклассники</LinkHref>, <LinkHref href="https://vk.com/serdcem_k_serdcy_46" target="_blank" rel="noreferrer">ВКонтакте</LinkHref>, <LinkHref href="https://instagram.com/serdcem_k_serdcu46?igshid=1wu3d..." target="_blank" rel="noreferrer">инстаграм</LinkHref>.
        </TextItem>
        <FigureImg 
          fullSizeTypeFile="pdf"
          fullSizeTypeName="certificate"
          url={certificate}
          descr="Свидетельство о регистрации"
          figureStyle={["float: left",
                      "margin: 1.5em"]}
          bgImgStyle={["width: 105px",
                      "height: 150px"]}
          figcaptionStyle={["width: 115px"]}
        />
        <TextItem >
          13 ноября 2017 года мы зарегистрировали Железногорскую местную общественную зоозащитную организацию Курской области «Сердцем к сердцу» для возможности официально помогать животным, участвовать в благотворительных конкурсах, акциях и т.д.
        </TextItem>
        <HeaderTitle >Мы - обычные люди</HeaderTitle>
        <DividingLine />
        <TextItem >
          Как и любой из вас, мы являемся обычными людьми, имеющими основную работу, семьи, своих домашних животных... Да, иногда устаем, но желание помогать и делать мир добрее придает нам сил, чтобы все свободное время посвящать братьям нашим меньшим.
        </TextItem>
        <TextItem >
          У нас нет работников, выезжающих в любое время суток по звонкам людей, нашедших то или иное животное. Вся помощь осуществляется только благодаря волонтерам и обычным гражданам.
        </TextItem>     
        <TextItem >
          Никакой материальной выгоды от своей деятельности мы не имеем. Но чувство, когда ты помог очередному «хвостику» лучше любой награды.
        </TextItem>     
        <HeaderTitle >Мы - волонтёры</HeaderTitle>
        <DividingLine />
        <TextItem >
          В чем заключается наша волонтерская деятельность: отлов бездомных животных, лечение пострадавших от несчастных случаев, болезней и жестокости людей, стерилизация, вакцинация и пристрой в добрые руки.
          На попечении ЖМОЗОКО «Сердцем к сердцу» всегда имеется большое количество бездомных животных, нуждающихся в помощи и, конечно же, в добрых ручках.
        </TextItem>
        <TextItem >
          Наших подопечных животных размещаем в платных стационарах частных ветклиник, а кого - то (так же платно) соглашаются передерживать люди.
        </TextItem>
        <TextItem >
          За годы нашей работы сотни (!) животных обрели дом. Еще большее количество получило лечение, было стерилизовано/кастрировано, вакцинировано.
        </TextItem>
        <TextItem >
          Обрати внимание, что ЖМОЗОКО «Сердцем к сердцу» является некоммерческой и негосударственной благотворительной организацией. Вся помощь бездомным животным осуществляется только благодаря пожертвованиям и неравнодушным людям!
        </TextItem>
        <TextItem >
          Наша деятельность абсолютно прозрачна и все необходимые документы регулярно передаются в госорганы, контролирующие нашу работу.
        </TextItem>
        <TextItem >
          Со всеми отчетами по приходам и расходам денежных средств ты всегда можешь ознакомиться в открытом доступе во вкладке <LinkTo to="/financial_reports_on_donations">"финансовые отчеты по пожертвованиям"</LinkTo>,  или в группах ВК <LinkHref href="https://vk.com/topic-124002988_35969996" target="_blank" rel="noreferrer">"приход"</LinkHref> и <LinkHref href="https://vk.com/topic-124002988_35993761" target="_blank" rel="noreferrer">"расход"</LinkHref>.
        </TextItem>
        <TextItem >
          Если в разделах нашего сайта не найдется интересующая информацию или возникнут вопросы, то нажми кнопку, расположенную в правом нижнем углу и мы с удовольствием ответим на все вопросы.
        </TextItem>
        <DividingLine />
        <FooterTitle >
          Присоединяйся к нам, не оставайся в стороне! Чем больше в наших рядах активных и добрых людей, тем больше шансов у животных на счастливую жизнь!
        </FooterTitle>
      </MessageWrapper>
    </ContentWrapper>
  </ContentContainer>
);