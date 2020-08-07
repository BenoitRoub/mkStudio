const config = {
  production: {
    dbUrl: process.env.DB_URI,

    s3_bucket: process.env.s3BucketName,

    AWSAccessKeyId: process.env.AWSAccessKeyId,
    AWSSecretKey: process.env.AWSSecretKey,

    //   mailjet: {
    //     publicKey: "3a1515f8f4d1b22ffd05190047ebd108",
    //     privateKey: "b521e6a44a9a525b298321bcec2f426b",
    //   },
  },

  development: {
    dbUrl: process.env.DB_URI_DEV,

    maxEmailVerificationAttempts: 5,

    s3_bucket: process.env.s3BucketName,

    AWSAccessKeyId: process.env.AWSAccessKeyId,
    AWSSecretKey: process.env.AWSSecretKey,

    //   mailjet: {
    //     publicKey: "3a1515f8f4d1b22ffd05190047ebd108",
    //     privateKey: "b521e6a44a9a525b298321bcec2f426b",
    //   },
  },
};

let mode;
if (process.env.NODE_ENV === "production") {
  mode = "production";
} else {
  mode = "development";
}

console.log("Config mode :", mode);
//remettre mode
module.exports = config[mode];
