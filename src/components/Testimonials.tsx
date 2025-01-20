import Image from 'next/image';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Digital Artist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    quote: "Genova AI has revolutionized my creative workflow. The image quality is exceptional, and the speed at which I can generate concept art is incredible. It's become an essential tool in my digital art studio.",
    rating: 5,
    location: "San Francisco, CA"
  },
  {
    name: "Marcus Thompson",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    quote: "We've been using Genova AI for our marketing campaigns, and the results have been phenomenal. The AI understands brand aesthetics perfectly, and the generated images consistently align with our vision.",
    rating: 5,
    location: "New York, NY"
  },
  {
    name: "Elena Rodriguez",
    role: "Game Developer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    quote: "The variety and quality of images I can create with Genova AI is mind-blowing. It's helped us speed up our game development process significantly. The fantasy characters it generates are incredibly detailed.",
    rating: 5,
    location: "Austin, TX"
  },
  {
    name: "David Park",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    quote: "What impresses me most about Genova AI is its consistency in style. I can generate multiple images that maintain the same aesthetic, which is crucial for creating cohesive design systems.",
    rating: 5,
    location: "Seattle, WA"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400' : 'text-gray-400'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                    unoptimized
                  />
                  <div className="absolute -bottom-2 -right-2 bg-purple-500 rounded-full p-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <p className="mt-2 text-sm text-gray-300">{testimonial.location}</p>
                  <blockquote className="mt-4 text-gray-300 italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
