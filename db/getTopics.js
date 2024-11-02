import { createDBconn } from "./createDBconn.js";
import { getTopicsQuery } from "./quries.js";

export const getTopics = async (topicname) => {
  try {
    const pgClient = await createDBconn();

    const queryResult = await pgClient.query(getTopicsQuery(topicname));

    await pgClient.end();
    return queryResult;
  } catch (error) {
    console.log("Error in getTopics() ==> ", error);
  }
};
