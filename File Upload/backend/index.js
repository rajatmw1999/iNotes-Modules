const express = require("express");
const app = express()
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");


app.get('/upload', async(req, res) => {
    const client = new S3Client({accessKeyId: 'AKIAU6ZPXU5LT4UFZRSL', secretAccessKey: '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'});
    const command = new GetObjectCommand({Bucket: 'testingbucket11june',
        Key: 'myfilename.jpg',
        Expires: 3600});
    const url = await getSignedUrl(client, command, { expiresIn: 3600 });
    res.send(url);
});

app.listen(8080,function(error) {
	if(error) throw error
		console.log("Server created Successfully on PORT 8080")
})
