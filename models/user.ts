export class User {
  userId: number;
  username: string;
  userPassword: string;
  success: boolean;

  constructor(args?) {
    if (args) {
      this.userId = args.user_id;
      this.username = args.username;
      this.userPassword = args.user_password;
      this.success = args.success;
    }
}
}
