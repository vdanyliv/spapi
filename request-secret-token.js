
const qs = require('qs');
const fetch = require('node-fetch');

module.exports.requestAccessToken = async() => {
   const body = {
      grant_type: 'refresh_token',
      client_id: process.env.LWA_CLIENT_IDENTIFIER,
      refresh_token: process.env.AMAZON_REFRESH_TOKEN,
      client_secret: process.env.LWA_CLIENT_SECRET,
   };

   const acccessToken = await fetch('https://api.amazon.com/auth/o2/token', {
      method: 'POST',
      body: qs.stringify(body),
      headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
   });

   if (acccessToken.ok) {
      return await acccessToken.json();
   } else {
      throw new Error(acccessToken.statusText);
   }
};
