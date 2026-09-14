import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, certifications } from '../data/resumeData';
import { FiGithub, FiExternalLink, FiStar, FiLayers, FiAward } from 'react-icons/fi';
import { AwsLogo } from '../components/AwsIcons';

const filterOptions = [
  { id: 'all',   label: 'All',            count: projects.length + certifications.length },
  { id: 'proj',  label: 'Projects',       count: projects.length },
  { id: 'cert',  label: 'Certifications', count: certifications.length },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const showProjects = filter === 'all' || filter === 'proj';
  const showCerts    = filter === 'all' || filter === 'cert';

  return (
    <div className="fade-in">
      <div className="page-header">
        <h1 className="page-title">DevOps Cloud Engineer Portfolio<span className="dot">.</span></h1>
        <div className="page-underline" />
        <p className="page-subtitle">
          Cloud infrastructure, Kubernetes, CI/CD projects — from AWS Landing Zones to serverless architectures. Each project includes architecture decisions, tech stack, and key outcomes.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="filter-tabs">
        {filterOptions.map((opt) => (
          <button
            key={opt.id}
            className={`filter-btn${filter === opt.id ? ' active' : ''}`}
            onClick={() => setFilter(opt.id)}
          >
            {opt.label}
            <span className="filter-count">{opt.count}</span>
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {/* Project cards */}
        {showProjects && projects.map((proj, i) => (
          <motion.div
            key={proj.id}
            className="project-card"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, delay: i * 0.02 }}
          >
            <div className="project-thumb">
              <div className={`project-type-badge ${proj.type}`}>PROJECT</div>
              <AwsLogo size={44} color="#FF9900" style={{ opacity: 0.22 }} />
            </div>
            <div className="project-body">
              <div className="project-name">{proj.name}/</div>
              <div className="project-title">{proj.displayName}</div>
              <div className="project-desc">{proj.description}</div>
              <div className="project-tags">
                {proj.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '12px', color: 'var(--text-muted)' }}>
                <FiStar size={12} /> {proj.stars} stars
                <span>·</span>
                <span>Production</span>
              </div>
              <div className="project-actions">
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn-action">
                  <FiGithub size={13} /> Code
                </a>
                <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="btn-action primary">
                  <FiExternalLink size={13} /> View
                </a>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Cert cards as portfolio items */}
        {showCerts && certifications.map((cert, i) => (
          <motion.div
            key={cert.id}
            className="project-card"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, delay: (projects.length + i) * 0.02 }}
          >
            <div className="project-thumb" style={{ background: `linear-gradient(135deg, ${cert.color}22 0%, #0f172a 100%)` }}>
              <div className="project-type-badge CERTIFICATIONS">CERTIFICATION</div>
              <AwsLogo size={44} color="#FF9900" style={{ opacity: 0.35 }} />
            </div>
            <div className="project-body">
              <div className="project-name">{cert.issuerLogo}/</div>
              <div className="project-title">{cert.name}</div>
              <div className="project-desc">{cert.issuer}</div>
              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono', marginBottom: '4px' }}>
                  Issued: {cert.date} · Expires: {cert.expiry}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono' }}>
                  ID: {cert.credentialId}
                </div>
              </div>
              <div className="project-actions">
                <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="btn-action primary">
                  ✓ Verify
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
