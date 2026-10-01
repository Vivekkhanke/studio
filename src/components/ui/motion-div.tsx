interface MotionDivProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'slide-in' | 'fade-in' | 'fade-in-up' | 'zoom-in';
  delay?: number;
  duration?: number;
}

export default function MotionDiv(props: MotionDivProps) {
  return <div className={props.className}>{props.children}</div>;
}
