const report = (data) => {
  const result = data.flatMap((item) => {
    const {name, type, value} = item;

    switch(type) {
      case 'added':
        return ` + ${name}: ${value}`;
      case 'deleted':
        return ` - ${name}: ${value}`;
      case 'changed':
        const strOne = ` - ${name}: ${value.before}`;
        const strTwo = ` + ${name}: ${value.after}`;
        return [strOne, strTwo];
      default:
        return `   ${name}: ${value}`;
    }
  });
  return `{\n${result.join('\n')}\n}`;
};

export default report;