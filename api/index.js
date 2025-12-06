const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  // ====== WAJIB! Tambahkan header CORS ======
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  // ===========================================

  const dbFile = path.join(__dirname, '../niatwudhu.json');

  fs.readFile(dbFile, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read database' });
      return;
    }

    const db = JSON.parse(data);
    res.status(200).json(db);
  });
};
