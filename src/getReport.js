const getIndentation = (depth, string = ' ', spaseCount = 2) => string.repeat(depth * spaseCount);

const report = (data, formatName, depth = 1) => {
  const iter = (node, depth = 1) => {
    const result = node.map((item) => {
      const { name, type, value } = item;
      switch (type) {
        case 'nested': {
          return `${getIndentation(depth)}  ${name}: {\n${iter(item.children, depth + 1)}\n${getIndentation(depth)}  }`;
        }
        case 'added':
          return `${getIndentation(depth)}+ ${name}: ${value}`;
        case 'deleted':
          return `${getIndentation(depth)}- ${name}: ${value}`;

        case 'changed':
          return `${getIndentation(depth)}- ${name}: ${value.before}\n${getIndentation(depth)}+ ${name}: ${value.after}`;
        default:
          return `${getIndentation(depth)}  ${name}: ${value}`;
      }
    });
    return result.join('\n');
  };
  return `{\n${iter(data)}\n}`;
};

export default report;
