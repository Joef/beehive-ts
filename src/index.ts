import express from 'express';

const app = express();
const port = process.env.PORT || 3000; // default port to listen

// Create visits array as basic in-memory storage
const visits = [];

// Create 'Add Visits' API endpoint
app.post('/api/visits', (req, res) => {

    // Store the supplied visit data
    visits.push(req.body);

    const visitId = visits.length;
    // eslint-disable-next-line no-console
    console.log(`Stored visit count: ${visitId}`);

    // send the response
    res.status(201).json({ 'id': visitId });
});

// Start app
app.listen(port, () => {
    console.log(`🐝 Beehive API listening on port ${port}`);
});