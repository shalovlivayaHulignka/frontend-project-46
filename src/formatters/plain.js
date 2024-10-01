import _ from 'lodash';

const string = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return typeof value === 'string' ? `'${value}'` : value;
};

const plain = (data) => {
  const iter = (node, path = '') => {
    const result = node.flatMap((item) => {
      const {
        type, value, name, children,
      } = item;
      const currentPath = path ? `${path}.${name}` : name;

      switch (type) {
        case 'nested':
          return iter(children, currentPath);
        case 'deleted':
          return `Property '${currentPath}' was removed`;
        case 'added':
          return `Property '${currentPath}' was added with value: ${string(value)}`;
        case 'changed':
          return `Property '${currentPath}' was updated. From ${string(value.before)} to ${string(value.after)}`;
        case 'unchanged':
          return '';
        default:
          throw new Error(`Unknown type ${type}`);
      }
    });

    return result.filter((item) => item !== '').join('\n');
  };
  return iter(data);
};

export default plain;
