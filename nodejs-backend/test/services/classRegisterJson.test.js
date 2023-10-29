const assert = require('assert');
const app = require('../../src/app');

describe('\'classRegisterJson\' service', () => {
  it('registered the service', () => {
    const service = app.service('classRegisterJson');

    assert.ok(service, 'Registered the service (classRegisterJson)');
  });
});
