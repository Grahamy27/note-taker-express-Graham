const express = require("express");
const api_routes = require('./routes/apiRoutes')
const html_routes = require('./routes/htmlRoutes')
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(html_routes)
app.use(api_routes)


require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});