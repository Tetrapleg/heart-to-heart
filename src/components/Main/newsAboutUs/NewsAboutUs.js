import React, { useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getJsonpVkApiData } from '../../actions/getJsonpVkApiData';
import { Preloader } from '../../animationElements/Preloader';
import { ContentWrapper } from '../../commonComponent/ContentWrapper';
import { DateOfMessage } from '../../commonComponent/DateOfMessage';
import { DividingLine } from '../../commonComponent/DividingLine';
import { ErrorMessage } from '../../commonComponent/ErrorMessage';
import { ErrorTitleWrapper } from '../../commonComponent/ErrorTitleWrapper';
import { HiddenTextItem } from '../../commonComponent/HiddenTextItem';
import { MessageWrapper } from '../../commonComponent/MessageWrapper';
import { PicturesBlockWrapper } from '../../commonComponent/PicturesBlockWrapper';
import { TextItem } from '../../commonComponent/TextItem';
import { HeaderTitle } from '../../commonComponent/HeaderTitle';
import { getContentDate, getNowDate } from '../../functions/getContentDate';
import { ContentContainer } from '../../htmlContainer/ContentContainer';

export const NewsAboutUs = () => {
  const dataWallVk = useSelector(state => state.dataVkApi.wallPostsFiltered, shallowEqual);
  const postsCount = useSelector(state => state.dataVkApi.postsCount, shallowEqual);
  const pageNumber = useSelector(state => state.dataVkApi.pageNumber, shallowEqual);
  const dispatch = useDispatch();
  const nowDate = getNowDate();
  const newsBlockRef = useRef();
  const [localPostsCount, setLocalPostsCount] = useState(0);

  useEffect(() => {
    if(postsCount > 0 && postsCount === localPostsCount) {
      dispatch(getJsonpVkApiData({count: 10, offset: pageNumber}));
    }
  }, [postsCount, localPostsCount, dispatch, pageNumber]);

  useEffect(() => {
    const elem = newsBlockRef.current;
    const handleScroll = () => {
      if(!dataWallVk.response || postsCount <= 0 || postsCount === localPostsCount) return;

      if(elem && elem.getBoundingClientRect().bottom - window.innerHeight < window.innerHeight / 2) {
        setLocalPostsCount(postsCount);
      }
    };
 
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [newsBlockRef, postsCount, dataWallVk, dispatch, localPostsCount]);

  const Message = ({ message }) => {
    const [hiddenOn, setHiddenOff] = useState(true);

    return (
      <>
        <HeaderTitle >{message.title}</HeaderTitle>
        <DividingLine />
        {message.text.map((paragraph, index) => index < 10 && <TextItem key={index}>{paragraph}</TextItem>)}
        {message.text.length > 10 && hiddenOn ? <HiddenTextItem setHiddenOff={setHiddenOff}>Читать дальше...</HiddenTextItem> :
          message.text.map((paragraph, index) => index >= 10 && <TextItem key={index + 10}>{paragraph}</TextItem>)
        }
      </>
    )
  };

  const NewsBlock = ({ dataWallVk }) => (!!dataWallVk.response ? 
    <div ref={newsBlockRef}>
      {dataWallVk.messages.map((item, i) => <MessageWrapper key={item.id}>
          <DateOfMessage >{getContentDate(item.date, nowDate)}</DateOfMessage>
          <Message message={item.message}/>
          {item.attachments && <PicturesBlockWrapper attachments={item.attachments}/>}
        </MessageWrapper>)
      }
      {postsCount <= 0 && <MessageWrapper >
        <ErrorTitleWrapper >
          К сожалению все посты на стене сообщества закончились...
        </ErrorTitleWrapper>
      </MessageWrapper>}
    </div> :
    <MessageWrapper>
      <ErrorMessage error={dataWallVk.messages}/>
    </MessageWrapper>
  );
 
  return (
    <ContentContainer >
      <ContentWrapper >
        {dataWallVk ? 
          <NewsBlock dataWallVk={dataWallVk}/>
           :
          <Preloader />
        }
      </ContentWrapper>
    </ContentContainer>
  )
};