const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const clientRoutes = require("./routes/client-routes");
app.use(clientRoutes);

const apiRoutes = require("./routes/fitness-routes");
app.use(apiRoutes);

app.listen(PORT, () => console.log(`Listening at: http://localhost:${PORT}`));