import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setFullSizePDF } from '../../reducers/displayingFullSizeContentReduser';

const Figure = styled.figure`
  font-size: 1rem;
  background: rgb(204,204,255);
  border-radius: 0.2em;
  display: block;
  text-align: center;
  float: left;
  margin: 1.5em;
  padding: 0.5em;
  cursor: pointer;
`;

const Images = styled.img`
  border: 1px solid #8b8e4b;
  /* border: 1px solid rgba(255,21,49,0.9); */
  min-height: 100%;
`;

const Figcaption = styled.figcaption`
  margin: 0.2em auto 0;
  font-weight: 300;
  font-size: 1em;
  width: min-content;
`;

export const FigureImg = ({ ...props }) => {
  const dispatch = useDispatch();

  const openFullSizeModal = () => {
    const typeFile = props.fullSizeTypeFile.toLowerCase();

    if(typeFile === "pdf") {
      const urlPDF = `${props.alt}_fullsize.pdf`;
      dispatch(setFullSizePDF(urlPDF));
    }
  };

  return(
    <Figure onClick={openFullSizeModal}>
      <Images 
        src={props.src}
        alt={props.alt}
      />
      <Figcaption >{props.descr}</Figcaption>
    </Figure>
  )
};