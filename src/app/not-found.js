'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.replace('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [router]);

  return (
    <section
      className="section"
      style={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '64px',
      }}
    >
      <div>
        <h1 style={{ fontSize: '5rem', fontWeight: 800, lineHeight: 1, opacity: 0.12 }}>404</h1>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginTop: '0.5rem' }}>Page not found</h2>
        <p style={{ opacity: 0.6, maxWidth: '400px', margin: '0.75rem auto 0' }}>
          This page doesn&apos;t exist. Redirecting to home in {countdown}s...
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            marginTop: '1.5rem',
            padding: '0.75rem 2rem',
            background: '#2563eb',
            color: '#fff',
            borderRadius: '6px',
            fontWeight: 600,
            fontSize: '0.95rem',
          }}
        >
          Go Home Now
        </Link>
      </div>
    </section>
  );
}
