"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function RootError({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}


/*
<GlobalError> // NOT RECOMMENDED
  <RootLayout>
    <RootError>
      <Page />
      <DashboardLayout>
        <DashboardError>
          <Analytics></Analytics>
          <Settings></Settings>
        </DashboardError>
      </DashboardLayout>
      <Heady></Heady>
    </RootError>
  </RootLayout>
</GlobalError>;

// Error will be cot by it's nearest error boundary.  
*/
