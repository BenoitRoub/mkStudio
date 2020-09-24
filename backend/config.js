const config = {
  production: {
    dbUrl: process.env.DB_URI,

    s3_bucket: process.env.s3BucketName,

    AWSAccessKeyId: process.env.AWSAccessKeyId,
    AWSSecretKey: process.env.AWSSecretKey,
  },

  development: {
    dbUrl: process.env.DB_URI_DEV,

    maxEmailVerificationAttempts: 5,

    s3_bucket: process.env.s3BucketName,

    AWSAccessKeyId: process.env.AWSAccessKeyId,
    AWSSecretKey: process.env.AWSSecretKey,
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
