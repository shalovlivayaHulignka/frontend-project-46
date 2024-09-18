const getIndentation = (depth, string = ' ', spaseCount = 2) => string.repeat(depth * spaseCount);

const report = (data, formatName, depth = 1) => {
  const result = data.flatMap((item) => {
    const { name, type, value } = item;

    switch (type) {
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
  return `{\n${result.join('\n')}\n}`;
};

export default report;
