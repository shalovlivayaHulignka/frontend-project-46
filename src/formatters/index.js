import stylish from './stylish.js';
import plain from './plain.js';

export default (data, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    case 'json':
      return JSON.stringify(data);
    default:
      throw new Error(
        'This format is not supported. Use formats: stylish, plain, json',
      );
  }
};
