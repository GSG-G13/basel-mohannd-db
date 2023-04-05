const { getUser } = require("../database/queries");
const getUserData = (req, res) => {
  const { username } = req.params;
  getUser(username)
    .then((userData) => console.log(userData.rows))
    .catch((erro) => console.log("server Error"));
};

module.exports = {
  getUserData,
};
