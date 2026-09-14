const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// ── Rate Limiting Store (In-Memory) ───────────────────────────
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 mins
const MAX_REQUESTS_PER_WINDOW = 5;

const rateLimiter = (req, res, next) => {
  const ip = req.ip || req.headers['x-forwarded-for'] || 'unknown';
  const now = Date.now();
  const record = rateLimitStore.get(ip) || { count: 0, startTime: now };

  if (now - record.startTime > RATE_LIMIT_WINDOW_MS) {
    record.count = 1;
    record.startTime = now;
  } else {
    record.count += 1;
  }

  rateLimitStore.set(ip, record);

  if (record.count > MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({
      error: 'Rate limit exceeded. Route 53 throttling active. Please retry in 15 minutes.',
    });
  }

  next();
};

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://JEEVANAND-24.github.io',
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.some((o) => origin.startsWith(o))) {
        callback(null, true);
      } else {
        callback(null, true); // Allow for local development flexibility
      }
    },
  })
);

app.use(express.json({ limit: '50kb' }));

// ── Health check ─────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status: 'running',
    region: 'ap-south-1',
    service: 'AWS Operator Dispatcher API',
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
  });
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

// ── CloudTrail activity feed ─────────────────────────────
app.get('/api/activity', (req, res) => {
  res.json([
    { time: '2m ago',  event: '✅ Terraform apply completed — EKS node group scaled', type: 'success' },
    { time: '15m ago', event: '🚀 GitHub Actions pipeline triggered — main branch',    type: 'deploy' },
    { time: '1h ago',  event: '📊 Prometheus alert resolved — CPU usage normalized',   type: 'info' },
    { time: '3h ago',  event: '🔒 Security Hub finding remediated — S3 policy updated', type: 'security' },
    { time: '1d ago',  event: '⚙️ ArgoCD sync completed — 12 apps deployed',           type: 'success' },
  ]);
});

// ── Contact form with Validation & Spam Protection ────────────
app.post('/api/contact', rateLimiter, (req, res) => {
  const { name, email, subject, message, bot_check } = req.body;

  // 1. Honeypot check
  if (bot_check) {
    return res.status(400).json({ error: 'Bot activity detected by WAF.' });
  }

  // 2. Field validation
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({ error: 'Valid sender name is required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    return res.status(400).json({ error: 'Valid email address is required.' });
  }

  if (!message || typeof message !== 'string' || message.trim().length < 5) {
    return res.status(400).json({ error: 'Message body must be at least 5 characters.' });
  }

  const recordId = `rec-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`;
  const submission = {
    id: recordId,
    timestamp: new Date().toISOString(),
    name: name.trim(),
    email: email.trim(),
    subject: (subject || 'Route 53 Contact Inquiry').trim(),
    message: message.trim(),
    ip: req.ip || req.headers['x-forwarded-for'] || 'client',
  };

  // 3. Save submission to jsonl log file
  try {
    const logPath = path.join(__dirname, 'submissions.jsonl');
    fs.appendFileSync(logPath, JSON.stringify(submission) + '\n');
  } catch (err) {
    console.error('Failed to append to submissions log file:', err);
  }

  console.log(`📩 Route 53 Dispatch from ${submission.name} <${submission.email}> [${recordId}]: ${submission.subject}`);

  res.json({
    success: true,
    message: 'DNS Record dispatched successfully to Route 53 hosted zone.',
    recordId: submission.id,
    ttl: 300,
    status: 'INSYNC',
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Operator Console API running on http://localhost:${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   Stats:  http://localhost:${PORT}/api/stats`);
});

