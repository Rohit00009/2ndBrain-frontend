import { iconSizeVariants, type IconProps } from ".";

export const LinkedinIcon = (props: IconProps) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={iconSizeVariants[props.size]}
    >
      <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.28 107.3 0 82.9 0 53.6A53.68 53.68 0 0 1 53.6 0c29.3 0 53.6 24.4 53.6 53.6 0 29.3-24.3 53.7-53.6 53.7zM447.9 448h-92.68V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 0-37.9 16-44.1 31.4-2.3 5.6-2.8 13.4-2.8 21.3V448h-92.68s1.2-241.6 0-266.7h92.68v37.8c12.3-19 34.3-46 83.5-46 60.9 0 106.6 39.8 106.6 125.4V448z" />
    </svg>
  );
};
