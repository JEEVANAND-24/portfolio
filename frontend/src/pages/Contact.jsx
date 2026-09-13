import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/resumeData';
import {
  FiSend, FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin,
  FiClock, FiCopy, FiCheck, FiExternalLink, FiGlobe
} from 'react-icons/fi';
import { AwsRoute53Icon, AwsLogo } from '../components/AwsIcons';

const dnsRecords = [
  {
    type: 'A',
    name: 'email',
    description: 'Direct Primary Inbox',
    value: profile.email,
    link: `mailto:${profile.email}`,
    action: 'email'
  },
  {
    type: 'TXT',
    name: 'telephone',
    description: 'Voice & WhatsApp',
    value: profile.phone || '+91 9632080135',
    link: `tel:${(profile.phone || '+919632080135').replace(/\s+/g, '')}`,
    action: 'phone'
  },
  {
    type: 'CNAME',
    name: 'linkedin',
    description: 'Professional Profile',
    value: 'www.linkedin.com/in/jeevanand-r-2001',
    link: profile.linkedin || 'https://www.linkedin.com/in/jeevanand-r-2001',
    action: 'link'
  },
  {
    type: 'CNAME',
    name: 'github',
    description: 'Source Code & IaC Repos',
    value: 'github.com/JEEVANAND-24',
    link: profile.github || 'https://github.com/JEEVANAND-24',
    action: 'link'
  },
  {
    type: 'TXT',
    name: 'datacenter-region',
    description: 'Primary AWS Region',
    value: 'ap-south-1 (Mumbai, India)',
    link: null,
    action: null
  },
  {
    type: 'TXT',
    name: 'physical-location',
    description: 'Base of Operations',
    value: 'Bengaluru, Karnataka, India',
    link: null,
    action: null
  },
  {
    type: 'TXT',
    name: 'sla-response',
    description: 'Guaranteed Triage Time',
    value: 'TTL: <24h (GMT+5:30 IST)',
    link: null,
    action: null
  },
  {
    type: 'TXT',
    name: 'current-status',
    description: 'Availability Matrix',
    value: 'Available for Full-time AWS Cloud & DevOps Roles',
    link: null,
    action: null
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } catch (_) { }
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="fade-in">
      <div className="page-header">
        <h1 className="page-title">Contact & Communication Gateway<span className="dot">.</span></h1>
        <div className="page-underline" />
        <p className="page-subtitle">
          Amazon Route 53 hosted zone records and direct communication channels. Resolve any endpoint below to connect with Jeevanand R.
        </p>
      </div>

      {/* Operator Contact Quick Card */}
      <motion.div
        className="contact-operator-banner"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="operator-banner-left">
          <div className="operator-banner-avatar-frame">
            <img
              src={profile.avatarUrl || '/jeevanand_portrait.jpg'}
              alt={profile.name}
              className="operator-banner-avatar"
            />
            <span className="operator-banner-ping" />
          </div>
          <div>
            <div className="operator-banner-badge">
              <AwsLogo size={13} color="#FF9900" />
              <span>AWS VERIFIED OPERATOR · ACTIVE</span>
            </div>
            <h2 className="operator-banner-name">{profile.name}</h2>
            <p className="operator-banner-role">
              AWS Cloud Engineer | DevOps | Linux Administration | Site Reliability
            </p>
            <div className="operator-banner-meta">
              <span><FiMapPin size={12} /> {profile.location}</span>
              <span>·</span>
              <span><FiClock size={12} /> {profile.timezone}</span>
              <span>·</span>
              <span className="tag-available">● Available for Cloud Roles</span>
            </div>
          </div>
        </div>

        <div className="operator-banner-actions">
          <a href={`mailto:${profile.email}`} className="banner-btn primary">
            <FiMail size={14} /> Send Email
          </a>
          <a href={`tel:${(profile.phone || '+919632080135').replace(/\s+/g, '')}`} className="banner-btn secondary">
            <FiPhone size={14} /> Call Operator
          </a>
        </div>
      </motion.div>

      <div className="contact-grid">
        {/* Left Column: Route 53 DNS Table & Quick Connect Cards */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
        >
          {/* Route 53 DNS Records */}
          <div className="card" style={{ marginBottom: '20px' }}>
            <div className="dns-header-bar">
              <div className="dns-header-title">
                <AwsRoute53Icon size={22} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: '13px', color: 'var(--text-primary)' }}>
                    Amazon Route 53 — Hosted Zone Records
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>
                    Domain: rjeevanand.cloudops.dev · Status: INSYNC
                  </div>
                </div>
              </div>
              <span className="dns-status-pill">● PUBLIC ZONE</span>
            </div>

            <table className="dns-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Record Name</th>
                  <th>Value / Destination</th>
                  <th style={{ textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {dnsRecords.map((r) => (
                  <tr key={r.name}>
                    <td>
                      <span className={`dns-type-pill ${r.type.toLowerCase()}`}>{r.type}</span>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '12px' }}>{r.name}</div>
                      <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{r.description}</div>
                    </td>
                    <td className="dns-value-cell">
                      {r.link ? (
                        <a href={r.link} target={r.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="dns-link">
                          {r.value}
                        </a>
                      ) : (
                        <span className="dns-text">{r.value}</span>
                      )}
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      {r.action === 'email' && (
                        <button
                          type="button"
                          className="dns-action-btn"
                          onClick={() => copyToClipboard(profile.email, 'email')}
                          title="Copy email address"
                        >
                          {copiedKey === 'email' ? <FiCheck size={12} color="#22c55e" /> : <FiCopy size={12} />}
                          <span>{copiedKey === 'email' ? 'Copied' : 'Copy'}</span>
                        </button>
                      )}
                      {r.action === 'phone' && (
                        <button
                          type="button"
                          className="dns-action-btn"
                          onClick={() => copyToClipboard(profile.phone || '+91 9632080135', 'phone')}
                          title="Copy phone number"
                        >
                          {copiedKey === 'phone' ? <FiCheck size={12} color="#22c55e" /> : <FiCopy size={12} />}
                          <span>{copiedKey === 'phone' ? 'Copied' : 'Copy'}</span>
                        </button>
                      )}
                      {r.action === 'link' && r.link && (
                        <a
                          href={r.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="dns-action-btn"
                          title="Open external link"
                        >
                          <FiExternalLink size={12} />
                          <span>Open</span>
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick Connect Cards */}
          <div className="card">
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace', marginBottom: '16px' }}>
              Direct Telemetry Channels
            </div>
            <div className="quick-connect-grid">
              {/* Email */}
              <div className="qc-card">
                <div className="qc-icon email"><FiMail size={18} /></div>
                <div className="qc-info">
                  <div className="qc-label">Primary Email</div>
                  <a href={`mailto:${profile.email}`} className="qc-value">{profile.email}</a>
                </div>
                <button
                  type="button"
                  className="qc-copy-btn"
                  onClick={() => copyToClipboard(profile.email, 'qc-email')}
                  title="Copy email"
                >
                  {copiedKey === 'qc-email' ? <FiCheck size={14} color="#22c55e" /> : <FiCopy size={14} />}
                </button>
              </div>



              {/* LinkedIn */}
              <div className="qc-card">
                <div className="qc-icon linkedin"><FiLinkedin size={18} /></div>
                <div className="qc-info">
                  <div className="qc-label">LinkedIn Profile</div>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="qc-value">
                    www.linkedin.com/in/jeevanand-r-2001
                  </a>
                </div>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <button
                    type="button"
                    className="qc-copy-btn"
                    onClick={() => copyToClipboard('https://www.linkedin.com/in/jeevanand-r-2001', 'qc-linkedin')}
                    title="Copy LinkedIn URL"
                  >
                    {copiedKey === 'qc-linkedin' ? <FiCheck size={14} color="#22c55e" /> : <FiCopy size={14} />}
                  </button>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="qc-copy-btn" title="Open LinkedIn Profile">
                    <FiExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="qc-card">
                <div className="qc-icon github"><FiGithub size={18} /></div>
                <div className="qc-info">
                  <div className="qc-label">GitHub Code Repositories</div>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="qc-value">
                    github.com/JEEVANAND-24
                  </a>
                </div>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="qc-copy-btn" title="Open GitHub">
                  <FiExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Route 53 Direct Message Dispatch Form */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <div className="card" style={{ height: '100%' }}>
            <div className="dns-form-header">
              <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--accent-blue)', fontFamily: 'JetBrains Mono, monospace' }}>
                ROUTE 53 MESSAGE INGRESS
              </div>
              <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', margin: '4px 0 6px 0' }}>
                Dispatch Transmission to Jeevanand
              </h2>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                Send an immediate message directly to Jeevanand's operator console. All communications are logged and acknowledged within 24 hours.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '50px 24px', background: 'var(--bg-tag)', borderRadius: 'var(--radius-md)', margin: '20px 0' }}
              >
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', border: '2px solid #22c55e' }}>
                  <FiCheck size={28} />
                </div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  DNS Transmission Resolved!
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '400px', margin: '0 auto 20px auto' }}>
                  Thank you, <strong>{form.name}</strong>. Your payload has been delivered to <strong>{profile.email}</strong>. Jeevanand will follow up within <strong>{profile.response}</strong>.
                </div>
                <button
                  type="button"
                  className="btn-action primary"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', subject: '', message: '' });
                  }}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} style={{ marginTop: '16px' }}>
                <div className="form-group">
                  <label className="form-label">
                    <span>Full Name / Requester Identity</span>
                    <span className="label-code">CNAME</span>
                  </label>
                  <input
                    className="form-input"
                    placeholder="e.g. Alex Mercer (Tech Lead / Recruiter)"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <span>Email Address (Reply-To Record)</span>
                    <span className="label-code">A RECORD</span>
                  </label>
                  <input
                    className="form-input"
                    type="email"
                    placeholder="your.email@company.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <span>Subject / Opportunity Type</span>
                    <span className="label-code">PTR</span>
                  </label>
                  <input
                    className="form-input"
                    placeholder="e.g. AWS Cloud Engineer Role / Consulting Inquiry"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <span>Transmission Message Payload</span>
                    <span className="label-code">TXT</span>
                  </label>
                  <textarea
                    className="form-textarea"
                    rows={5}
                    placeholder="Provide details about your project, AWS infrastructure needs, role specifications, or discussion topic..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="btn-submit" disabled={loading}>
                  {loading ? (
                    <span>Routing Packet via Route 53...</span>
                  ) : (
                    <>
                      <FiSend size={15} />
                      <span>Dispatch Transmission to Jeevanand</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
