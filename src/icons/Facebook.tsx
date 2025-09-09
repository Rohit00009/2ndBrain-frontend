import { iconSizeVariants, type IconProps } from ".";

export const FacebookIcon = (props: IconProps) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      className={iconSizeVariants[props.size]}
    >
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.61 0 225.36 0c-73.22 0-121.12 44.38-121.12 124.72v70.62H22.89V288h81.35v224h100.2V288z" />
    </svg>
  );
};
