import { MongoClient } from 'mongodb';

/**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */
// let uri = `mongodb+srv://admin:${process.env.PASSWORD}@${process.env.CLUSTER}.mongodb.net/?retryWrites=true&w=majority?maxIdleTimeMS=10000`;

// if (process.env.NODE_ENV !== "production") {
let uri = 'mongodb://localhost:27017/climb?maxIdleTimeMS=10000';
// }

const client = new MongoClient(uri);

export default client;

