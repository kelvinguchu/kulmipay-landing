export function SectionHeading({
  title,
  subtitle,
}: Readonly<{ title: string; subtitle?: string }>) {
  return (
    <div className='flex items-start gap-4 mb-6'>
      <div className='shrink-0 w-1 h-8 md:h-10 rounded-full bg-brand mt-0.5' />
      <div>
        <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
          {title}
        </h2>
        {subtitle && (
          <p className='text-muted-foreground text-base mt-2'>{subtitle}</p>
        )}
      </div>
    </div>
  );
}
