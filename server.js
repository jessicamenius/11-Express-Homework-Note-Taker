const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

const clientRoutes = require("./routes/client-routes.js");
app.use(clientRoutes);

const apiRoutes = require("./routes/api-routes.js");
app.use(apiRoutes);

const dbRoutes = require("./routes/db-routes.js");
app.use(dbRoutes);

app.listen(PORT, () => console.log(`listening at: http://localhost:${PORT}`));
