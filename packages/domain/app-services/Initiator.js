const {userService} = require('../services/UserService');

class UserInitiator {
  loadUserFromServer() {
    const userMockData = ['Sergey', 'Viet Anh'];
    userMockData.forEach(name => userService.addUser(name));
  }
}


const userInitiator = new UserInitiator();

//userInitiator.loadUserFromServer();
//console.log(JSON.stringify(userService.userList));

module.exports = {
  userInitiator
}
