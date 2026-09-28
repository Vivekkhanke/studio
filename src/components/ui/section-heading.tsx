import { cn } from '@/lib/utils';
import MotionDiv from '@/components/ui/motion-div';

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <MotionDiv
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'mx-auto max-w-2xl items-center text-center' : 'items-start',
        className
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="text-base text-muted-foreground text-pretty md:text-lg">{description}</p>
      )}
    </MotionDiv>
  );
}
