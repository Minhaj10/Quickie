function getLogin(res, req, next) {
  res.render("index", {
    title: "Login-Quickie",
  });
}

module.exports = {
  getLogin,
};
