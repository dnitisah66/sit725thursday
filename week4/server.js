var express = require("express")
var app = express()
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

// Define Project Schema
const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
});

const Project = mongoose.model('Project', ProjectSchema);

// Serve the main page with data from MongoDB
app.get('/', async (req, res) => {
    try {
        const projects = await Project.find({});
        // You can pass data to your HTML template here
        // For now, just serve the static file
        res.sendFile(__dirname + '/public/index.html');
    } catch (error) {
        console.log('Error fetching projects:', error);
        res.sendFile(__dirname + '/public/index.html');
    }
});

// Simple API endpoint (optional - for if you want to check data)
app.get('/api/projects', async (req, res) => {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: 'Success' });
});

var port = process.env.port || 3000;
app.listen(port, () => {
    console.log("App listening to: " + port)
})