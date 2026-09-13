import React from 'react';

// =========================================================================
//  OFFICIAL AWS ARCHITECTURE SERVICE ICONS (Pixel-Perfect SVG Vector Suite)
// =========================================================================

/**
 * Official AWS Logo (Amazon Web Services Smile Arrow)
 */
export function AwsLogo({ size = 24, className = '', color = '#FF9900' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.2 12.1c0-.4.3-.7.7-.7h1.4c.4 0 .7.3.7.7v3.2c0 .4-.3.7-.7.7H8.9c-.4 0-.7-.3-.7-.7v-3.2zM12.9 8.6c0-.4.3-.7.7-.7h1.4c.4 0 .7.3.7.7v6.7c0 .4-.3.7-.7.7H13.6c-.4 0-.7-.3-.7-.7V8.6zM3.5 14c0-.4.3-.7.7-.7h1.4c.4 0 .7.3.7.7v1.3c0 .4-.3.7-.7.7H4.2c-.4 0-.7-.3-.7-.7V14z"
        fill={color}
      />
      <path
        d="M20.2 17.5c-2.4 1.8-5.9 2.7-9.5 2.7-4.4 0-8.3-1.4-10.7-3.6-.3-.3-.1-.7.3-.5 3.1 1.6 7 2.5 10.7 2.5 3.3 0 6.6-.7 9-2.1.4-.3.8.3.2 1z"
        fill={color}
      />
      <path
        d="M21.2 16.3c-.3-.4-2-.2-3-.1-.3 0-.4-.3-.1-.5 1.5-.9 3.2-.8 3.5-.4.3.4-.1 2.2-1.5 3.3-.3.2-.5.1-.4-.2.4-.8 1.5-1.7 1.5-2.1z"
        fill={color}
      />
    </svg>
  );
}

/**
 * Official Amazon EC2 Architecture Icon (Elastic Compute Cloud)
 * Color: AWS Compute Orange (#FF9900 / #ED7100)
 */
export function AwsEc2Icon({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FF9900" />
      {/* Compute instance box */}
      <rect x="11" y="11" width="26" height="26" rx="3" fill="#ffffff" fillOpacity="0.18" stroke="#ffffff" strokeWidth="2" />
      {/* Server core slices */}
      <rect x="15" y="16" width="18" height="3" rx="1" fill="#ffffff" />
      <rect x="15" y="22" width="18" height="3" rx="1" fill="#ffffff" />
      <rect x="15" y="28" width="18" height="3" rx="1" fill="#ffffff" />
      {/* Dynamic Compute Arrows (North, South, East, West) */}
      <path d="M24 6L21 9H27L24 6Z" fill="#ffffff" />
      <path d="M24 42L21 39H27L24 42Z" fill="#ffffff" />
      <path d="M6 24L9 21V27L6 24Z" fill="#ffffff" />
      <path d="M42 24L39 21V27L42 24Z" fill="#ffffff" />
      {/* Activity indicator lights */}
      <circle cx="30" cy="17.5" r="1" fill="#FF9900" />
      <circle cx="30" cy="23.5" r="1" fill="#FF9900" />
      <circle cx="30" cy="29.5" r="1" fill="#FF9900" />
    </svg>
  );
}

/**
 * Official Amazon S3 Architecture Icon (Simple Storage Service)
 * Color: AWS Storage Green (#3F8624 / #569D38)
 */
