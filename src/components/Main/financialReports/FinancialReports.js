import { useEffect, useState } from "react";
import styled from 'styled-components';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getJsonpVkApiData } from "../../actions/getJsonpVkApiData";
import { ElementPreloader, Preloader } from "../../animationElements/Preloader";
import { ContentWrapper } from "../../commonComponent/ContentWrapper";
import { DateOfMessage } from "../../commonComponent/DateOfMessage";
import { DividingLine } from "../../commonComponent/DividingLine";
import { ErrorMessage } from "../../commonComponent/ErrorMessage";
import { HiddenTextItem } from "../../commonComponent/HiddenTextItem";
import { MessageWrapper } from "../../commonComponent/MessageWrapper";
import { NavButton } from "../../commonComponent/NavButton";
import { PicturesBlockWrapper } from "../../commonComponent/PicturesBlockWrapper";
import { TextItem } from "../../commonComponent/TextItem";
import { HeaderTitle } from "../../commonComponent/HeaderTitle";
import { getContentDate, getNowDate } from "../../functions/getContentDate";
import { ContentContainer } from "../../htmlContainer/ContentContainer";
import { Title } from "../../commonComponent/Title";
import { Pagination, PaginationWrapper } from "../../commonComponent/Pagination";
import { setFetchingBoardDataVkApi } from "../../../reducers/dataBoardVkApiReducer";

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  & button + button {
    margin-left: 1em;
  }
`;

export const FinancialReports = () => {
  const dispatch = useDispatch();
  const boardData = useSelector(state => state.dataBoardVkApi.boardPosts, shallowEqual);
  const isFetching = useSelector(state => state.dataBoardVkApi.isFetchingBoardDataVkApi, shallowEqual);
  const nowDate = getNowDate();
  const [idTopic, setIdTopic] = useState(null);
  const [pages, setPages] = useState(null);
  const [pageCount, setPageCount] = useState(1);
  const [prevPageCount, setPrevPageCount] = useState(1);

  const fetchCount = 20;

  const getTopic = (e, topic) => {

    dispatch(getJsonpVkApiData({count: fetchCount, method: "board.getComments", owner_id: 124002988, requestParams: [`topic_id=${topic}`, `group_id=124002988`, "sort=desc"]}));
    dispatch(setFetchingBoardDataVkApi(true));
    setIdTopic(topic);
    setPrevPageCount(1);
    setPageCount(1);
  };

  useEffect(() => {

    if(!isFetching && pageCount !== prevPageCount) {
      dispatch(getJsonpVkApiData({offset: (pageCount - 1) * fetchCount, count: fetchCount, method: "board.getComments", owner_id: 124002988, requestParams: [`topic_id=${idTopic}`, `group_id=124002988`, "sort=desc"]}));
      dispatch(setFetchingBoardDataVkApi(true));
      setPrevPageCount(pageCount);
    }
  }, [idTopic, dispatch, isFetching, pageCount, prevPageCount]);

  useEffect(() => {
    if(boardData) setPages(Math.ceil(boardData.count / fetchCount));
  }, [boardData]);

  useEffect(() => {
    dispatch(getJsonpVkApiData({count: 5, offset: 0, method: "board.getComments", owner_id: 124002988, requestParams: [`topic_id=35993761`, "group_id=124002988", "sort=desc"]}));
  }, [dispatch]);

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

  const NewsBlock = ({ boardData }) => (!!boardData.response ? 
    boardData.messages.map((item) => <MessageWrapper key={item.id}>
      <DateOfMessage >{getContentDate(item.date, nowDate)}</DateOfMessage>
      <Message message={item.message}/>
      {item.attachments && <PicturesBlockWrapper attachments={item.attachments}/>}
    </MessageWrapper>)
       :
    <MessageWrapper>
      <ErrorMessage error={boardData.messages}/>
    </MessageWrapper>
  );
 
  return (
    <ContentContainer >
      <ContentWrapper >
        <MessageWrapper >
          <Title >
            Финансовый отчёт (с 2017 г.)
          </Title>
          <DividingLine />
          <NavWrapper >
            <NavButton 
              className={idTopic === 35969996 && "active"} 
              onClick={(e) => getTopic(e, 35969996)}
              disabled={!boardData?.response}
            >Поступления</NavButton>
            <NavButton 
              className={idTopic === 35993761 && "active"} 
              onClick={(e) => getTopic(e, 35993761)}
              disabled={!boardData?.response}
            >Расходы</NavButton>
          </NavWrapper>
        </MessageWrapper>
        <PaginationWrapper >
          {isFetching && <ElementPreloader />}
          {idTopic && boardData.response ? <Pagination 
            pages={pages}
            pageCount={pageCount}
            setPageCount={setPageCount}
          /> :
          null}
        </PaginationWrapper>
        {boardData ? 
          <NewsBlock boardData={boardData}/>
           :
          <Preloader />
        }
      </ContentWrapper>
    </ContentContainer>
  )
}


// 35993761 Финансовый отчет. Расход 2017-2020

// 35969996 "Финансовый отчет. Приход 2017-2020"