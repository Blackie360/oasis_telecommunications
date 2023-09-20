// auth.js

class AuthService {
    constructor() {
      this.users = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
        // Add more users as needed
      ];
    }
  
    authenticate(username, password) {
      const user = this.users.find(
        (u) => u.username === username && u.password === password
      );
      return !!user;
    }
  }
  
  module.exports = AuthService;
  