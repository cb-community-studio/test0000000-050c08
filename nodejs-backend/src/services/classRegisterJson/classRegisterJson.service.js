const { ClassRegisterJson } = require('./classRegisterJson.class');
const createModel = require('../../models/classRegisterJson.model');
const hooks = require('./classRegisterJson.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/classRegisterJson', new ClassRegisterJson(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('classRegisterJson');

  service.hooks(hooks);
};