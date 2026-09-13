import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/resumeData';
import {
  AwsLogo, AwsEksIcon, TerraformIcon, AwsCloudWatchIcon
} from '../components/AwsIcons';
import { FiGitPullRequest, FiTerminal } from 'react-icons/fi';

const categoryConfig = [
  { key: 'cloud',            label: 'Cloud Platforms',        icon: <AwsLogo size={20} color="#FF9900" />, color: 'orange' },
  { key: 'containerization', label: 'Containers & K8s',       icon: <AwsEksIcon size={20} />,              color: 'blue' },
  { key: 'cicd',             label: 'CI/CD & GitOps',         icon: <FiGitPullRequest size={18} style={{ color: '#22c55e' }} />, color: 'green' },
  { key: 'iac',              label: 'Infrastructure as Code', icon: <TerraformIcon size={20} />,           color: 'purple' },
  { key: 'monitoring',       label: 'Observability',         icon: <AwsCloudWatchIcon size={20} />,        color: 'red' },
  { key: 'scripting',        label: 'Languages & Scripting',  icon: <FiTerminal size={18} style={{ color: '#3b82f6' }} />, color: 'green' },
];

function SkillBar({ name, level, color, delay }) {
  return (
    <div className="skill-item">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className={`skill-fill ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="fade-in">
      <div className="page-header">
        <h1 className="page-title">Skills<span className="dot">.</span></h1>
        <div className="page-underline" />
        <p className="page-subtitle">
          CloudWatch-style metrics dashboard — tracking proficiency across all DevOps & cloud engineering domains.
        </p>
      </div>

      <div className="skills-grid">
        {categoryConfig.map((cat, ci) => (
          <motion.div
            key={cat.key}
            className="skill-category-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.08 }}
          >
            <div className="skill-cat-title">
              <span className="skill-cat-icon">{cat.icon}</span>
              {cat.label}
            </div>
            {(skills[cat.key] || []).map((skill, si) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={cat.color}
                delay={si * 0.1}
              />
            ))}
          </motion.div>
        ))}
      </div>

      {/* Alarm / learning section */}
      <motion.div
        style={{ marginTop: '24px' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <div className="card">
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono', marginBottom: '14px' }}>
            ⚠️ CloudWatch Alarms — Currently Learning
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['Pulumi', 'eBPF & Cilium', 'Crossplane', 'Platform Engineering', 'AI/ML Ops'].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(234,179,8,.06)', border: '1px solid rgba(234,179,8,.2)', borderRadius: '6px', fontSize: '12px', color: '#a16207', fontWeight: 500 }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#eab308', flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
