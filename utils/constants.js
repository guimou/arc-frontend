const env = require("env-var");
const PORT = env.get("PORT").default("8080").asString();
const IP = env.get("IP").default("0.0.0.0").asString();
const LOG_LEVEL = env.get("LOG_LEVEL").default("info").asString();
const OBJECT_DETECTION_URL = env
  .get("OBJECT_DETECTION_URL")
  .default("http://localhost:8000/predictions")
  .asString();
const S3_ENDPOINT = env.get("S3_ENDPOINT").asString();
const S3_BUCKET = env.get("S3_BUCKET").asString();
const S3_PREFIX = env.get("S3_PREFIX").asString();
const S3_ACCESS_KEY_ID = env.get("S3_ACCESS_KEY_ID").asString();
const S3_SECRET_ACCESS_KEY = env.get("S3_SECRET_ACCESS_KEY").asString();

const constants = {
  PORT,
  IP,
  LOG_LEVEL,
  OBJECT_DETECTION_URL,
  S3_ENDPOINT,
  S3_BUCKET,
  S3_PREFIX,
  S3_ACCESS_KEY_ID,
  S3_SECRET_ACCESS_KEY,
};

console.log(constants)
module.exports = constants;