export function AwsS3Icon({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#3F8624" />
      {/* S3 Storage Bucket */}
      <path
        d="M12 16C12 14.3431 17.3726 13 24 13C30.6274 13 36 14.3431 36 16V30C36 33.3137 30.6274 36 24 36C17.3726 36 12 33.3137 12 30V16Z"
        fill="#ffffff"
        fillOpacity="0.2"
        stroke="#ffffff"
        strokeWidth="2"
      />
      {/* Bucket top lip ellipse */}
      <ellipse cx="24" cy="16" rx="12" ry="3.5" fill="#ffffff" />
      {/* Bucket layered storage rings */}
      <path d="M12 21C14 23 18.5 24 24 24C29.5 24 34 23 36 21" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 26C14 28 18.5 29 24 29C29.5 29 34 28 36 26" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Official AWS IAM Architecture Icon (Identity & Access Management)
 * Color: AWS Security Red / Magenta (#DD344C / #C925D1)
 */
export function AwsIamIcon({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#DD344C" />
      {/* Security Shield */}
      <path
        d="M24 10L36 15V23.5C36 30.8 30.9 37.4 24 39C17.1 37.4 12 30.8 12 23.5V15L24 10Z"
        fill="#ffffff"
        fillOpacity="0.18"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* User identity */}
      <circle cx="24" cy="20" r="4.5" fill="#ffffff" />
      <path
        d="M17 31C17 27.5 20.1 25.5 24 25.5C27.9 25.5 31 27.5 31 31"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="20" r="1.5" fill="#DD344C" />
    </svg>
  );
}

/**
 * Official Amazon CloudWatch Architecture Icon
 * Color: AWS Management Hot Pink / Fuchsia (#C925D1 / #B00889)
 */
export function AwsCloudWatchIcon({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#C925D1" />
      {/* Monitoring Meter / Gauge dial */}
      <path
        d="M13 28C13 21.9249 17.9249 17 24 17C30.0751 17 35 21.9249 35 28"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Meter needle indicator */}
      <path d="M24 28L28 20" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="28" r="2.5" fill="#ffffff" />
      {/* Telemetry pulse wave line */}
      <path
        d="M11 34L17 34L20 30L24 37L28 32L31 34L37 34"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Official Amazon Route 53 Architecture Icon (DNS & Networking)
 * Color: AWS Networking Purple (#8C4FFF)
 */
export function AwsRoute53Icon({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#8C4FFF" />
      {/* Route 53 Traffic Globe */}
      <circle cx="24" cy="24" r="13" stroke="#ffffff" strokeWidth="2" fill="#ffffff" fillOpacity="0.15" />
      {/* Globe Longitude / Latitude grid */}
      <ellipse cx="24" cy="24" rx="5.5" ry="13" stroke="#ffffff" strokeWidth="1.5" fill="none" />
      <path d="M11 24H37" stroke="#ffffff" strokeWidth="1.5" />
      {/* Route Navigation Signpost */}
      <path d="M20 17H28V21H20V17Z" fill="#ffffff" />
      <path d="M24 13V35" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Official AWS Security & WAF Architecture Icon
 * Color: AWS Security Purple/Red (#7928CA / #DD344C)
 */
export function AwsSecurityIcon({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#7928CA" />
      {/* Shield Barrier */}
      <path
        d="M24 10L36 15V24C36 31 30.5 37 24 39C17.5 37 12 31 12 24V15L24 10Z"
        fill="#ffffff"
        fillOpacity="0.2"
        stroke="#ffffff"
        strokeWidth="2"
      />
      {/* Key Lock mechanism */}
      <rect x="19" y="22" width="10" height="9" rx="2" fill="#ffffff" />
      <path
        d="M21 22V19C21 17.3431 22.3431 16 24 16C25.6569 16 27 17.3431 27 19V22"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="26" r="1.2" fill="#7928CA" />
    </svg>
  );
}

/**
 * Official Amazon EKS Architecture Icon (Elastic Kubernetes Service)
 * Color: AWS Container Orange / Blue (#ED7100 / #326CE5)
 */
export function AwsEksIcon({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#ED7100" />
      {/* Kubernetes Ship Wheel & Cluster Pods */}
      <circle cx="24" cy="24" r="11" stroke="#ffffff" strokeWidth="2" fill="#ffffff" fillOpacity="0.15" />
      <circle cx="24" cy="24" r="4.5" fill="#ffffff" />
      {/* 6 Spokes */}
      <path d="M24 13V19M24 29V35M14.5 18.5L19.5 21.5M28.5 26.5L33.5 29.5M14.5 29.5L19.5 26.5M28.5 21.5L33.5 18.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Official AWS Lambda Architecture Icon
 * Color: AWS Compute Orange (#FF9900 / #ED7100)
 */
export function AwsLambdaIcon({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FF9900" />
      {/* Lambda Symbol */}
      <path
        d="M14 34L21 21L17.5 14H22.5L25 19.5L30 14H34.5L24.5 27.5L28.5 34H23.5L20.5 28.5L17.5 34H14Z"
        fill="#ffffff"
      />
    </svg>
  );
}

/**
 * HashiCorp Terraform Architecture Icon
 * Color: Terraform Purple (#7B42BC / #844FBA)
 */
export function TerraformIcon({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#7B42BC" />
      <g transform="translate(11, 10) scale(0.9)">
        {/* Upper Left Box */}
        <polygon points="9.5,0.5 18.5,5.7 18.5,16 9.5,10.8" fill="#ffffff" />
        {/* Bottom Left Box */}
        <polygon points="0,5.7 9,10.9 9,21.2 0,16" fill="#ffffff" fillOpacity="0.75" />
        {/* Center Box */}
        <polygon points="9.5,21.5 18.5,26.7 18.5,37 9.5,31.8" fill="#ffffff" fillOpacity="0.9" />
        {/* Right Box */}
        <polygon points="19,5.7 28,10.9 28,21.2 19,16" fill="#ffffff" />
      </g>
    </svg>
  );
}

/**
 * Official Amazon EventBridge Architecture Icon
 */
export function AwsEventBridgeIcon({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#C925D1" />
      {/* Event bus router hub */}
      <circle cx="24" cy="24" r="5" fill="#ffffff" />
      <circle cx="15" cy="16" r="3" fill="#ffffff" fillOpacity="0.8" />
      <circle cx="33" cy="16" r="3" fill="#ffffff" fillOpacity="0.8" />
      <circle cx="15" cy="32" r="3" fill="#ffffff" fillOpacity="0.8" />
      <circle cx="33" cy="32" r="3" fill="#ffffff" fillOpacity="0.8" />
      <path d="M17.5 18L21 21.5M30.5 18L27 21.5M17.5 30L21 26.5M30.5 30L27 26.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Official Amazon VPC Architecture Icon (Virtual Private Cloud)
 */
export function AwsVpcIcon({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#8C4FFF" />
      <path
        d="M14 17C14 14.8 15.8 13 18 13H30C32.2 13 34 14.8 34 17V31C34 33.2 32.2 35 30 35H18C15.8 35 14 33.2 14 31V17Z"
        stroke="#ffffff"
        strokeWidth="2"
        strokeDasharray="3 3"
        fill="#ffffff"
        fillOpacity="0.15"
      />
      <circle cx="24" cy="24" r="5" fill="#ffffff" />
      <path d="M24 17V20M24 28V31M17 24H20M28 24H31" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
