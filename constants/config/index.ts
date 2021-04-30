const isDevEnv = process.env.NODE_ENV !== "production";

export const ROOT_URL = isDevEnv
	? "http://localhost:3000/api"
	: "https://172e8nsw0f.execute-api.us-east-1.amazonaws.com/prod";
