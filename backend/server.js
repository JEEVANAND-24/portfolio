const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// ── Health check ─────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'running', region: 'ap-south-1', uptime: process.uptime() });
});

// ── DevOps stats (gamification data) ─────────────────────────
app.get('/api/stats', (req, res) => {
  res.json({
    level: 8,
    xp: 8450,
    maxXp: 10000,
    deployments: 2347,
    uptime: '99.98%',
    incidents_resolved: 84,
    cost_saved: '$180K',
    certifications: 4,
    years_experience: 5,
  });
});

// ── Fake CloudTrail activity feed ─────────────────────────────
app.get('/api/activity', (req, res) => {
  res.json([
    { time: '2m ago',  event: '✅ Terraform apply completed — EKS node group scaled', type: 'success' },
    { time: '15m ago', event: '🚀 GitHub Actions pipeline triggered — main branch',    type: 'deploy' },
    { time: '1h ago',  event: '📊 Prometheus alert resolved — CPU usage normalized',   type: 'info' },
    { time: '3h ago',  event: '🔒 Security Hub finding remediated — S3 policy updated', type: 'security' },
    { time: '1d ago',  event: '⚙️ ArgoCD sync completed — 12 apps deployed',           type: 'success' },
  ]);
});

// ── Contact form ──────────────────────────────────────────────
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const submission = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    name, email, subject, message,
  };

  // Log to file
  const logPath = path.join(__dirname, 'submissions.jsonl');
  fs.appendFileSync(logPath, JSON.stringify(submission) + '\n');

  console.log(`📩 New contact from ${name} <${email}>: ${subject}`);

  res.json({
    success: true,
    message: 'Record resolved. Response within 24h.',
    id: submission.id,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Operator Console API running on http://localhost:${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   Stats:  http://localhost:${PORT}/api/stats`);
});
