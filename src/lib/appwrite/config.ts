import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: 'https://cloud.appwrite.io/v1',
  projectId: '661f840dc7910493b0a3',
  databaseId: '661f86406172002f8127',
  storageId: '661fb9a3b5aea826bfbb',
  userCollectionId: '661f874a44074d31bd78',
  postCollectionId: '661f867e72759d9476e9',
  savesCollectionId:'661f86c3498b991cfbb7',
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
