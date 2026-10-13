const certificateBySkill: Record<string, string> = {
  html5: '/images/html-certi.pdf',
  css: '/images/css-certi.pdf',
  css3: '/images/css-certi.pdf',
  javascript: '/images/js-certi.pdf',
  python: '/images/py-certi.pdf',
  php: '/images/php-certi.pdf',
};

interface SkillCertificateLinkProps {
  label: string;
  className: string;
}

export function SkillCertificateLink({ label, className }: SkillCertificateLinkProps) {
  const skillKey = label.toLowerCase().replace(/\s*\(.*\)$/, '');
  const certificate = certificateBySkill[skillKey];

  if (!certificate) {
    return <span className={className}>{label}</span>;
  }

  return (
    <a
      href={certificate}
      target="_blank"
      rel="noopener noreferrer"
      title={`Preview ${label} certificate`}
      aria-label={`Preview ${label} certificate`}
      className={`${className} cursor-pointer hover:text-accent-600 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600`}
    >
      {label}
    </a>
  );
}
