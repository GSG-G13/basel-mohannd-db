const { getUser } = require("../database/queries");

const getUserData = (req, res) => {
  const { username } = req.params;
  getUser(username)
    .then((userData) => res.json(userData.rows))
    .catch(() => res.status(500).send("server error"));
};

module.exports = {
  getUserData,
};
