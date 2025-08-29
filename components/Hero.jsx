// "use client";

// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef } from "react";

// const HeroSection = () => {
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const imageElement = imageRef.current;

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const scrollThreshold = 100;

//       if (scrollPosition > scrollThreshold) {
//         imageElement.classList.add("scrolled");
//       } else {
//         imageElement.classList.remove("scrolled");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="w-full pt-36 md:pt-48 pb-10">
//       <div className="space-y-6 text-center">
//         <div className="space-y-6 mx-auto">
//           <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">
//             Your AI Career Coach for
//             <br />
//             Professional Success
//           </h1>
//           <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
//             Advance your career with personalized guidance, interview prep, and
//             AI-powered tools for job success.
//           </p>
//         </div>
//         <div className="flex justify-center space-x-4">
//           <Link href="/dashboard">
//             <Button size="lg" className="px-8">
//               Get Started
//             </Button>
//           </Link>

//         </div>
//         <div className="hero-image-wrapper mt-5 md:mt-0">
//           <div ref={imageRef} className="hero-image">
//             <Image
//               src="/banner2.jpeg"
//               width={1280}
//               height={720}
//               alt="Dashboard Preview"
//               className="rounded-lg shadow-2xl border mx-auto"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const floatingRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    // Floating animation for the geometric shapes
    const floatingElements =
      floatingRef.current?.querySelectorAll(".floating-element");
    floatingElements?.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.5}s`;
    });
  }, []);

  return (
    <section className="w-full min-h-screen flex items-center pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium border">
                  ✨ AI-Powered Career Growth
                </span>
              </div>

              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                Your AI Career Coach for
                <br />
                <span className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent animate-gradient">
                  Professional Success
                </span>
              </h1>

              <p className="text-lg text-gray-600 max-w-[500px] leading-relaxed">
                Advance your career with personalized guidance, interview prep,
                and AI-powered tools designed for your professional success
                journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 border-2 border-gray-300 hover:border-black transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Stats or features */}
          </div>

          {/* Right side - Animated elements */}
          <div
            className="relative h-[600px] flex items-center justify-center"
            ref={floatingRef}
          >
            {/* Main central circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-gray-900 to-gray-600 animate-pulse shadow-2xl flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gray-900"
                  >
                    <path
                      d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating geometric shapes */}
            <div className="floating-element absolute top-20 left-10 w-16 h-16 border-2 border-gray-300 rotate-45 animate-float-slow opacity-60"></div>

            <div className="floating-element absolute top-32 right-20 w-20 h-20 rounded-full border-2 border-gray-400 animate-float-medium opacity-40"></div>

            <div className="floating-element absolute bottom-32 left-20 w-12 h-12 bg-gray-200 rotate-12 animate-float-fast opacity-70"></div>

            <div className="floating-element absolute bottom-20 right-10 w-14 h-14 border-2 border-gray-500 rounded-full animate-float-slow opacity-50"></div>

            <div className="floating-element absolute top-40 left-1/2 w-6 h-6 bg-gray-800 rounded-full animate-float-medium opacity-80"></div>

            <div className="floating-element absolute bottom-40 right-1/3 w-8 h-8 border-2 border-gray-600 transform rotate-45 animate-float-fast opacity-60"></div>

            {/* Orbiting elements */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-700 rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-500 rounded-full"></div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-600 rounded-full"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-800 rounded-full"></div>
              </div>
            </div>

            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                  linear-gradient(to right, #000 1px, transparent 1px),
                  linear-gradient(to bottom, #000 1px, transparent 1px)
                `,
                  backgroundSize: "40px 40px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(90deg);
          }
        }

        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(45deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
