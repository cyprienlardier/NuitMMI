import { Play, Github, Zap, Heart, TrendingUp, Sparkles, Users, Target, Gamepad2, Camera, Trophy, Code, Palette, Layers } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section - Nom du jeu */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Logo/Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-2xl opacity-50"></div>
                <Gamepad2 className="w-24 h-24 relative text-cyan-400" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Move on the Pose
            </h1>

            {/* Tagline */}
            <p className="text-2xl md:text-3xl text-purple-200 mb-12">
              Bouge ton corps, évite les obstacles et tiens la pose !
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <Camera className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-cyan-400">ML5.js</div>
                <div className="text-sm text-gray-400">Détection de mouvement</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-400">MakeyMakey</div>
                <div className="text-sm text-gray-400">Contrôles physiques</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <Heart className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-pink-400">3 Voies</div>
                <div className="text-sm text-gray-400">Déplacement</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <Target className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-yellow-400">3 Vies</div>
                <div className="text-sm text-gray-400">À ne pas perdre</div>
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
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Users className="w-10 h-10 text-cyan-400" />
                <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                  L'Équipe
                </h2>
              </div>
              <p className="text-xl text-gray-400">
                Une équipe passionnée pour la Nuit MMI 2026
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {['Jullian', 'Melih', 'Vivien', 'Huzeyfe', 'Cyprien', 'Adrien'].map((name, index) => (
                <div 
                  key={name}
                  className="bg-gradient-to-br from-purple-900/40 to-cyan-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 text-center hover:border-cyan-400/50 transition-all transform hover:scale-105"
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
                <Gamepad2 className="w-10 h-10 text-purple-400" />
                <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Comment Jouer
                </h2>
              </div>
              <p className="text-xl text-gray-400">
                Règles du jeu et objectifs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Objectif du jeu */}
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-10 h-10 text-purple-400" />
                  <h3 className="text-3xl font-bold text-purple-300">Objectif</h3>
                </div>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-400">1</span>
                    </div>
                    <p className="text-lg">
                      <strong className="text-white">Déplace-toi</strong> dans les <strong className="text-cyan-400">3 voies</strong> disponibles
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-400">2</span>
                    </div>
                    <p className="text-lg">
                      <strong className="text-white">Évite</strong> tous les obstacles qui arrivent
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-400">3</span>
                    </div>
                    <p className="text-lg">
                      <strong className="text-white">Tiens la pose</strong> demandée quand elle apparaît
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-400">4</span>
                    </div>
                    <p className="text-lg">
                      <strong className="text-white">Découvre</strong> de nouveaux mondes en avançant
                    </p>
                  </div>
                </div>
              </div>

              {/* Règles de vie */}
              <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-10 h-10 text-red-400" />
                  <h3 className="text-3xl font-bold text-red-300">Système de Vies</h3>
                </div>
                <div className="space-y-6">
                  <div className="bg-black/30 p-6 rounded-xl border border-red-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Heart className="w-6 h-6 text-red-400 fill-red-400" />
                      <Heart className="w-6 h-6 text-red-400 fill-red-400" />
                      <Heart className="w-6 h-6 text-red-400 fill-red-400" />
                    </div>
                    <p className="text-lg text-white font-bold mb-2">Tu as 3 vies au total</p>
                    <p className="text-gray-400">Ne les perds pas toutes !</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                      <span className="text-2xl">❌</span>
                      <div>
                        <p className="text-white font-semibold">Obstacle touché</p>
                        <p className="text-sm text-gray-400">-1 vie si tu percutes un obstacle</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                      <span className="text-2xl">⚠️</span>
                      <div>
                        <p className="text-white font-semibold">Pose manquée</p>
                        <p className="text-sm text-gray-400">-1 vie si tu ne fais pas la pose demandée</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progression */}
            <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-10 h-10 text-cyan-400" />
                <h3 className="text-3xl font-bold text-cyan-300">Progression</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white/5 rounded-xl border border-cyan-500/20">
                  <div className="text-5xl mb-3">🏃</div>
                  <h4 className="text-xl font-bold text-cyan-300 mb-2">Avance</h4>
                  <p className="text-gray-400">Plus tu vas loin, plus le jeu devient intéressant</p>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-xl border border-purple-500/20">
                  <div className="text-5xl mb-3">🌍</div>
                  <h4 className="text-xl font-bold text-purple-300 mb-2">Explore</h4>
                  <p className="text-gray-400">Découvre des mondes différents en jouant</p>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-xl border border-pink-500/20">
                  <div className="text-5xl mb-3">⚡</div>
                  <h4 className="text-xl font-bold text-pink-300 mb-2">Difficulté</h4>
                  <p className="text-gray-400">Le défi augmente au fur et à mesure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Play Now Section */}
      <section id="play" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-cyan-900/40 to-purple-900/40 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-12">
              <Gamepad2 className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                Prêt à Jouer ?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Lance le jeu et commence ton aventure d'exergaming !
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="/game" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 rounded-full font-bold text-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  <Play className="w-7 h-7" />
                  Lancer le Jeu
                  <Sparkles className="w-6 h-6 group-hover:animate-spin" />
                </a>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-400 mb-4">Assure-toi d'avoir :</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Camera className="w-5 h-5 text-cyan-400" />
                    Webcam activée
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    MakeyMakey connecté
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Heart className="w-5 h-5 text-pink-400" />
                    De l'espace pour bouger
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
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full mb-4">
                <span className="text-cyan-300 font-semibold">Prochainement</span>
              </div>
              <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                Version 2.0 - Améliorations Futures
              </h2>
              <p className="text-xl text-gray-400">
                Les fonctionnalités que nous prévoyons d'ajouter pour rendre le jeu encore meilleur
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Amélioration 1 - Difficulté */}
              <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8 hover:border-orange-400/50 transition-all">
                <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-orange-300 mb-3">Niveaux de Difficulté</h3>
                <p className="text-gray-400 mb-4">
                  Ajout de plusieurs niveaux de difficulté (Facile, Moyen, Difficile, Expert) pour s'adapter à tous les joueurs, des débutants aux experts. La vitesse des obstacles, la fréquence des poses et le temps de réaction pourront être ajustés.
                </p>
                <div className="aspect-video bg-black/30 rounded-lg flex items-center justify-center border border-orange-500/20">
                  <div className="text-center p-4">
                    <Trophy className="w-12 h-12 text-orange-400/50 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">Menu de sélection de difficulté</p>
                  </div>
                </div>
              </div>

              {/* Amélioration 2 - Beauté */}
              <div className="bg-gradient-to-br from-pink-900/40 to-purple-900/40 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-8 hover:border-pink-400/50 transition-all">
                <div className="w-16 h-16 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-4">
                  <Palette className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-pink-300 mb-3">Graphismes Améliorés</h3>
                <p className="text-gray-400 mb-4">
                  Design visuel plus abouti avec des animations fluides, des effets de particules, des arrière-plans dynamiques et des transitions entre les mondes. Amélioration des sprites et de l'interface utilisateur pour une expérience plus immersive.
                </p>
                <div className="aspect-video bg-black/30 rounded-lg flex items-center justify-center border border-pink-500/20">
                  <div className="text-center p-4">
                    <Sparkles className="w-12 h-12 text-pink-400/50 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">Aperçu des nouveaux graphismes</p>
                  </div>
                </div>
              </div>

              {/* Amélioration 3 - Code */}
              <div className="bg-gradient-to-br from-green-900/40 to-teal-900/40 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 hover:border-green-400/50 transition-all">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-4">
                  <Code className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-green-300 mb-3">Optimisation Technique</h3>
                <p className="text-gray-400 mb-4">
                  Refactorisation du code pour une meilleure performance, optimisation de la détection des collisions, réduction de la latence, amélioration de la structure du projet et ajout de commentaires pour faciliter la maintenance et les futures améliorations.
                </p>
                <div className="aspect-video bg-black/30 rounded-lg flex items-center justify-center border border-green-500/20">
                  <div className="text-center p-4">
                    <Layers className="w-12 h-12 text-green-400/50 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">Architecture du code optimisée</p>
                  </div>
                </div>
              </div>

              {/* Amélioration 4 - Face Cam */}
              <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/50 transition-all">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4">
                  <Camera className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-blue-300 mb-3">Détection Corps Entier</h3>
                <p className="text-gray-400 mb-4">
                  Amélioration de la détection ML5.js pour capturer le corps entier au lieu du buste uniquement. Cela permettra de reconnaître plus de poses et d'obtenir une meilleure précision dans les mouvements, rendant l'expérience plus immersive et réactive.
                </p>
                <div className="aspect-video bg-black/30 rounded-lg flex items-center justify-center border border-blue-500/20">
                  <div className="text-center p-4">
                    <Camera className="w-12 h-12 text-blue-400/50 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">Détection complète du corps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400 mb-2">
              Créé pour la Nuit MMI 2026 - Challenge Exergaming
            </p>
            <p className="text-sm text-gray-500">
              Développé avec p5.play, ML5.js et MakeyMakey
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}