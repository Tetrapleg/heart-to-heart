import { useState } from 'react';
import { shallowEqual, useSelector } from "react-redux";
import styled from 'styled-components';
import { DividingLine } from '../../commonComponent/DividingLine';
import { ErrorMessage } from '../../commonComponent/ErrorMessage';
import { HiddenTextItem } from '../../commonComponent/HiddenTextItem';
import { TextItem } from '../../commonComponent/TextItem';
import { HeaderTitle } from '../../commonComponent/HeaderTitle';
import { Aside } from '../layoutMainPageComponents/Aside';
import { PicturesBlockWrapper } from '../../commonComponent/PicturesBlockWrapper';
import { addAsidePhotos } from '../../functions/addAsiidePhotos';

export const AsideMessageWrapper = styled.div`
  padding-top: 0.5em;
  padding-bottom: 1.3em;
  border-bottom: 1px solid rgba(0,0,0,0.1);
`;

export const AsideLeft = ({ ...props }) => {
  const dataWallVk = useSelector(state => state.dataVkApi.wallPostsFiltered, shallowEqual);
  const Message = ({ message }) => {
    const [hiddenOn, setHiddenOff] = useState(true);
    
    return (
      <>
        <HeaderTitle >{message.title}</HeaderTitle>
        <DividingLine />
        {message.text.map((paragraph, index) => index < 5 && <TextItem key={index}>{paragraph}</TextItem>)}
        {message.text.length > 10 && hiddenOn ? <HiddenTextItem setHiddenOff={setHiddenOff}>Читать дальше...</HiddenTextItem> :
          message.text.map((paragraph, index) => index >= 5 && <TextItem key={index + 10}>{paragraph}</TextItem>)
        }
      </>
    )
  };

  const NewsBlock = ({ dataWallVk }) => (!!dataWallVk.response ? 
    dataWallVk.messages.slice(0,1).map((item, i) => <AsideMessageWrapper key={item.id}>
        <Message message={item.message}/>
        {item.attachments && <PicturesBlockWrapper attachments={addAsidePhotos(item.attachments)}/>}
      </AsideMessageWrapper>)
    :
    <AsideMessageWrapper>
      <ErrorMessage error={dataWallVk.messages}/>
    </AsideMessageWrapper>
  );

  return (
  <Aside 
    side="left"
    {...props}
  >
    {dataWallVk && <NewsBlock dataWallVk={dataWallVk}/>}
  </Aside>
)};