import { iconSizeVariants, type IconProps } from ".";

export const InstagramIcon = (props: IconProps) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={iconSizeVariants[props.size]}
    >
      <path d="M349.33 69.33H162.67C107.5 69.33 69.33 107.5 69.33 162.67v186.67c0 55.17 38.17 93.34 93.34 93.34h186.67c55.17 0 93.34-38.17 93.34-93.34V162.67c0-55.17-38.17-93.34-93.34-93.34zm-93.33 120c52.83 0 95.67 42.83 95.67 95.67S308.83 380.67 256 380.67 160.33 337.83 160.33 285 203.17 189.33 256 189.33zm96-96a24 24 0 1 1-48 0 24 24 0 0 1 48 0z" />
    </svg>
  );
};
