

const register = (req, res) => {
  res.json({ ok: true, route: "register" });
};

const login = (req, res) => {
  res.json({ ok: true, route: "login" });
};
export { login, register };
