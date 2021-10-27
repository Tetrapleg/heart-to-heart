import styled from 'styled-components';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setFullSizeImg, setFullSizePhotoalbum } from '../../reducers/displayingFullSizeContentReducer';
import { Preloader } from '../animationElements/Preloader';
import { createRef, useEffect } from 'react';
import { CloseModalButtonWrapper } from './LayoutShowVideo';
import { CloseModalButton } from './CloseModalButton';
import { getJsonpVkApiData } from '../actions/getJsonpVkApiData';
import { setFetchingPhotoalbumDataVkApi } from '../../reducers/dataPhotoAlbumVkApiReducer';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { MessageWrapper } from './MessageWrapper';
import { ErrorMessage } from './ErrorMessage';

const Overlay = styled.div`
  position: fixed;
  z-index: 899;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  backdrop-filter: blur(0.2em);
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  cursor: zoom-out;
`;

const PhotosWrapper = styled.div`
  position: relative;
  padding: 1em;
  background-color: #E6E6FA;
  border-radius: 0.5em;
  max-width: 1050px;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  margin: 1em;
  height: fit-content;
  cursor: pointer;
`;

const PhotoWrapper = styled.div`
  margin: 0.3em;
  padding: 0.3em;
  background-color: rgb(204,204,255);
  height: fit-content;
  cursor: zoom-in;
`;

export const LayoutPhotoAlbum = ({ idPhotoAlbum }) => {
  const isFetching = useSelector(state => state.dataPhotoAlbumVkApi.isFetchingPhotoalbumDataVkApi, shallowEqual);
  const dataPhotoAlbum = useSelector(state => state.dataPhotoAlbumVkApi.photoalbumDataFiltered, shallowEqual);
  const dispatch = useDispatch();
  const overlayRef = createRef();

  const closeModal = () => {
    dispatch(setFullSizePhotoalbum(null));
  };

  const closeModalOverlay = (e) => {
    if(e.target.id === "photoAlbumOverlay") closeModal();
  };

  const openFullSizePhoto = (photoUrl) => {
    dispatch(setFullSizeImg({
      fullSizeTypeName: photoUrl.attachments.fullSizeUrl,
      message: photoUrl.message,
    }));
  };

  useEffect(() => {
    dispatch(setFetchingPhotoalbumDataVkApi(true));
    dispatch(getJsonpVkApiData({method: "photos.get", count: 100, requestParams: [`album_id=${idPhotoAlbum}`]}));
  }, [dispatch, idPhotoAlbum]);

  useEffect(() => {
    const clearScroll = overlayRef.current;
    
    if(overlayRef.current) {
      disableBodyScroll(overlayRef.current);
    }
    
    return () => enableBodyScroll(clearScroll);
  }, [overlayRef]);
  const PhotoAlbumContent = () => {

    return (
    <PhotosWrapper >
      {dataPhotoAlbum.response ? dataPhotoAlbum.messages.map((item, i) => (
        <PhotoWrapper key={i} onClick={() => openFullSizePhoto(item)}>
          <img src={item.attachments.url} alt=""/>
        </PhotoWrapper>
      )) :
        <MessageWrapper >
          <ErrorMessage error={dataPhotoAlbum?.messages}/>
        </MessageWrapper>}
    </PhotosWrapper>
  )}

  return (
    <Overlay
      id="photoAlbumOverlay"
      ref={overlayRef}
      onClick={closeModalOverlay}>
      <CloseModalButtonWrapper >
        <CloseModalButton closeModal={closeModal}/>
      </CloseModalButtonWrapper>
      {isFetching ? <Preloader/> 
      : dataPhotoAlbum && <PhotoAlbumContent/>}
    </Overlay>
  );
};
