import { getTopics } from "../db/getTopics.js";
export const topicController = async (req, res) => {
  try {
    // const { topicname } = req.query;
    const topicname = "Array";
    console.log("req.body ====> ", topicname);
    const result = await getTopics(topicname);
    console.log("query result ===> ", result);
    console.log("query result ===> ", result.rows);
    res.status(200).send(result.rows);
  } catch (error) {
    console.log("Error in topicController ==> ", error);
  }
};
