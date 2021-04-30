import { Db } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import middleware from "../../middleware/mongodb";

const handler = nextConnect()
	.use(middleware)
	.post<NextApiRequest & { mongoDb: Db }, NextApiResponse>(
		async (req, res) => {
			const body = req.body;

			// Extract data
			const { name, email, comments } = body;

			const docId = await req.mongoDb
				.collection("form-responses")
				.insertOne({
					name,
					email,
					comments,
				});

			return res.status(200).json({ id: docId });
		}
	);

export default handler;
