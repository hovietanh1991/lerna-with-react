const {describe, it} = require('mocha');
const { expect } = require('chai');
const {userService} = require('../services/UserService');


describe('Test user service', () => {
  const testData = ['Sergey', 'Viet Anh'];

  before(() => {
    testData.forEach(name => userService.addUser(name));
  });

  after(() => {

  });

  it('Test adding user function of user service', async () => {
    expect(userService).not.to.be.undefined;
    expect(userService.userList.length).to.be.equal(2);
    expect(userService.userList[0].id).to.be.equal(1);
    expect(userService.userList[1].id).to.be.equal(2);
    expect(userService.userList[0].name).to.be.equal(testData[0]);
    expect(userService.userList[1].name).to.be.equal(testData[1]);
  });

  it('Test getting user function of user service', async () => {
    expect(userService).not.to.be.undefined;
    expect(userService.userList.length).to.be.equal(2);
    expect(userService.getUserById(1)).not.to.be.undefined;
    expect(userService.getUserById(1).name).to.be.equal(testData[0]);
    expect(userService.getUserById(2)).not.to.be.undefined;
    expect(userService.getUserById(2).name).to.be.equal(testData[1]);
  });
});
