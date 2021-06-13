import { setBoardDataVkApi, setFetchingBoardDataVkApi } from "../../reducers/dataBoardVkApiReducer";
import { setFilteredDataVkApi } from "../../reducers/dataVkApiReducer";

const getCurrentItem = (item) => {
  return item.attachments ? item : item.copy_history?.[0] || item;
};

const getPhotoParams = (arr, i, fullSize) => {
  if(fullSize) return arr.find(elem => elem.type === "z") || 
                      arr.find(elem => elem.type === "y") ||
                      arr.find(elem => elem.type === "x");

  const firstElem = arr.find(elem => elem.type === "r" || elem.type === "q");
  const secondElem = arr.find(elem => elem.type === "p" || elem.type === "o");
  if(i < 3) {
    return ({
      singleParam: firstElem,
      additionalParam: secondElem,
    });
  } else {
    return ({
      singleParam: secondElem,
      additionalParam: firstElem,
    });
  }
};

const getVideoParams = (arr, i) => {
  const firstElem = arr.find(elem => !elem.with_padding && +elem.width === 320);
  const secondElem = arr.find(elem => +elem.width === 160 || +elem.width === 130);
  if(i < 3) {
    return ({
      singleParam: firstElem,
      additionalParam: secondElem,
    });
  } else {
    return ({
      singleParam: secondElem,
      additionalParam: firstElem,
    });
  }
};

const getDocParams = (arr, i) => {
  const firstElem = arr.find(elem => elem.type === "x" || elem.type === "o");
  const secondElem = arr.find(elem => elem.type === "m" || elem.type === "d");
  if(i < 3) {
    return ({
      singleParam: firstElem,
      additionalParam: secondElem,
    });
  } else {
    return ({
      singleParam: secondElem,
      additionalParam: firstElem,
    });
  }
};

const getAttachParams = (item, i) => {
  if(item.type === "photo") {
    const photoParams = getPhotoParams(item.photo.sizes, i, false);
    const fullSizeUrl = getPhotoParams(item.photo.sizes, i, true).url;

    return ({
      url: photoParams.singleParam.url,
      fullSizeUrl: fullSizeUrl,
      descr: item.photo.text,
      width: photoParams.singleParam.width,
      height: photoParams.singleParam.height,
      aspectRatio: Math.round(photoParams.singleParam.height * 100 / photoParams.singleParam.width) / 100,
      additionalParam: {
        url: photoParams.additionalParam.url,
        width: photoParams.additionalParam.width,
        height: photoParams.additionalParam.height,
        aspectRatio: Math.round(photoParams.additionalParam.height * 100 / photoParams.additionalParam.width) / 100,
      },
    });
  } else if(item.type === "video") {
    const videoParams = getVideoParams(item.video.image, i);

    return ({
      url: videoParams.singleParam.url,
      fullSizeUrl: [item.video.owner_id, item.video.id],
      descr: item.video.title,
      duration: item.video.duration,
      width: videoParams.singleParam.width,
      height: videoParams.singleParam.height,
      aspectRatio: Math.round(videoParams.singleParam.height * 100 / videoParams.singleParam.width) / 100,
      additionalParam: {
        url: videoParams.additionalParam.url,
        width: videoParams.additionalParam.width,
        height: videoParams.additionalParam.height,
        aspectRatio: Math.round(videoParams.additionalParam.height * 100 / videoParams.additionalParam.width) / 100,
      },
    });
  } else if(item.type === "doc") {

    if(item.doc.ext === "pdf") {
      return ({
        ext: "pdf",
        url: item.doc.url,
        fullSizeUrl: item.doc.url,
        descr: item.doc.title,
        width: 200,
        height: 300,
        aspectRatio: Math.round(300 * 100 / 200) / 100,
        additionalParam: {
          url: item.doc.url,
          width: 100,
          height: 150,
          aspectRatio: Math.round(150 * 100 / 100) / 100,
        },
      });
    } 

    const docParams = getDocParams(item.doc.preview.photo.sizes, i);
    const singleWidth = i < 3 ? docParams.singleParam.width / 2 : docParams.singleParam.width;
    const singleHeight = i < 3 ? docParams.singleParam.height / 2 : docParams.singleParam.height;
    const additionalWidth =  i < 3 ? docParams.additionalParam.width : docParams.additionalParam.width / 2;
    const additionalHeight = i < 3 ? docParams.additionalParam.height : docParams.additionalParam.height / 2;


    return ({
      url: docParams.singleParam.src,
      fullSizeUrl: item.doc.url,
      descr: item.doc.title,
      width: singleWidth,
      height: singleHeight,
      aspectRatio: Math.round(singleHeight * 100 / singleWidth) / 100,
      additionalParam: {
        url: docParams.additionalParam.src,
        width: additionalWidth,
        height: additionalHeight,
        aspectRatio: Math.round(additionalHeight * 100 / additionalWidth) / 100,
      },
    });
  }
};

