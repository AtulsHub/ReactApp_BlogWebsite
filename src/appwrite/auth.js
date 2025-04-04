import conf from "../conf/conf.js";
import { ID, Client, Account } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount(ID, email, password, name) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        return this.login(email, password);
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite service :: createAccount :: error", error)
    }
  }

  async login(email, password) {
    try {
      const userLogin = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return userLogin;
    } catch (error) {
      console.log("Appwrite service :: login :: error", error)
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error)
    }
  }

  async logout() {
    try {
      return await this.account.deleteSession();
    } catch (error) {
      console.log("Appwrite service :: logout :: error", error)
    }
  }
}


const authService = new AuthService()
export default authService;
export { ID } from 'appwrite';

