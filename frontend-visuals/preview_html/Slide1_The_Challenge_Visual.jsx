<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slide 1 Visual</title>
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

        const Slide1Visual = () => {
          return (
            <div className="relative flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px] p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-lg border border-red-200 overflow-hidden">
              {/* Background distressed pattern or subtle red noise for chaos */}
              <div className="absolute inset-0 bg-red-100 opacity-20 filter grayscale"></div>
              <div className="absolute inset-0 bg-repeat bg-center opacity-10" style={{backgroundImage: "url('https://placehold.co/100x100/FFF/000?text=CLUTTER')"}}></div>
              
              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-8 text-center drop-shadow-sm z-10">
                The Challenge: Feedback Before Automation 😔
              </h2>

              {/* Main Chaotic Visual */}
              <div className="relative w-full max-w-sm md:max-w-md lg:max-w-xl bg-white bg-opacity-70 rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl border border-red-300 z-10 flex flex-col items-center justify-center">
                {/* Tangled mess / Disorganized elements */}
                <div className="relative w-full h-48 md:h-64 flex items-center justify-center">
                  <span className="absolute top-4 left-4 text-4xl text-gray-500 transform rotate-12">💬</span> {/* Word of mouth */}
                  <span className="absolute top-1/4 right-8 text-3xl text-gray-500 transform -rotate-10">📧</span> {/* Unmanaged email */}
                  <span className="absolute bottom-6 left-1/4 text-5xl text-gray-500 transform rotate-15">📝</span> {/* Lost notes */}
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl text-red-400 opacity-50 animate-pulse-slow">🚫</span> {/* NO SYSTEM */}
                  <span className="absolute top-10 right-10 text-xl text-gray-500 transform rotate-20">📜</span> {/* Paperwork */}
                  <span className="absolute bottom-8 right-12 text-2xl text-gray-500 transform -rotate-5">📢</span> {/* Shouting */}
                </div>

                {/* Overlay text for "No System" */}
                <p className="text-xl md:text-2xl font-bold text-red-700 mt-4 text-center">NO CLEAR SYSTEM</p>
              </div>

              {/* Small Icons / Key Problems */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-10 z-10">
                <div className="flex flex-col items-center text-gray-700">
                  <span className="text-3xl md:text-4xl text-red-600 mb-1">🚫</span>
                  <p className="text-xs md:text-sm font-semibold text-center">No Formal Channels</p>
                </div>
                <div className="flex flex-col items-center text-gray-700">
                  <span className="text-3xl md:text-4xl text-orange-600 mb-1">⏳</span>
                  <p className="text-xs md:text-sm font-semibold text-center">Inconsistent & Slow</p>
                </div>
                <div className="flex flex-col items-center text-gray-700">
                  <span className="text-3xl md:text-4xl text-red-800 mb-1">❌</span>
                  <p className="text-xs md:text-sm font-semibold text-center">Critical Issues Missed</p>
                </div>
                <div className="flex flex-col items-center text-gray-700">
                  <span className="text-3xl md:text-4xl text-gray-600 mb-1">😔</span>
                  <p className="text-xs md:text-sm font-semibold text-center">Disengaged Staff</p>
                </div>
              </div>

              {/* Tailwind CSS animations - defined inline for this immersive */}
              <style>{`
                @keyframes pulse-slow {
                  0%, 100% { opacity: 0.5; }
                  50% { opacity: 0.8; }
                }
                .animate-pulse-slow {
                  animation: pulse-slow 3s ease-in-out infinite;
                }
              `}</style>
            </div>
          );
        };

        ReactDOM.render(<Slide1Visual />, document.getElementById('root'));
    </script>
</body>
</html>
