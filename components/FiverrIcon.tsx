type FiverrIconProps = {
  className?: string;
};

export default function FiverrIcon({ className }: FiverrIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#1dbf73" />
      <path
        d="M13.2 7.2h-2.6v1.2h1.2v1.2h-1.2v1.2h1.2v2.1c0 1.1.8 2 2.1 2h1.1v-1.2h-.8c-.6 0-1-.4-1-1v-2.1h1.8V9.6h-1.8V7.2zM8.2 7.2h2.4v1.2H8.2V7.2zm0 2.4h2.4v5.4H8.2V9.6z"
        fill="white"
      />
    </svg>
  );
}
