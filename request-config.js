const {regions} = require('./regions');

const requestConfig = (marketplaceId, access_token, tempCreds) => {
	const {
		AccessKeyId,
		SessionToken,
		SecretAccessKey,
	} = tempCreds;

	const {
		aws_region,
		end_point,
	} = regions.get(marketplaceId);

	const params = {
		path: `/catalog/v0/items?MarketplaceId=${marketplaceId}&Query=toys`,
		method: 'GET',
		host: end_point,
		region: aws_region,
		service: 'execute-api',
		headers: {
			'User-Agent': 'MyAmazonApp/1.0 (Language=JavaScript;)',
			'x-amz-access-token': access_token,
		},
	};
	
	return aws4.sign(params, {AccessKeyId, SecretAccessKey, SessionToken});
}
