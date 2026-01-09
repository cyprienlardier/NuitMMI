import { Play, Github, Zap, Heart, TrendingUp, Sparkles, Users, Target, Gamepad2, Camera, Trophy, Code, Palette, Layers } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white">
      {/* Hero Section - Nom du jeu */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Logo/Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 blur-2xl opacity-50"></div>
                <Gamepad2 className="w-24 h-24 relative text-blue-400" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300">
              Move on the Pose
            </h1>

            {/* Tagline */}
            <p className="text-2xl md:text-3xl text-indigo-200 mb-12">
              Move your body, dodge obstacles and hold the pose!
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-black/40 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-4">
                <Camera className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-400">ML5.js</div>
                <div className="text-sm text-gray-400">Motion detection</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-4">
                <Zap className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-indigo-400">MakeyMakey</div>
                <div className="text-sm text-gray-400">Physical controls</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-4">
                <Heart className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-300">3 Lanes</div>
                <div className="text-sm text-gray-400">Movement</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-4">
                <Target className="w-8 h-8 text-indigo-300 mx-auto mb-2" />
                <div className="text-2xl font-bold text-indigo-300">3 Lives</div>
                <div className="text-sm text-gray-400">Don't lose them all</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Users className="w-10 h-10 text-blue-400" />
                <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                  The Team
                </h2>
              </div>
              <p className="text-xl text-gray-400">
                A passionate team for Nuit MMI 2026
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {['Jullian', 'Melih', 'Vivien', 'Huzeyfe', 'Cyprien', 'Adrien'].map((name, index) => (
                <div 
                  key={name}
                  className="bg-gradient-to-br from-purple-950/60 to-cyan-950/60 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center hover:border-cyan-400/50 transition-all transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold">{name.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Game Rules Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Gamepad2 className="w-10 h-10 text-indigo-400" />
                <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
                  How to Play
                </h2>
              </div>
              <p className="text-xl text-gray-400">
                Game rules and objectives
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Objectif du jeu */}
              <div className="bg-gradient-to-br from-indigo-950/70 to-blue-950/70 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-10 h-10 text-indigo-400" />
                  <h3 className="text-3xl font-bold text-indigo-300">Objective</h3>
                </div>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-indigo-400">1</span>
                    </div>
                    <p className="text-lg">
                      <strong className="text-white">Move</strong> through the <strong className="text-blue-400">3 available lanes</strong>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-indigo-400">2</span>
                    </div>
                    <p className="text-lg">
                      <strong className="text-white">Avoid</strong> all incoming obstacles
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-indigo-400">3</span>
                    </div>
                    <p className="text-lg">
                      <strong className="text-white">Hold the pose</strong> when it appears on screen
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-indigo-400">4</span>
                    </div>
                    <p className="text-lg">
                      <strong className="text-white">Discover</strong> new worlds as you progress
                    </p>
                  </div>
                </div>
              </div>

              {/* Règles de vie */}
              <div className="bg-gradient-to-br from-slate-950/70 to-gray-900/70 backdrop-blur-sm border border-slate-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-10 h-10 text-slate-400" />
                  <h3 className="text-3xl font-bold text-slate-300">Life System</h3>
                </div>
                <div className="space-y-6">
                  <div className="bg-black/60 p-6 rounded-xl border border-slate-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Heart className="w-6 h-6 text-slate-400 fill-slate-400" />
                      <Heart className="w-6 h-6 text-slate-400 fill-slate-400" />
                      <Heart className="w-6 h-6 text-slate-400 fill-slate-400" />
                    </div>
                    <p className="text-lg text-white font-bold mb-2">You have 3 lives total</p>
                    <p className="text-gray-400">Don't lose them all!</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 bg-red-950/40 p-4 rounded-lg border border-red-500/20">
                      <span className="text-2xl">❌</span>
                      <div>
                        <p className="text-white font-semibold">Hit an obstacle</p>
                        <p className="text-sm text-gray-400">-1 life if you collide with an obstacle</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-red-950/40 p-4 rounded-lg border border-red-500/20">
                      <span className="text-2xl">⚠️</span>
                      <div>
                        <p className="text-white font-semibold">Missed pose</p>
                        <p className="text-sm text-gray-400">-1 life if you don't hold the required pose</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progression */}
            <div className="bg-gradient-to-br from-blue-950/70 to-indigo-950/70 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-10 h-10 text-blue-400" />
                <h3 className="text-3xl font-bold text-blue-300">Progression</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-black/50 rounded-xl border border-blue-500/20">
                  <div className="text-5xl mb-3">🏃</div>
                  <h4 className="text-xl font-bold text-blue-300 mb-2">Advance</h4>
                  <p className="text-gray-400">The further you go, the more interesting it gets</p>
                </div>
                <div className="text-center p-6 bg-black/50 rounded-xl border border-indigo-500/20">
                  <div className="text-5xl mb-3">🌍</div>
                  <h4 className="text-xl font-bold text-indigo-300 mb-2">Explore</h4>
                  <p className="text-gray-400">Discover different worlds as you play</p>
                </div>
                <div className="text-center p-6 bg-black/50 rounded-xl border border-blue-400/20">
                  <div className="text-5xl mb-3">⚡</div>
                  <h4 className="text-xl font-bold text-blue-300 mb-2">Difficulty</h4>
                  <p className="text-gray-400">Challenge increases progressively</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Play Now Section */}
      <section id="play" className="py-20 bg-black/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-blue-950/70 to-indigo-950/70 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-12">
              <Gamepad2 className="w-20 h-20 text-blue-400 mx-auto mb-6" />
              <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                Ready to Play?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Launch the game and start your exergaming adventure!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="/game" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full font-bold text-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3">
                >
                  <Play className="w-7 h-7" />
                  Launch Game
                  <Sparkles className="w-6 h-6 group-hover:animate-spin" />
                </a>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-400 mb-4">Make sure you have:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Camera className="w-5 h-5 text-blue-400" />
                    Webcam enabled
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Zap className="w-5 h-5 text-indigo-400" />
                    MakeyMakey connected
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Heart className="w-5 h-5 text-blue-300" />
                    Space to move
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Version 2.0 Section */}
      <section id="v2" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full mb-4">
                <span className="text-blue-300 font-semibold">Coming Soon</span>
              </div>
              <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                Version 2.0 - Future Improvements
              </h2>
              <p className="text-xl text-gray-400">
                Features we plan to add to make the game even better
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Amélioration 1 - Difficulté */}
              <div className="bg-gradient-to-br from-orange-950/70 to-red-950/70 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 hover:border-orange-400/50 transition-all">
                <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-orange-300 mb-3">Difficulty Levels</h3>
                <p className="text-gray-400 mb-4">
                  Adding multiple difficulty levels (Easy, Medium, Hard, Expert) to suit all players, from beginners to experts. Obstacle speed, pose frequency, and reaction time will be adjustable.
                </p>
                <div className="aspect-video bg-black/70 rounded-lg flex items-center justify-center border border-orange-500/20">
                  <div className="text-center p-4">
                    <Trophy className="w-12 h-12 text-orange-400/50 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">Difficulty selection menu</p>
                  </div>
                </div>
              </div>

              {/* Amélioration 2 - Beauté */}
              <div className="bg-gradient-to-br from-pink-950/70 to-purple-950/70 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-8 hover:border-pink-400/50 transition-all">
                <div className="w-16 h-16 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-4">
                  <Palette className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-pink-300 mb-3">Enhanced Graphics</h3>
                <p className="text-gray-400 mb-4">
                  More polished visual design with fluid animations, particle effects, dynamic backgrounds, and transitions between worlds. Improved sprites and user interface for a more immersive experience.
                </p>
                <div className="aspect-video bg-black/30 rounded-lg flex items-center justify-center border border-pink-500/20">
                  <div className="text-center p-4">
                    <Sparkles className="w-12 h-12 text-pink-400/50 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">Preview of new graphics</p>
                  </div>
                </div>
              </div>

              {/* Amélioration 3 - Code */}
              <div className="bg-gradient-to-br from-green-950/70 to-teal-950/70 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 hover:border-green-400/50 transition-all">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-4">
                  <Code className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-green-300 mb-3">Technical Optimization</h3>
                <p className="text-gray-400 mb-4">
                  Code refactoring for better performance, collision detection optimization, latency reduction, improved project structure, and added comments to facilitate maintenance and future improvements.
                </p>
                <div className="aspect-video bg-black/30 rounded-lg flex items-center justify-center border border-green-500/20">
                  <div className="text-center p-4">
                    <Layers className="w-12 h-12 text-green-400/50 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">Optimized code architecture</p>
                  </div>
                </div>
              </div>

              {/* Amélioration 4 - Face Cam */}
              <div className="bg-gradient-to-br from-blue-950/70 to-cyan-950/70 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/50 transition-all">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4">
                  <Camera className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-blue-300 mb-3">Full Body Detection</h3>
                <p className="text-gray-400 mb-4">
                  Enhanced ML5.js detection to capture the entire body instead of just the torso. This will allow recognition of more poses and achieve better movement precision, making the experience more immersive and responsive.
                </p>
                <div className="aspect-video bg-black/30 rounded-lg flex items-center justify-center border border-blue-500/20">
                  <div className="text-center p-4">
                    <Camera className="w-12 h-12 text-blue-400/50 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">Full body detection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 py-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400 mb-2">
              Created for Nuit MMI 2026 - Exergaming Challenge
            </p>
            <p className="text-sm text-gray-500">
              Developed with p5.play, ML5.js and MakeyMakey
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}