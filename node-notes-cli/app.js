const read = require('./read');
const create = require('./create');
const remove = require('./delete');
const update = require('./update');

if (process.argv[2] === 'read') {
  read();
} else if (process.argv[2] === 'create') {
  create();
} else if (process.argv[2] === 'delete') {
  remove();
} else if (process.argv[2] === 'update') {
  update();
}
