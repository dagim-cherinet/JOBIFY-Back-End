const createJob = async (req, res) => {
  res.send("create job");
};

const getAllJob = async (req, res) => {
  res.send("get all job");
};
const deleteJob = async (req, res) => {
  res.send("delete job");
};
const updateJob = async (req, res) => {
  res.send("update job");
};
const showStats = async (req, res) => {
  res.send("show stats");
};

export { createJob, getAllJob, deleteJob, updateJob, showStats };
