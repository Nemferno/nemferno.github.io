import { Db } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import middleware from "../../middleware/mongodb";

const handler = nextConnect()
	.use(middleware)
	.get<NextApiRequest & { mongoDb: Db }, NextApiResponse>(
		async (req, res) => {
			const cursor = await req.mongoDb.collection("projects").find();

			return res.status(200).json(await cursor.toArray());
		}
	);

export default handler;
