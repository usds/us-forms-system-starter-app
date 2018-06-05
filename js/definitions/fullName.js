const suffixes = [
  'Jr.',
  'Sr.',
  'II',
  'III',
  'IV'
];

const schema = {
  type: 'object',
  properties: {
    first: {
      type: 'string',
      pattern: '^.*\\S.*',
      minLength: 1,
      maxLength: 30
    },
    middle: {
      type: 'string'
    },
    last: {
      type: 'string',
      pattern: '^.*\\S.*',
      minLength: 2,
      maxLength: 30
    },
    suffix: {
      type: 'string',
      'enum': suffixes
    },
  },
  required: [
    'first',
    'last'
  ]
};

export default schema;
