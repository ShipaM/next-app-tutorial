"use client";
const GlobalError = () => {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
          <button
            className="bg-blue-500 hover:bg-blue-700 font-bold text-white py-2 px-4 rounded"
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
