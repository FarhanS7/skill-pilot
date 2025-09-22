"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
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
                <span className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent">
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
                  className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-200"
                >
                  Get Started
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 border-2 border-gray-300 hover:border-black transition-colors duration-200"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right side - AI Image */}
          <div className="relative h-[600px] flex items-center justify-center">
            <div className="relative w-96 h-96">
              <img
                src="https://img.freepik.com/free-photo/robot-performing-ordinary-human-job_23-2151008303.jpg?semt=ais_incoming&w=740&q=80"
                // src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="AI Technology and Career Growth"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />

              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>

              {/* AI label */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-2 bg-black text-white text-sm font-medium rounded-full shadow-lg">
                  AI Career Assistant
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
