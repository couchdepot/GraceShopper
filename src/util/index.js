// a util function that accepts an array of objects and prop and return an array of the corresponding value to the prop
export const mapArrByProps = (arrOfObjs, prop) => {
  return arrOfObjs.map(elem => {
    return elem[prop];
  });
};

// accepts 1) an array of objects 2) a key 3) an array of values
// returns a filtered array of objects from the first argument
export const filterArrByKey = (arrToFilter, key, filterCriteriaArr) => {
  return filterCriteriaArr.map(criterion => {
    return arrToFilter.find(elem => {
      return elem[key] == criterion;
    });
  });
};
