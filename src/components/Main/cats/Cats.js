import { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getJsonpVkApiData } from "../../actions/getJsonpVkApiData";
import { ElementPreloader, Preloader } from "../../animationElements/Preloader";
import { ContentWrapper } from "../../commonComponent/ContentWrapper";
import { DividingLine } from "../../commonComponent/DividingLine";
import { ErrorMessage } from "../../commonComponent/ErrorMessage";
import { HiddenTextItem } from "../../commonComponent/HiddenTextItem";
import { MessageWrapper } from "../../commonComponent/MessageWrapper";
import { NavButton } from "../../commonComponent/NavButton";
import { PicturesBlockWrapper } from "../../commonComponent/PicturesBlockWrapper";
import { TextItem } from "../../commonComponent/TextItem";
import { HeaderTitle } from "../../commonComponent/HeaderTitle";
import { ContentContainer } from "../../htmlContainer/ContentContainer";
import { Title } from "../../commonComponent/Title";
import { Pagination, PaginationWrapper } from "../../commonComponent/Pagination";
import { ageAnimalsCalculate } from "../../functions/ageAnimalsCalculate";
import { setFetchingMarketDataVkApi, setMarketDataVkApi } from "../../../reducers/dataMarketVkApiReducer";
import { SearchSvg } from "../../svgIcons/SvgIcons";
import { FormControl, FormLabel, Radio, RadioGroup, FormControlLabel } from "@material-ui/core";

const queryParams = {
  female: "кошечка",
  male: "котик",
  all: null,
  young: [0, 199],
  mature: [200, 600],
  wise: [601, 5000],
};

const SearchDropListWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  padding-top: 0.15em;
  z-index: -1;
  background-color: transparent;
  display: none;
`;

const SearchInner = styled.div`
  padding: 0.2em 0.2em 0;
  background-color: #E6E6FA;
  width: fit-content;
  border-radius: 0.3em;
  margin-left: auto;
  margin-right: 1em;
  box-shadow: 0 0 1em 0.1em rgba(0,0,0,0.1);
  cursor: pointer;

  & svg {
    width: 1.5em;
    height: 0.95em;
    & path {
      fill: rgba(255,21,49,0.7);
    }
  }

  &:hover {
    ${SearchDropListWrapper} {
      display: block;
    }
    
    & svg {
      filter: drop-shadow(0 0 1px rgba(255,21,49,0.9));
      & path {
        fill: rgba(255,21,49,0.9);
      }
    }
  }
`;

const SearchDropListInner = styled.div`
  background-color: #E6E6FA;
  padding: 0.8em 1.5em;
  border-radius: 0.3em;
  box-shadow: 0 0 1em 0.1em rgba(0,0,0,0.1);
  font-size: 1rem;
  width: max-content;
  max-width: ${document.documentElement.clientWidth - 45}px;
`;

const RadioButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  & fieldset + fieldset {
    margin-top: 1em;
  }
`;

const ResultButtonWrapper = styled.div`
  padding-top: 1em;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
`;

