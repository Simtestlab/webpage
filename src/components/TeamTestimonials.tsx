import { useState, useEffect, useRef } from "react";
import TeamMember from "./TeamMember";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TeamTestimonials = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      designation: "Chief Technology Officer",
      description: "Leading our R&D initiatives with 15+ years in battery technology and renewable energy systems. Pioneering next-generation BMS solutions.",
      image: "/team/sarah-chen.jpg"
    },
    {
      name: "Michael Rodriguez",
      designation: "Head of Engineering",
      description: "Overseeing product development and ensuring our systems meet the highest safety standards. Expert in grid-scale energy storage solutions.",
      image: "/team/michael-rodriguez.jpg"
    },
    {
      name: "Dr. Priya Patel",
      designation: "Director of Sustainability",
      description: "Driving our commitment to sustainable practices and circular economy principles. Leading our battery recycling and second-life programs.",
      image: "/team/priya-patel.jpg"
    },
    {
      name: "James Thompson",
      designation: "VP of Operations",
      description: "Ensuring seamless delivery and deployment of our energy solutions worldwide. 20+ years experience in industrial automation.",
      image: "/team/james-thompson.jpg"
    },
    {
      name: "Dr. Li Wei",
      designation: "Senior Research Scientist",
      description: "Developing advanced battery chemistries and thermal management systems. PhD in Materials Science from MIT.",
      image: "/team/li-wei.jpg"
    }
  ];

  // Create infinite loop by duplicating the array
  const infiniteMembers = [...teamMembers, ...teamMembers, ...teamMembers];
  const startIndex = teamMembers.length; // Start from the middle set

  // Initialize with middle set to allow infinite scrolling in both directions
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      // Reset to beginning of middle set when reaching end
      if (newIndex >= startIndex + teamMembers.length) {
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'none';
            setCurrentIndex(startIndex);
            setTimeout(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition = 'transform 500ms ease-in-out';
              }
            }, 50);
          }
        }, 500);
      }
      return newIndex;
    });
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      // Reset to end of middle set when reaching beginning
      if (newIndex < startIndex) {
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'none';
            setCurrentIndex(startIndex + teamMembers.length - 1);
            setTimeout(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition = 'transform 500ms ease-in-out';
              }
            }, 50);
          }
        }, 500);
      }
      return newIndex;
    });
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Get the actual member index for dot indicators
  const getActualIndex = () => {
    return (currentIndex - startIndex + teamMembers.length) % teamMembers.length;
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The brilliant minds driving the future of energy storage technology
          </p>
        </div>

        <div className="relative">
          {/* Main carousel container */}
          <div className="overflow-hidden">
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
              }}
            >
              {infiniteMembers.map((member, index) => (
                <div 
                  key={`${member.name}-${index}`} 
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                >
                  <TeamMember {...member} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={isAnimating}
              className="rounded-full w-12 h-12 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(startIndex + index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === getActualIndex()
                      ? 'bg-primary scale-110'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={isAnimating}
              className="rounded-full w-12 h-12 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>


      </div>
    </section>
  );
};

export default TeamTestimonials;