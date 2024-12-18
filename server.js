const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Example backend endpoint to kick a player
app.post('/kick-player', async (req, res) => {
    const { playerName } = req.body;

    if (!playerName) {
        return res.json({ status: 'failure', message: 'Player name is required' });
    }

    try {
        // Call your Roblox game server to kick the player
        // This is an example; modify it to suit how you interact with Roblox
        // Example request to Roblox API (This is just a placeholder for actual game server code)
        const response = await axios.post('https://your-roblox-game-server.com/kick-player', {
            playerName: playerName
        });

        // Respond back to frontend
        if (response.data.status === 'success') {
            res.json({ status: 'success', message: 'Player kicked successfully!' });
        } else {
            res.json({ status: 'failure', message: 'Player could not be found or kicked.' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.json({ status: 'failure', message: 'Failed to kick the player' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
