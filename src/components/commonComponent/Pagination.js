import styled from 'styled-components';

const PaginationInner = styled.div`
  padding: 0.3em 0.5em;
  background-color: #E6E6FA;
  width: fit-content;
  border-radius: 0.3em;
  margin-left: auto;
  margin-right: 1em;
  box-shadow: 0 0 1em 0.1em rgba(0,0,0,0.1);
  font-size: 0.8em;
  font-weight: 500;
`;

const DisabledSpan = styled.span`
  padding-right: 0.3em;
  padding-left: 0.3em;
  cursor: pointer;
`;

const ActiveSpan = styled.span`
  padding-right: 0.3em;
  padding-left: 0.3em;
  font-size: 0.9em;
  font-weight: 300;
  cursor: pointer;
`;

export const PaginationWrapper=styled.section`
  position: relative;
  display: flex;
  position: sticky;
  top: 60px;
  z-index: 5;
`;

export const Pagination = ({ pages, pageCount, setPageCount }) => {
  const pagesArr = [];
  
  for(let i = 0; i < 3; i++) {
    if(+pageCount - i === +pageCount + i === +pageCount) pagesArr.push(+pageCount);
    if(+pageCount - i > 0 && i > 0) pagesArr.unshift(+pageCount - i);
    if(+pageCount + i <= pages) pagesArr.push(+pageCount + i);
    
  }

  return (<PaginationInner >
    {pagesArr[0] > 1 && <ActiveSpan onClick={() => setPageCount(1)}>«</ActiveSpan>}
    {pagesArr.map(i => i === +pageCount ?
      <DisabledSpan key={i}>{i}</DisabledSpan> :
      <ActiveSpan key={i} onClick={() => setPageCount(i)}>{i}</ActiveSpan>
    )}
    {pagesArr[pagesArr.length - 1] < pages && <ActiveSpan onClick={() => setPageCount(pages)}>»</ActiveSpan>}
  </PaginationInner>)
}