import _ from 'lodash';
import parseFile from './parseFile.js';
import YAML from "yaml";

const stringify = {
  json: JSON.stringify,
  yaml: YAML.stringify
}

const genDiff = (pathOne, pathTwo, type = 'json') => {
  const dataOne = parseFile(pathOne);
  const dataTwo = parseFile(pathTwo);

  const allKeys = _.sortBy(_.union(Object.keys(dataOne), Object.keys(dataTwo)));
  const result = {};
  for (const key of allKeys) {
    let name = key;
    if (!Object.hasOwn(dataOne, key)) {
      name = `+ ${key}`;
      result[name] = dataTwo[key];
    } else if (!Object.hasOwn(dataTwo, key)) {
      name = `- ${key}`;
      result[name] = dataOne[key];
    } else if (dataOne[key] !== dataTwo[key]) {
      name = `- ${key}`;
      result[name] = dataOne[key];
      name = `+ ${key}`;
      result[name] = dataTwo[key];
    } else {
      name = `  ${key}`;
      result[name] = dataOne[key];
    }
  }

  return stringify[type](result);
};

export default genDiff;