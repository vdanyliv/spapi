const request = signedRequest => {
    return new Promise((resolve, reject) => {
      https.request(signedRequest, (res) => {
        let data = '';
        const {statusCode} = res;

        res.on('data', chunk => (data += chunk));
        res.on('end', async() => {
          const res = data && JSON.parse(data);

          if (statusCode === 200) {
            resolve(res);
          } else {
            reject({statusCode, res});
          }
        });
      }).end();
    });
};
