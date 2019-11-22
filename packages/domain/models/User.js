class User {
  static counter = 0;

  constructor(name) {
    this.id = ++User.counter;
    this.name = name;
  }
}

module.exports = {
  User
};
