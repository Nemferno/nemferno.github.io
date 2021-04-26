import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

if (!uri) {
	throw new Error(
		"Please define the MONGODB_URI environment variable inside .env.local"
	);
}

if (!dbName) {
	throw new Error(
		"Please define the MONGODB_DB environment variable inside .env.local"
	);
}

const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

async function database(req, _, next) {
	if (!client.isConnected()) {
		await client.connect();
	}

	req.mongoClient = client;
	req.mongoDb = client.db(dbName);
	return next();
}

const middleware = nextConnect();
middleware.use(database);

export default middleware;
