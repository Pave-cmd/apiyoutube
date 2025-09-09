const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'youtube-filter.html'));
});

// Handle 404
app.use((req, res) => {
    res.status(404).send('404 - Stránka nenalezena');
});

app.listen(PORT, () => {
    console.log(`🎬 YouTube Filter App běží na portu ${PORT}`);
    console.log(`🌐 Otevřete prohlížeč na: http://localhost:${PORT}`);
    console.log('💡 Pro ukončení stiskněte Ctrl+C');
});