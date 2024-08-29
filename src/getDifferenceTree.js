import _ from "lodash";

const getDifferenceTree = (dataOne,dataTwo) => {
  const allKeys = _.sortBy(_.union(Object.keys(dataOne), Object.keys(dataTwo)));

  return allKeys.map((key) => {
    if (!Object.hasOwn(dataOne, key)) {
      return { name: key, type: 'added', value: dataTwo[key] }
    } else if (!Object.hasOwn(dataTwo, key)) {
      return { name: key, type: 'delete', value: dataOne[key] }
    } else if (dataOne[key] !== dataTwo[key]) {
      return { name: key, type: 'change', value: { before: dataOne[key], after: dataTwo[key] } }
    } else {
      return { name: key,type: 'unchanged', value: dataOne[key] }
    }
  });
}

export default getDifferenceTree;