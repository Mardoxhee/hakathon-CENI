const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
