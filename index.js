console.log("ITS WORKING");

const express = require("express");

const server = express();

const PORT = process.env.PORT || 5000

server.use(express.json());

server.get("/api/web", (res, req) => {
  res.json({
    cohort: 'Web 41",',
  });
});



server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