export const Cats = () => {
  const dispatch = useDispatch();
  const marketData = useSelector(state => state.dataMarketVkApi.marketPostsFiltered, shallowEqual);
  const isFetching = useSelector(state => state.dataMarketVkApi.isFetchingMarketDataVkApi, shallowEqual);
  const [pages, setPages] = useState(null);
  const [pageCount, setPageCount] = useState(1);
  const [prevPageCount, setPrevPageCount] = useState(1);
  const [genderValue, setGenderValue] = useState(null);
  const [ageValue, setAgeValue] = useState(null);
  const [queryStrGender, setQueryStrGender] = useState("q=кошки");
  const [queryStrAge, setQueryStrAge] = useState("");
  const dropListRef = useRef();

  const fetchCount = 1;

  const getFilteredItems = () => {
    dispatch(getJsonpVkApiData({offset: 0, count: fetchCount, method: "market.search", requestParams: ["extended=1", queryStrGender, queryStrAge]}));
    dispatch(setFetchingMarketDataVkApi(true));
    setPrevPageCount(1);
    setPageCount(1);
  }

  const handleGenderChange = (e) => {
    const value = e.target.value;
    setGenderValue(value);
    setQueryStrGender(queryParams[value] ? `q=${queryParams[value]}` : "q=кошки");
  }

  const handleAgeChange = (e) => {
    const value = e.target.value;
    setAgeValue(value);
    setQueryStrAge(queryParams[value] ? `price_from=${queryParams[value][0]}&price_to=${queryParams[value][1]}` : "");
  }

  useEffect(() => {
    if(!isFetching && pageCount !== prevPageCount) {
      dispatch(getJsonpVkApiData({offset: (pageCount - 1) * fetchCount, count: fetchCount, method: "market.search", requestParams: ["extended=1", queryStrGender, queryStrAge]}));
      dispatch(setFetchingMarketDataVkApi(true));
      setPrevPageCount(pageCount);
    }
  }, [dispatch, isFetching, pageCount, prevPageCount, queryStrGender, queryStrAge]);

  useEffect(() => {
    if(marketData) setPages(Math.ceil(marketData.count / fetchCount));
  }, [marketData]);

  useEffect(() => {
    dispatch(setMarketDataVkApi(null));
    dispatch(getJsonpVkApiData({count: fetchCount, offset: 0, method: "market.search", requestParams: ["extended=1", "q=кошки"]}));
  }, [dispatch]);

  useEffect(() => {
    const dropElement = dropListRef.current;

    if(dropElement) {
      console.dir(dropElement);
      console.log(dropElement.clientHeight, dropElement.offsetHeight, dropElement.scrollHeight);
    }
  }, [dropListRef]);

  const Message = ({ item }) => {
    const [hiddenOn, setHiddenOff] = useState(true);
    const message = item.message;

    return (
      <>
        <HeaderTitle >{item.nickname} {ageAnimalsCalculate(item.age)}</HeaderTitle>
        <DividingLine />
        <TextItem >{message.title}</TextItem>
        {message.text.map((paragraph, index) => index < 10 && <TextItem key={index}>{paragraph}</TextItem>)}
        {message.text.length > 10 && hiddenOn ? <HiddenTextItem setHiddenOff={setHiddenOff}>Читать дальше...</HiddenTextItem> :
          message.text.map((paragraph, index) => index >= 10 && <TextItem key={index + 10}>{paragraph}</TextItem>)
        }
      </>
    )
  };

  const NewsBlock = ({ marketData }) => (!!marketData.response ? 
    marketData.messages.map((item) => <MessageWrapper key={item.id}>
      <Message item={item}/>
      {item.attachments && <PicturesBlockWrapper attachments={item.attachments}/>}
    </MessageWrapper>)
       :
    <MessageWrapper>
      <ErrorMessage error={marketData.messages}/>
    </MessageWrapper>
  );
 
  return (
    <ContentContainer >
      <ContentWrapper >
        <PaginationWrapper >
          <SearchInner >
            <SearchSvg />
            <SearchDropListWrapper 
              ref={dropListRef}
            >
              <SearchDropListInner >
                <Title >Фильтровать по:</Title>
                <DividingLine />
                <RadioButtonWrapper >
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Пол:</FormLabel>
                    <RadioGroup aria-label="gender" name="gender" row value={genderValue} onChange={handleGenderChange}>
                      <FormControlLabel value="female" control={<Radio />} label="Девочка" labelPlacement="bottom"/>
                      <FormControlLabel value="male" control={<Radio />} label="Мальчик" labelPlacement="bottom"/>
                      <FormControlLabel value="all" control={<Radio />} label="Все" labelPlacement="bottom"/>
                    </RadioGroup>
                  </FormControl>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Возраст:</FormLabel>
                    <RadioGroup aria-label="age" name="age" row value={ageValue} onChange={handleAgeChange}>
                      <FormControlLabel value="young" control={<Radio />} label="До года" labelPlacement="bottom"/>
                      <FormControlLabel value="mature" control={<Radio />} label="От 1 до 5" labelPlacement="bottom"/>
                      <FormControlLabel value="wise" control={<Radio />} label="Старше 5" labelPlacement="bottom"/>
                    </RadioGroup>
                  </FormControl>
                  <ResultButtonWrapper >
                    <NavButton 
                      onClick={() => getFilteredItems(genderValue, ageValue)}
                      disabled={!genderValue && !ageValue}
                    >Показать</NavButton>
                  </ResultButtonWrapper>
                </RadioButtonWrapper>
              </SearchDropListInner>
            </SearchDropListWrapper>
          </SearchInner>
          {isFetching && <ElementPreloader />}
          {marketData?.response && pages > fetchCount ? <Pagination 
            pages={pages}
            pageCount={pageCount}
            setPageCount={setPageCount}
          /> :
          null}
        </PaginationWrapper>
        {marketData ? 
          marketData.messages.length > 0 ? 
          <NewsBlock marketData={marketData}/> : <MessageWrapper >
                                                    <Title >
                                                      Все хвостики с запрошенными данными уже нашли свой дом!
                                                    </Title>
                                                  </MessageWrapper>
           :
          <Preloader />
        }
      </ContentWrapper>
    </ContentContainer>
  )
}