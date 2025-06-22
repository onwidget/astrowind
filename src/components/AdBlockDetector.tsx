import React, { useEffect } from "react";
import { useDetectAdBlock, AdBlockDetectedWrapper } from "adblock-detect-react";

// Hook-based component
export const AdBlockDetector: React.FC = () => {
  const adBlockDetected = useDetectAdBlock();

  useEffect(() => {
    if (adBlockDetected) {
      // You can customize what happens when an ad blocker is detected
      console.log("Ad blocker detected");
    }
  }, [adBlockDetected]);

  if (!adBlockDetected) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 max-w-md p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-red-500 mb-4">Ad Blocker Detected</h2>
        <p className="mb-4">
          We've noticed you're using an ad blocker. We rely on advertising revenue to keep our content free.
          Please consider supporting us by disabling your ad blocker for this site.
        </p>
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => {
            // Set a cookie to remember this choice
            document.cookie = "adblock-acknowledged=true; max-age=3600; path=/";
            // Hide the overlay by forcing a re-render
            window.location.reload();
          }}
        >
          Continue Anyway
        </button>
      </div>
    </div>
  );
};

// Wrapper-based component
export const AdBlockWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <AdBlockDetectedWrapper>
      {children}
    </AdBlockDetectedWrapper>
  );
};