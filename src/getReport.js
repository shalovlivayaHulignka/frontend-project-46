const report = (data) => {
  const result = data.flatMap((item) => {
    const { name, type, value } = item;
    const spaseCount = 2;
    const str = ' ';

    switch (type) {
      case 'added':
        return `${str.repeat(spaseCount)}+ ${name}: ${value}`;
      case 'deleted':
        return `${str.repeat(spaseCount)}- ${name}: ${value}`;
      case 'changed':
        const strOne = `${str.repeat(spaseCount)}- ${name}: ${value.before}`;
        const strTwo = `${str.repeat(spaseCount)}+ ${name}: ${value.after}`;
        return [strOne, strTwo];
      default:
        return `${str.repeat(spaseCount * 2)}${name}: ${value}`;
    }
  });
  return `{\n${result.join('\n')}\n}`;
};

export default report;
