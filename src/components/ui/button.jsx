import React from 'react';
import clsx from 'clsx';

export function Button({
  children,
  className,
  variant = 'primary',
  loading = false,
  ...rest
}) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center rounded-lg px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2',
        {
          'bg-blue-500 text-white hover:bg-blue-400 active:bg-blue-600':
            variant === 'primary',
          'bg-green-500 text-white hover:bg-green-400 active:bg-green-600':
            variant === 'success',
          'bg-red-500 text-white hover:bg-red-400 active:bg-red-600':
            variant === 'danger',
          'opacity-50 cursor-not-allowed': loading,
        },
        className
      )}
      disabled={loading}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}
