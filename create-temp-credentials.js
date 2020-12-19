const AWS = require('aws-sdk');
const STS = new AWS.STS();

const createTemporaryAWSCredentials = async() => {
	const {
		Credentials: {
			AccessKeyId,
			SecretAccessKey,
			SessionToken,
		},
	} = await STS.assumeRole({
		RoleArn: process.env.SP_ROLE_ARN, // pass role arn that you used while creating your amazon seller app
		RoleSessionName: 'sp-api',
	}).promise();

	return {
		AccessKeyId,
		SecretAccessKey,
		SessionToken,
	};
};
