import { iconSizeVariants, type IconProps } from ".";

export const ChromeIcon = (props: IconProps) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={iconSizeVariants[props.size]}
    >
      <path d="M256 8C119.043 8 8 119.043 8 256s111.043 248 248 248 248-111.043 248-248S392.957 8 256 8zm0 96c44.183 0 84.009 17.927 112.102 46.9l-106.643 184.539a96 96 0 1 1-113.32-113.32l184.54-106.643C373.927 172.008 336.183 160 296 160a104 104 0 1 0 0 208c40.183 0 77.927-12.008 112.102-34.42l-184.54-106.643A96 96 0 1 1 256 104z" />
    </svg>
  );
};
