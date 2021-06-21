export const addAsidePhotos = (arr) => {
  
  return arr.slice(0,2).map(item => {
    return ({
      ...item,
      params: {
        ...item.params,
        aspectRatio: item.params.additionalParam.aspectRatio,
        height: 85 / item.params.additionalParam.width * item.params.additionalParam.height,
        url: item.params.additionalParam.url,
        width: 85,
      }

    });
  })
};