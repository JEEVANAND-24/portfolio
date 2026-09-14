import { motion } from 'framer-motion';
import { profile } from '../data/resumeData';
import { AwsIamIcon, AwsSecurityIcon } from '../components/AwsIcons';

const iamAttributes = [
  { key: 'UserName',         val: profile.firstName, cls: 'blue' },
  { key: 'ARN',              val: `arn:aws:iam::enterprise-cloud:user/${profile.firstName.toLowerCase()}`, cls: '' },
  { key: 'AccountType',      val: 'AWS Cloud Engineer', cls: 'orange' },
  { key: 'Region',           val: profile.region, cls: '' },
  { key: 'Timezone',         val: profile.timezone, cls: '' },
  { key: 'YearsAtScale',     val: '2 years', cls: 'green' },
  { key: 'ResponseTime',     val: profile.response, cls: '' },
  { key: 'Status',           val: '● available', cls: 'green' },
];

const policies = [
  'AWSAdministratorAccess', 'TerraformApply', 'AmazonEKSClusterAdmin',
  'CloudWatchAlarmsManager', 'IAMLeastPrivilegePolicy', 'WAFSecurityManager',
  'EventBridgeAutomations', 'LinuxSystemAdministration',
];

export default function About() {
  return (
    <div className="fade-in">
      <div className="page-header">
        <h1 className="page-title">About Me<span className="dot">.</span></h1>
        <div className="page-underline" />
        {profile.highlights.map((h, i) => (
          <div key={i} className="about-highlight" style={{ marginTop: '12px' }}>{h}</div>
        ))}
      </div>

      <div className="about-grid">
        {/* Left: bio */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.15 }}
        >
          <div className="card" style={{ marginBottom: '20px' }}>
            <div className="about-operator-hero">
              <div className="about-portrait-frame">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="about-portrait-img"
                  decoding="async"
                  loading="eager"
                />
                <div className="about-portrait-status">
                  <span className="status-ping-dot" />
                  <span>ONLINE</span>
                </div>
              </div>
              <div className="about-operator-meta">
                <div className="about-operator-badge">AWS VERIFIED OPERATOR · LEVEL 8</div>
                <h2 className="about-operator-name">{profile.name}</h2>
                <div className="about-operator-role">{profile.title}</div>
                <div className="about-operator-loc">📍 {profile.location} · {profile.region}</div>
              </div>
            </div>

            <p className="about-bio-text">{profile.bio}</p>
            <p className="about-bio-text">
              Experienced in provisioning, administering, and optimizing AWS infrastructure across enterprise production environments using EC2, VPC, IAM, Route 53, RDS, ALB, and CloudWatch. Proven track record in transitioning manual operations into Terraform-based Infrastructure as Code (IaC) and automating operational tasks with Bash, AWS CLI, Lambda, and EventBridge.
            </p>
            <p className="about-bio-text">
              Proven expertise in production monitoring, incident triage, Root Cause Analysis (RCA), OS patching across RHEL and Ubuntu fleets, and maintaining strict compliance and high availability for mission-critical Tier-1 enterprise banking workloads.
            </p>
          </div>

          {/* Quick stats */}
          <div className="card">
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'JetBrains Mono', marginBottom: '4px' }}>
              Career Stats
            </div>
            <div className="quick-stats">
              {[
                { num: '2 yrs', label: 'AWS Experience' },
                { num: '99.9%', label: 'SLA Reliability' },
                { num: '100%', label: 'IaC Adoption' },
                { num: 'Tier-1', label: 'Banking Clients' },
              ].map((s) => (
                <div className="qs-item" key={s.label}>
                  <div className="qs-num">{s.num}</div>
                  <div className="qs-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: IAM card */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.15, delay: 0.02 }}
        >
          <div className="iam-card" style={{ marginBottom: '20px' }}>
            <div className="iam-title">
              <AwsIamIcon size={20} />
              <span>IAM User Profile — Identity & Access</span>
            </div>
            {iamAttributes.map((attr) => (
              <div className="iam-row" key={attr.key}>
                <span className="iam-key">{attr.key}</span>
                <span className={`iam-val ${attr.cls}`}>{attr.val}</span>
              </div>
            ))}
          </div>

          <div className="iam-card">
            <div className="iam-title">
              <AwsSecurityIcon size={20} />
              <span>Attached Policies — Core Skills</span>
            </div>
            <div className="permissions-grid">
              {policies.map((p) => (
                <span key={p} className="tag blue">{p}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
