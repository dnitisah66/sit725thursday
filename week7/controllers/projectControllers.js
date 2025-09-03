const Project = require('../models/Projects');


// Serve main page
exports.getHomePage = async (req, res) => {
    try {
        const projects = await Project.find({});
        // Currently just sending the static file
        res.sendFile(__dirname + '/../public/index.html');
    } catch (error) {
        console.log('Error fetching projects:', error);
        res.sendFile(__dirname + '/../public/index.html');
    }
};

// API endpoint for fetching projects
exports.getProjectsAPI = async (req, res) => {
    try {
        const projects = await Project.find({});
        res.json({ statusCode: 200, data: projects, message: 'Success' });
    } catch (error) {
        res.status(500).json({ statusCode: 500, message: 'Server Error' });
    }
};
