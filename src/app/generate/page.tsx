'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Loading spinner component
const LoadingSpinner = () => (
  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
);

export default function GeneratePage() {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate image');
      }

      // Set the generated image URL in state
      setGeneratedImage(data.data[0].url);
    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate image');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!generatedImage) return;

    try {
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = `generated-image-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Error downloading image:', err);
      setError('Failed to download image');
    }
  };

  // Clear the generated image when leaving the page
  const handleNavigateAway = () => {
    setGeneratedImage(null);
    setPrompt('');
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/"
            className="text-purple-400 hover:text-purple-300 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold gradient-text">Generate Image</h1>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl p-6 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 min-h-[100px] resize-none"
                placeholder="A serene lake at sunset with mountains in the background, realistic photography..."
                required
              />
              <div className="absolute bottom-3 right-3 text-gray-400 text-sm">
                {prompt.length}/1000
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
                loading
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 hover:shadow-lg'
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <LoadingSpinner />
                  <span>Generating...</span>
                </span>
              ) : (
                'Generate Image'
              )}
            </button>
          </form>

          {error && (
            <div className="mt-4 bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg text-center">
              {error}
            </div>
          )}

          {generatedImage && (
            <div className="mt-4 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl p-6">
              <div className="relative aspect-square w-full md:w-2/3 lg:w-1/2 mx-auto overflow-hidden rounded-lg">
                <Image
                  src={generatedImage}
                  alt={prompt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  unoptimized
                />
              </div>
              <div className="mt-4 text-sm text-gray-400">
                <p className="font-semibold">Prompt:</p>
                <p>{prompt}</p>
              </div>
              <div className="mt-4 flex flex-col items-center gap-2">
                <button
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download Image
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
