'use client';
 
import { useEffect } from 'react';
 
/**
 * Error component that is displayed when an error occurs during rendering.
 * 
 * @param error The error that was thrown during rendering
 * @param reset A function that can be called to attempt to recover from the error
 * @param error.digest A unique identifier for the error that can be used to track it
 * @returns A component that displays the error and a button to attempt to recover
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}