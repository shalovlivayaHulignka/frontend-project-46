import YAML from 'yaml';

const parses = {
  json: JSON.parse,
  yaml: YAML.parse,
  yml: YAML.parse,
};

export default (data, format) => parses[format](data);
