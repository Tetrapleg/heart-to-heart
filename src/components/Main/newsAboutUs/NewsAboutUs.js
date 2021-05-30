import { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getJsonpVkApiData } from '../../actions/getJsonpVkApiData';
import { Preloader } from '../../animationElements/Preloader';
import { ContentWrapper } from '../../commonComponent/ContentWrapper';
import { DateOfMessage } from '../../commonComponent/DateOfMessage';
import { DividingLine } from '../../commonComponent/DividingLine';
import { HiddenTextItem } from '../../commonComponent/HiddenTextItem';
import { MessageWrapper } from '../../commonComponent/MessageWrapper';
import { PicturesBlockWrapper } from '../../commonComponent/PicturesBlockWrapper';
import { TextItem } from '../../commonComponent/TextItem';
import { Title } from '../../commonComponent/Title';
import { getContentDate } from '../../functions/getContentDate';
import { ContentContainer } from '../../htmlContainer/ContentContainer';

export const NewsAboutUs = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.dataVkApi.wallPosts, shallowEqual);

  useEffect(() => {
    dispatch(getJsonpVkApiData());
  }, [dispatch]);

  const Message = ({ content }) => {
    const [hiddenOn, setHiddenOff] = useState(true);
    const arrOfText = content.text.split('\n');
    const title = arrOfText.find(title => /[0-9а-яёa-z\s]+/iu.test(title));
    const message = arrOfText.slice(arrOfText.indexOf(title) + 1);
    const filteredTitle = title ? title.replace(/[^0-9а-яёa-z\s]+/iu, "") : "";
    const filteredMessage = message.map(item => item.replace(/([^0-9а-яёa-z\s]{7})+/iug, ""));
    // console.log(data);
    return (
      <>
        <Title >{filteredTitle}</Title>
        <DividingLine />
        {filteredMessage.map((paragraph, index) => index < 10 && <TextItem key={index}>{paragraph}</TextItem>)}
        {filteredMessage.length > 10 && hiddenOn ? <HiddenTextItem setHiddenOff={setHiddenOff}>Читать дальше...</HiddenTextItem> :
          filteredMessage.map((paragraph, index) => index >= 10 && <TextItem key={index}>{paragraph}</TextItem>)
        }
      </>
    )
  };
 
  return (
    <ContentContainer>
      <ContentWrapper>
        {data ? 
          data.response.items.map((item, i) => {
            const content = item.attachments ? item : item.copy_history[0]
            // console.log(content);
            return <MessageWrapper key={i}>
              <DateOfMessage >{getContentDate(content.date)}</DateOfMessage>
              <Message content={content}/>
              <PicturesBlockWrapper photos={content.attachments}/>
            </MessageWrapper>
          }) :
          <Preloader />
        }
      </ContentWrapper>
    </ContentContainer>
  )
};