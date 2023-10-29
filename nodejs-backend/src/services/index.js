const users = require("./users/users.service.js");
const classRegisterJson = require("./classRegisterJson/classRegisterJson.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(classRegisterJson);
    // ~cb-add-configure-service-name~
};
