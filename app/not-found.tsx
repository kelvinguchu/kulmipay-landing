import Link from "next/link";

export default function NotFound() {
  return (
    <section className='relative overflow-hidden bg-white dark:bg-[#0A0A0B] pt-28 pb-20 md:pt-36 md:pb-28'>
      {/* Background orb */}
      <div className='pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 rounded-full bg-brand-100/40 dark:bg-brand-500/10 blur-[100px]' />

      <div className='relative mx-auto max-w-2xl px-6 text-center'>
        <p className='text-brand-600 dark:text-brand-400 font-semibold text-lg mb-4'>
          404
        </p>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl mb-6'>
          Page not found
        </h1>
        <p className='text-lg text-gray-600 dark:text-gray-400 mb-10'>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href='/'
          className='inline-flex items-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700'>
          Back to homepage
        </Link>
      </div>
    </section>
  );
}
