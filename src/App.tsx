import { Play, Users, Gamepad2 } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo/Icon */}
            <div className="mb-12 flex justify-center">
              <Gamepad2 className="w-20 h-20 text-blue-500" />
            </div>

            {/* Title */}
            <h1 className="text-7xl md:text-9xl font-bold mb-8 text-white">
              Move on the Pose
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-gray-400 mb-16">
              Move your body, dodge obstacles and hold the pose!
            </p>

            {/* CTA Button */}
            <a 
              href="https://huzeyfe-ckr.github.io/nuitducodemmi26/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-xl transition-all transform hover:scale-105"
            >
              <Play className="w-6 h-6" />
              Play Now
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-12">
              <Users className="w-8 h-8 text-blue-500" />
              <h2 className="text-4xl font-bold text-white">
                The Team
              </h2>
            </div>
            <p className="text-lg text-gray-400 mb-16">
              A passionate team for Nuit MMI 2026
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {['Jullian', 'Melih', 'Vivien', 'Huzeyfe', 'Cyprien', 'Adrien'].map((name) => (
                <div 
                  key={name}
                  className="bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-all"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold">{name.charAt(0)}</span>
                  </div>
                  <h3 className="text-sm font-medium text-white">{name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Gamepad2 className="w-8 h-8 text-blue-500" />
                <h2 className="text-4xl font-bold text-white">
                  How to Play
                </h2>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Objective</h3>
                <div className="space-y-4 text-gray-400">
                  <p className="text-lg">
                    <strong className="text-white">Move</strong> through the 3 available lanes
                  </p>
                  <p className="text-lg">
                    <strong className="text-white">Avoid</strong> all incoming obstacles
                  </p>
                  <p className="text-lg">
                    <strong className="text-white">Hold the pose</strong> when it appears on screen
                  </p>
                  <p className="text-lg">
                    <strong className="text-white">Discover</strong> new worlds as you progress
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Life System</h3>
                <p className="text-gray-400 mb-4">
                  You have 3 lives total. Don't lose them all!
                </p>
                <div className="space-y-3">
                  <p className="text-gray-400">
                    ❌ <strong className="text-white">-1 life</strong> if you hit an obstacle
                  </p>
                  <p className="text-gray-400">
                    ⚠️ <strong className="text-white">-1 life</strong> if you miss a pose
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-500">
              Created for Nuit MMI 2026 - Exergaming Challenge
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Developed with p5.play, ML5.js and MakeyMakey
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}