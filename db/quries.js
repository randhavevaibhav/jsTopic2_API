// `select mt.topic_name as main_topic,st.topic_name as sub_topic,st2.topic_name as sub_topic_2,st2.code_txt from main_topics mt
//     join sub_topics st on mt.id=st.main_topic_id
//     join sub_topics_2 st2 on st.id=st2.sub_topic_id
//     where mt.topic_name='${topicname}`

export const getTopicsQuery = (topicname) => {
  return `select mt.topic_name as main_topic,st.topic_name as sub_topic,st2.topic_name as sub_topic_2,st2.code_txt,st2.explanation from main_topics mt
    join sub_topics st on mt.id=st.main_topic_id
    join sub_topics_2 st2 on st.id=st2.sub_topic_id
    where mt.topic_name='${topicname}'`;
};
