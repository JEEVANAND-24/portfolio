import { useState } from 'react';
import { motion } from 'framer-motion';
import { experience, education, certifications } from '../data/resumeData';
import { FiMapPin, FiExternalLink, FiCheckCircle } from 'react-icons/fi';

const tabConfig = [
  { id: 'exp',   label: 'EXP.' },
  { id: 'educ',  label: 'EDUC.' },
  { id: 'core',  label: 'CORE.' },
  { id: 'tools', label: 'TOOL.' },
];

const coreSkills = [
  'AWS Cloud Infrastructure', 'Terraform (IaC)', 'Linux Administration (RHEL/Ubuntu)',
  'Docker & Amazon EKS', 'Kubernetes & Red Hat OpenShift', 'Incident Management & RCA',
  'IAM Least Privilege & WAF', 'CloudWatch & CloudTrail', 'VPC, Subnets & Routing',
  'AWS Lambda & EventBridge', 'Enterprise Banking Workloads', 'AI Ops & Automation',
];

const tools = [
  { cat: 'Cloud (AWS)', items: ['EC2', 'VPC', 'IAM', 'S3', 'RDS', 'Lambda', 'CloudWatch', 'Route 53', 'ACM', 'WAF', 'Network Firewall', 'SNS', 'EventBridge', 'CloudTrail', 'AWS Backup', 'ECR'] },
  { cat: 'Containers & K8s', items: ['Docker', 'Kubernetes', 'Amazon EKS', 'Red Hat OpenShift (ROSA)', 'Podman'] },
  { cat: 'Infrastructure as Code', items: ['Terraform', 'AWS CloudFormation'] },
  { cat: 'Operating Systems', items: ['RHEL 8/9', 'Amazon Linux', 'Ubuntu', 'Windows Server', 'Linux Administration'] },
  { cat: 'Networking & Security', items: ['VPC', 'Subnets', 'NAT Gateway', 'ALB', 'NLB', 'Security Groups', 'NACLs', 'AWS WAF', 'Active Directory', 'SSL/TLS'] },
  { cat: 'Automation & AI', items: ['Bash', 'Shell Scripting', 'Python (Basic)', 'AWS CLI', 'Azure OpenAI', 'FastAPI', 'RAG', 'Streamlit', 'Git', 'GitHub'] },
];

export default function Resume() {
  const [activeTab, setActiveTab] = useState('exp');

  return (
    <div className="fade-in">
      <div className="page-header">
        <h1 className="page-title">Resume<span className="dot">.</span></h1>
        <div className="page-underline" />
      </div>

      <div className="tabs">
        {tabConfig.map((t) => (
          <button
            key={t.id}
            className={`tab-btn${activeTab === t.id ? ' active' : ''}`}
            onClick={() => setActiveTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Experience tab */}
      {activeTab === 'exp' && (
        <motion.div key="exp" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ marginBottom: '12px' }}>
            <span style={{ fontSize: '16px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              ◆ Experience
            </span>
          </div>
          <div className="timeline">
            {experience.map((job, i) => (
              <motion.div
                key={job.id}
                className="timeline-item"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={`timeline-dot${i === 0 ? ' active' : ''}`} />
                <div className="exp-card">
                  <div className="exp-header">
                    <div>
                      <div className="exp-title">{job.title}</div>
                      <div className="exp-company">{job.company}</div>
                      <div className="exp-meta">
                        <FiMapPin size={10} />
                        {job.location}
                        <span className="sep">·</span>
                        {job.startDate} – {job.endDate}
                        <span className="sep">·</span>
                        {job.duration}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div
                        className={`status-badge ${job.state === 'running' ? 'running' : 'stopped'}`}
                        style={{ marginBottom: '4px' }}
                      >
                        <span className="dot" />
                        {job.state}
                      </div>
                      <div className="exp-instance">Type: {job.type}</div>
                    </div>
                  </div>
                  <div className="exp-bullets">
                    {job.achievements.map((ach, j) => (
                      <div className="exp-bullet" key={j}>{ach}</div>
                    ))}
                  </div>
                  <div className="exp-tags">
                    {job.tags.map((tag) => (
                      <span key={tag} className="tag blue">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Education tab */}
      {activeTab === 'educ' && (
        <motion.div key="educ" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ marginBottom: '12px' }}>
            <span style={{ fontSize: '16px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>◆ Education</span>
          </div>
          {education.map((edu) => (
            <div className="exp-card" key={edu.id} style={{ maxWidth: '600px' }}>
              <div className="exp-title">{edu.degree}</div>
              <div className="exp-company">{edu.institution}</div>
              <div className="exp-meta">
                <FiMapPin size={10} />{edu.location}
                <span className="sep">·</span>
                {edu.startDate} – {edu.endDate}
              </div>
              {edu.gpa && (
                <div style={{ marginTop: '10px', fontSize: '12.5px', color: 'var(--text-secondary)' }}>
                  CGPA / Grade: <strong style={{ color: 'var(--text-primary)' }}>{edu.gpa}</strong>
                </div>
              )}
              {edu.major && (
                <div style={{ marginTop: '10px', fontSize: '12.5px', color: 'var(--text-secondary)' }}>
                  Stream / Focus: <strong style={{ color: 'var(--text-primary)' }}>{edu.major}</strong>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      )}

      {/* Core competencies tab */}
      {activeTab === 'core' && (
        <motion.div key="core" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ marginBottom: '12px' }}>
            <span style={{ fontSize: '16px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>◆ Core Competencies</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '10px' }}>
            {coreSkills.map((skill) => (
              <div key={skill} className="card" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 16px' }}>
                <FiCheckCircle size={14} color="var(--accent-blue)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '13px', fontWeight: 500 }}>{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Tools tab */}
      {activeTab === 'tools' && (
        <motion.div key="tools" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ marginBottom: '12px' }}>
            <span style={{ fontSize: '16px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>◆ Tools & Technologies</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {tools.map((group) => (
              <div className="card" key={group.cat}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono', marginBottom: '12px' }}>
                  {group.cat}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {group.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
