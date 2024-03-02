const userService = require('../service/user.service');

class UserController {
    async createUser(req, res){
  try {
    const tenant = await userService.createUser(req.body);
    res.status(200).json(tenant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async getUsers(req, res){
    try {
      const users = await userService.getUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUserById(req, res){
    try {
      const userId = req.params.id;
      const user = await userService.getUserById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateUserById(req, res){
    try {
      const userId = req.params.id;
      const updatedUser = await userService.updateUserById(userId, req.body);
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  deleteUserById = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await userService.deleteUserById(userId);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

}

module.exports = new UserController
