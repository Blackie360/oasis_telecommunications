// auth.test.js

const AuthService = require('./auth');

describe('Authentication Service', () => {
  let authService;

  beforeAll(() => {
    authService = new AuthService();
  });

  it('should authenticate valid user', () => {
    expect(authService.authenticate('user1', 'password1')).toBe(true);
  });

  it('should reject invalid username', () => {
    expect(authService.authenticate('invalidUser', 'password1')).toBe(false);
  });

  it('should reject invalid password', () => {
    expect(authService.authenticate('user1', 'invalidPassword')).toBe(false);
  });

  it('should reject empty username and password', () => {
    expect(authService.authenticate('', '')).toBe(false);
  });

  it('should reject empty username', () => {
    expect(authService.authenticate('', 'password1')).toBe(false);
  });

  it('should reject empty password', () => {
    expect(authService.authenticate('user1', '')).toBe(false);
  });

  it('should handle case sensitivity in username', () => {
    expect(authService.authenticate('User1', 'password1')).toBe(false);
  });

  it('should handle case sensitivity in password', () => {
    expect(authService.authenticate('user1', 'Password1')).toBe(false);
  });

  it('should authenticate multiple valid users', () => {
    expect(authService.authenticate('user2', 'password2')).toBe(true);
  });

  it('should reject multiple invalid users', () => {
    expect(authService.authenticate('invalidUser1', 'invalidPassword1')).toBe(
      false
    );
    expect(authService.authenticate('invalidUser2', 'invalidPassword2')).toBe(
      false
    );
  });

  it('should handle edge cases', () => {
    expect(authService.authenticate(undefined, undefined)).toBe(false);
    expect(authService.authenticate(null, null)).toBe(false);
  });
});
