const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
// const studentRoutes = require('./routes/studentRoutes');
const imageRoutes = require('./routes/imageRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
// app.use('/uploads', express.static('uploads')); // Serve uploaded files
app.use('/api/image', imageRoutes);

app.get('/', (req, res) => {
    res.send('API running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
