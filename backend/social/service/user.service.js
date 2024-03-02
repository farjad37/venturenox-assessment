const User = require('..//entity/user.entity');

class UserService {
    async createUser(userData) {
        try {
          const user = await User.create(userData);
          return user;
        } catch (error) {
          throw new Error(error.message);
        }
      }

  async getUsers() {
    return await User.findAll();
  }

  async getUserById(userId) {
    return await User.findByPk(userId);
  }

  async updateUserById(userId, userData) {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('User not found');
    }
    await user.update(userData);
    return user;
  }

  async deleteUserById(userId) {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('User not found');
    }
    const deleteUser = await user.destroy();
    if(deleteUser)
    return {message:`Tenant successfully deleted`}
  }
}

module.exports = new UserService();