const specifyingDimensions = (maxHeightOfLargeImg, maxHeightOfSmallImg, documentWidth, filteredAttachments) => {
  // console.log("maxHeightOfLargeImg:", maxHeightOfLargeImg, "  ",
  // "maxHeightOfSmallImg:", maxHeightOfSmallImg, "  ",
  // "documentMaxWidth:", documentWidth);
  const largeContentArr = filteredAttachments.slice(0, 3);
  // const smallContentArr = filteredAttachments.slice(3);

  // console.log(largeContentArr.reduce((acc, item) => acc + item.params.height, 0));

  let exceedingTheWidth = false;
  largeContentArr.forEach((item) => {
    const elem = item.params;

    if(elem.height > maxHeightOfLargeImg * 0.7) {
      const differentHeight = maxHeightOfLargeImg / elem.height;
      elem.height = maxHeightOfLargeImg;
      elem.width = Math.round(elem.width * differentHeight);
      exceedingTheWidth = elem.width > documentWidth ? true : exceedingTheWidth;
    }
  });

  if(exceedingTheWidth) {
    largeContentArr.forEach((item, i) => {
      const elem = item.params;

      if(elem.width > documentWidth) {
        const differentWidth = documentWidth / elem.width;
        elem.width = documentWidth;
        elem.height = elem.height * differentWidth;
      }
    })
  }
  return largeContentArr;
};

const getCurrentAttachments = (attachments, documentWidth) => {
  let maxHeightOfLargeImg = 0;
  let maxHeightOfSmallImg = 0;
  const typeSorted = attachments.filter((item => item.type === "photo" ||
                                                item.type === "video" ||
                                                item.type === "doc"));

  const filteredAttachments = typeSorted.map((item, i) => ({
                                                  type: item.type,
                                                  params: getAttachParams(item, i),
                                                }));

  filteredAttachments.forEach((elem, i) => {
    if(i < 3 && +elem.params.height > maxHeightOfLargeImg) {
      maxHeightOfLargeImg = +elem.params.height;
    } else if(i > 3 && +elem.params.height > maxHeightOfSmallImg) {
      maxHeightOfSmallImg = +elem.params.height;
    }
  });

  specifyingDimensions(maxHeightOfLargeImg,
                      maxHeightOfSmallImg,
                      documentWidth,
                      filteredAttachments);
  // console.log(updatedDimensions);
  return filteredAttachments;
};

const getCurrentMessage = (array) => {
  const filteredTitle = array.find(title => /[0-9а-яёa-z\s]+/iu.test(title));
  const filteredMessage = array.slice(array.indexOf(filteredTitle) + 1);
  const title = filteredTitle ? filteredTitle.replace(/[^0-9а-яёa-z\s]+/iu, "") : "";
  const text = filteredMessage.map(item => item.replace(/([^0-9а-яёa-z\s]{7})+/iug, ""));

  return {title, text};
};

export const filteringDataVkApi = (filtered, dispatch, method) => {
  const documentWidth = document.documentElement.clientWidth - 52;
  const dataWasFiltered = {};
  dataWasFiltered.response = filtered.response ? 1 : 0;
  console.log(filtered);
  // debugger;
  if(filtered.response) {
    dataWasFiltered.count = filtered.response.count;
    dataWasFiltered.messages = filtered.response.items.map(item => {
      const currentItem = getCurrentItem(item);
      const arrOfText = currentItem.text.split('\n');
  
      return ({
        id: currentItem.id, 
        attachments: currentItem.attachments ? 
                    getCurrentAttachments(currentItem.attachments, documentWidth) : 
                    null,
        date: currentItem.date,
        message: getCurrentMessage(arrOfText),
        documentWidth: documentWidth,
      });
    });
  } else {
    dataWasFiltered.messages = filtered.error;
  }

  switch(method) {
    case "board.getComments":
      dispatch(setBoardDataVkApi(dataWasFiltered));
      dispatch(setFetchingBoardDataVkApi(false));
      break;
    default:
      dispatch(setFilteredDataVkApi(dataWasFiltered));
  }
  
  // console.log("data: ", filtered);
  // console.log("data was filtered: ", dataWasFiltered);
  // console.log("sizes: ", documentMaxWidth);
};