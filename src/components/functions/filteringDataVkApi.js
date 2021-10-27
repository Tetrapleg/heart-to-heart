import { setBoardDataVkApi, setFetchingBoardDataVkApi } from "../../reducers/dataBoardVkApiReducer";
import { setFetchingMarketDataVkApi, setMarketDataVkApi } from "../../reducers/dataMarketVkApiReducer";
import { setFetchingPhotoalbumDataVkApi, setPhotoalbumDataVkApi } from "../../reducers/dataPhotoAlbumVkApiReducer";
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
  const firstElem = arr.find(elem => !elem.with_padding && +elem.width === 320) ||
                    arr.find(elem => +elem.width === 320);
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
  if(!i) {
    // const photoParams = getPhotoParams(item, false);
    // const fullSizeUrl = getPhotoParams(item, true).url;
  }

  if(item.type === "photo") {
    const sizesArr = item.photo?.sizes || item.sizes
    const photoParams = getPhotoParams(sizesArr, i, false);
    const fullSizeUrl = getPhotoParams(sizesArr, i, true).url;

    return ({
      url: photoParams.singleParam.url,
      fullSizeUrl: fullSizeUrl,
      descr: item.photo ? item.photo.text : "",
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

    if(item.doc.ext === "pdf" || item.doc.ext === "docx") {
      return ({
        ext: `${item.doc.ext}`,
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
  const largeContentArr = filteredAttachments.slice(0, 3);

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
  
  return filteredAttachments;
};

const getCurrentMessage = (array) => {
  const filteredTitle = array.find(title => /[0-9а-яёa-z\s]+/iu.test(title));
  const filteredMessage = array.slice(array.indexOf(filteredTitle) + 1);
  const title = filteredTitle ? filteredTitle : "";
  const text = filteredMessage.map(item => item.replace(/([^0-9а-яёa-z\s]{7})+/iug, ""));

  return {title, text};
};

export const filteringDataVkApi = (filtered, dispatch, method) => {
  const documentWidth = document.documentElement.clientWidth - 52;
  const dataWasFiltered = {};
  dataWasFiltered.response = filtered.response ? 1 : 0;

  if(filtered.response) {
    dataWasFiltered.count = filtered.response.count;
    dataWasFiltered.messages = filtered.response.items.map(item => {
      const currentItem = getCurrentItem(item);
      const arrOfText = currentItem.text?.split('\n') || currentItem.description.split('\n');

      if(currentItem.hasOwnProperty("text")) {
        let attachments = null;

        if(method === "photos.get") {
          currentItem.type = "photo";
          attachments = getAttachParams(currentItem, 1);
        }

        return ({
          id: currentItem.id, 
          attachments: currentItem.attachments ? 
                      getCurrentAttachments(currentItem.attachments, documentWidth) : 
                      attachments,
          date: currentItem.date,
          message: getCurrentMessage(arrOfText),
          documentWidth: documentWidth,
        });
      } else if(currentItem.hasOwnProperty("description")) {
        currentItem.photos.forEach(item => item.type = "photo");

        return ({
          id: currentItem.id, 
          attachments: currentItem.photos ? 
                      getCurrentAttachments(currentItem.photos, documentWidth) : 
                      null,
          message: getCurrentMessage(arrOfText),
          nickname: currentItem.sku,
          animalGender: currentItem.title.split(" ").slice(-1).join(""),
          age: currentItem.price.amount !== "" ?
                (currentItem.price.amount / 100).toString().split(".") : "-",
          documentWidth: documentWidth,
          ageDateDifference: currentItem.weight ? [String(currentItem.weight).slice(0, 4), 
                                                    String(currentItem.weight).slice(4, 6),
                                                  ] : null,
        });
      }
      return null;
    });
  } else {
    dataWasFiltered.messages = filtered.error;
  }

  switch(method) {
    case "market.search":
      dispatch(setMarketDataVkApi(dataWasFiltered));
      dispatch(setFetchingMarketDataVkApi(false));
      break;
    case "photos.get":
      dispatch(setPhotoalbumDataVkApi(dataWasFiltered));
      dispatch(setFetchingPhotoalbumDataVkApi(false));
      break;
    case "board.getComments":
      dispatch(setBoardDataVkApi(dataWasFiltered));
      dispatch(setFetchingBoardDataVkApi(false));
      break;
    default:
      dispatch(setFilteredDataVkApi(dataWasFiltered));
  }
};