import { FaCoffee, FaHeart, FaStar, FaBolt, FaRocket } from 'react-icons/fa';

export default function SupportUs() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-pink-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto relative">
        <div className="bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-purple-500/10">
          {/* Glowing orbs */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl" />
          
          <div className="relative">
            {/* Header */}
            <div className="flex flex-col items-center mb-10">
              <div className="mb-6 relative">
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl" />
                <FaCoffee className="text-5xl text-purple-400 relative z-10" />
              </div>
              
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                Join Our Creative Journey ✨
              </h2>
              
              <p className="text-gray-300 text-center max-w-2xl text-lg mb-4">
                Every masterpiece you create with Genova AI is a testament to the magic of human creativity and artificial intelligence coming together. Your support isn't just a coffee – it's fuel for innovation, a vote of confidence, and a shared dream of pushing creative boundaries.
              </p>
              
              <p className="text-purple-400/90 text-center max-w-2xl text-lg italic mb-6">
                "Behind every AI-generated image is a passionate developer working tirelessly to make your creative visions come true. Your support keeps this dream alive. ❤️"
              </p>
            </div>

            {/* Support Button */}
            <div className="flex justify-center mb-12">
              <a
                href="https://buymeacoffee.com/mohammedirfan"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
                <button className="relative flex items-center gap-3 px-8 py-4 bg-gray-900 rounded-2xl leading-none">
                  <FaCoffee className="text-2xl text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold text-lg group-hover:from-purple-300 group-hover:to-pink-300">
                    Buy me a coffee
                  </span>
                </button>
              </a>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/10 hover:border-purple-500/20 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <FaBolt className="text-xl text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-white text-lg">First Look Access</h3>
                </div>
                <p className="text-gray-400">Be part of our inner circle and shape the future of AI art. Experience tomorrow's features today.</p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/10 hover:border-purple-500/20 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <FaRocket className="text-xl text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-white text-lg">Creator's Circle</h3>
                </div>
                <p className="text-gray-400">Join our exclusive community of visionaries. Get personalized support and priority access to new features.</p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/10 hover:border-purple-500/20 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <FaStar className="text-xl text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-white text-lg">Special Recognition</h3>
                </div>
                <p className="text-gray-400">Your name immortalized in our Hall of Fame. Plus, exclusive high-resolution outputs and premium features.</p>
              </div>
            </div>

            {/* Supporter Stats */}
            <div className="mt-10 flex items-center justify-center gap-2 text-gray-400">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full backdrop-blur-sm">
                <FaHeart className="text-pink-500" />
                <span className="text-sm">Joined by a community of 100+ visionary creators</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
