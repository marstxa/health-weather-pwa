import { useState, useEffect } from "react";

function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      setShowInstallButton(true);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", () => {});
    };
  }, []);

  const handleInstallClick = () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      // Clear the saved prompt since it can't be used again
      setDeferredPrompt(null);
      setShowInstallButton(false);
    });
  };

  if (!showInstallButton) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg flex justify-between items-center z-50">
      <div>
        <h3 className="font-bold">Install HealthApp</h3>
        <p className="text-sm text-gray-600">
          Get quick access on your home screen
        </p>
      </div>
      <button
        onClick={handleInstallClick}
        className="btn-style btn-circle btn-text"
      >
        Install
      </button>
    </div>
  );
}

export default InstallPrompt;
