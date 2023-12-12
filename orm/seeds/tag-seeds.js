const { Tag } = require('../../models');

const tagData = [
  {
    tag_name: 'jazz',
  },
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'pink',
  },
  {
    tag_name: 'silver',
  },
  {
    tag_name: 'pop culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
