import _ from 'lodash';

const getIndentation = (depth, string = ' ', spaseCount = 4) => string.repeat((depth * spaseCount) - 2);

const string = (value, depth = 1) => {
  if (!_.isObject(value)) {
    return value;
  }
  const keys = Object.keys(value);
  const result = keys.map((key) => {
    const newKey = value[key];
    return `${getIndentation(depth + 1)}  ${key}: ${string(newKey, depth + 1)}`;
  });
  return `{\n${result.join('\n')}\n  ${getIndentation(depth)}}`;
};

const stylish = (data) => {
  const iter = (node, depth = 1) => {
    const result = node.map((item) => {
      const { name, type, value } = item;
      switch (type) {
        case 'nested': {
          return `${getIndentation(depth)}  ${name}: {\n${iter(item.children, depth + 1)}\n${getIndentation(depth)}  }`;
        }
        case 'added':
          return `${getIndentation(depth)}+ ${name}: ${string(value, depth)}`;
        case 'deleted':
          return `${getIndentation(depth)}- ${name}: ${string(value, depth)}`;

        case 'changed':
          return `${getIndentation(depth)}- ${name}: ${string(value.before, depth)}\n${getIndentation(depth)}+ ${name}: ${string(value.after, depth)}`;
        default:
          return `${getIndentation(depth)}  ${name}: ${string(value, depth)}`;
      }
    });
    return result.join('\n');
  };
  return `{\n${iter(data)}\n}`;
};

export default stylish;
