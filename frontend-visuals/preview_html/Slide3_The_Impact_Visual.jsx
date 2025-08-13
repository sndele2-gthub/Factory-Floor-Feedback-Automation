<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slide 3 Visual</title>
    <!-- Tailwind CSS CDN for styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- React Development CDN -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <!-- Babel CDN for JSX transformation -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body class="p-4 bg-gray-100 flex items-center justify-center min-h-screen">
    <div id="root" class="w-full max-w-5xl"></div>

    <script type="text/babel">
        // Removed: import React from 'react'; // React is globally available via CDN

        const Slide3Visual = () => {
          return (
            <div className="relative flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px] p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-lg border border-green-200 overflow-hidden">
              {/* Background Pattern - subtle lines for "smooth flow" */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-100 to-transparent opacity-30 animate-pulse-bg"></div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-10 text-center drop-shadow-sm">
                The Impact: A Transformed Feedback Process ✅
              </h2>

              {/* Main Factory Floor / Collaboration Visual */}
              <div className="relative flex flex-col items-center justify-between w-full max-w-2xl md:max-w-3xl lg:max-w-4xl bg-white bg-opacity-90 rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl border border-blue-300 z-10 min-h-[300px] md:min-h-[400px]"> {/* Added min-h for better spacing */}
                
                {/* Dashboard/Results Screen - Moved to top-middle */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white p-3 md:p-4 rounded-lg shadow-md max-w-[150px] md:max-w-[200px] text-xs md:text-sm text-left z-20">
                  <p className="font-bold">Dashboard</p>
                  <p>Critical: 3</p>
                  <p>High: 5</p>
                  <p>Resolved: 12</p>
                  <span className="absolute -bottom-2 -right-2 text-3xl">📊</span> {/* Bar Chart */}
                </div>

                {/* Worker Icons - Collaborating - Now flex-grow to take available space */}
                <div className="flex justify-around items-end w-full mt-16 md:mt-20 flex-grow space-x-4 md:space-x-8"> {/* Increased top margin to clear dashboard */}
                    <div className="flex flex-col items-center">
                        <span className="text-5xl md:text-6xl mb-2">👷‍♀️</span>
                        <p className="text-xs md:text-sm font-semibold text-gray-700">Floor Staff</p>
                        <span className="text-green-500 text-4xl mt-1">👍</span> {/* Thumbs up */}
                    </div>
                    <div className="text-6xl md:text-7xl mb-2 text-blue-500">↔️</div> {/* Arrow for communication */}
                    <div className="flex flex-col items-center">
                        <span className="text-5xl md:text-6xl mb-2">👨‍💼</span>
                        <p className="text-xs md:text-sm font-semibold text-gray-700">Management</p>
                        <span className="text-green-500 text-4xl mt-1">💡</span> {/* Lightbulb for clear decisions */}
                    </div>
                </div>

                {/* Conveyor Belt / Flow Indicator - positioned at the bottom of its parent, with emojis */}
                <div className="w-full h-10 bg-gray-200 rounded-full flex items-center justify-around px-4 overflow-hidden shadow-inner mb-6 relative"> {/* Changed justify-between to justify-around for emojis */}
                  <span className="text-2xl text-gray-600">⚙️</span> {/* Smooth Workflow emoji */}
                  <span className="text-2xl text-gray-600">🚀</span> {/* Efficiency emoji */}
                  <div className="absolute top-0 bottom-0 left-0 w-1/4 bg-blue-400 opacity-20 animate-flow"></div>
                </div>

              </div>

              {/* Small Icons / Key Impacts */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-10">
                <div className="flex flex-col items-center text-gray-700">
                  <span className="text-3xl md:text-4xl text-purple-600 mb-1">🚀</span>
                  <p className="text-xs md:text-sm font-semibold text-center">Faster Response</p>
                </div>
                <div className="flex flex-col items-center text-gray-700">
                  <span className="text-3xl md:text-4xl text-blue-600 mb-1">✅</span>
                  <p className="text-xs md:text-sm font-semibold text-center">Clearer Decisions</p>
                </div>
                <div className="flex flex-col items-center text-gray-700">
                  <span className="text-3xl md:text-4xl text-green-600 mb-1">📈</span>
                  <p className="text-xs md:text-sm font-semibold text-center">Increased Efficiency</p>
                </div>
                <div className="flex flex-col items-center text-gray-700">
                  <span className="text-3xl md:text-4xl text-teal-600 mb-1">😊</span>
                  <p className="text-xs md:text-sm font-semibold text-center">Happier Team</p>
                </div>
              </div>

              {/* Tailwind CSS animations - defined inline for this immersive */}
              <style>{`
                @keyframes flow {
                  0% { transform: translateX(-100%); }
                  100% { transform: translateX(400%); }
                }
                .animate-flow {
                  animation: flow 10s linear infinite;
                }
                @keyframes pulse-bg {
                  0% { opacity: 0.1; }
                  50% { opacity: 0.3; }
                  100% { opacity: 0.1; }
                }
                .animate-pulse-bg {
                  animation: pulse-bg 15s ease-in-out infinite;
                }
              `}</style>
            </div>
          );
        };

        ReactDOM.render(<Slide3Visual />, document.getElementById('root'));
    </script>
</body>
</html>
