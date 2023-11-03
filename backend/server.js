require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB URI
const dbURI = process.env.DB_URI;

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Define a schema for the waitlist
const WaitlistSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Assumes email addresses should be unique in the waitlist
  }
});

// Create a model from the schema
const Waitlist = mongoose.model('Waitlist', WaitlistSchema);

// POST endpoint to add email to waitlist
app.post('/join-waitlist', async (req, res) => {
  try {
    const { email } = req.body;

    // TODO: Validate email

    // Create a new waitlist entry
    const newEntry = new Waitlist({ email });
    await newEntry.save();

    res.status(201).json({ message: 'Email added to waitlist!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Set the port and start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));