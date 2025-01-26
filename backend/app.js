const express = require("express");
const { sequelize } = require("./models");
const categoryRoutes = require("./routes/categoryRoutes")
const eventRoutes = require('./routes/eventRoutes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

sequelize
    .sync({ alter: true })
    .then(() => {
        console.log("Database synced and tables created successfully!");
    })
    .catch((err) => {
        console.error("Error syncing database:", err);
    });


app.use('/api/categories', categoryRoutes)
app.use('/api/events', eventRoutes)

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
