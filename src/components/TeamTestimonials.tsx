import { useState, useEffect, useRef } from "react";
import TeamMember from "./TeamMember";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TeamTestimonials = () => {
  const teamMembers = [
    {
      name: "Rameshkumar Rajarathanam",
      designation: "CEO | Software/Simulation Specialist",
      description: "Expert in developing Hardware-in-the-Loop (HIL) simulators, with extensive experience in C programming and MATLAB scripting.",
      image: "/team/RameshKumar.png"
    },
    {
      name: "Tiberiu Stanciu",
      designation: "Renewable Energy Specialist",
      description: "A renewable energy consultant assists clients in conducting investigations in order to better understand and direct the installation of renewable energy systems.",
      image: "/team/Tiberiu.png"
    },
    {
      name: "Faouzi AL MOUTAMID",
      designation: "Battery Management Specialist",
      description: "The Energy Specialist is primarily responsible for completing walk through energy efficiency assessments",
      image: "/team/Faouzi.png"
    },
    {
      name: "Fabio Delgado Cabrera",
      designation: "Senior Data Engineer",
      description: "Senior Data Engineer is responsible for creating effective technological solutions for work with big data.",
      image: "/team/Fabio.png"
    },
    {
      name: "Yashar Mohammed",
      designation: "Senior Lead Engineer Connectivity",
      description: "Lead Engineers manage engineering teams, oversee project development, ensure code quality, and collaborate with other departments to meet project goals.",
      image: "/team/Yashar.png"
    },
    {
      name: "Sajendra Prasad Chandran",
      designation: "Human Resource Manager",
      description: "The Human Resources Specialist leads strategic initiatives in talent acquisition, employee engagement, and workforce development to foster a thriving organizational culture.",
      image: "/team/Sajendraprasad.png"
    },
    {
      name: "Prabhakaran Sundaralingam",
      designation: "Hardware Engineer",
      description: "A seasoned Hardware Engineer with over 5 years of experience in electronics product development, focusing on the entire lifecycle from circuit design to design verification testing.",
      image: "/team/Prabhakaran.png"
    },
    {
      name: "Vinay Kumar S Lokare",
      designation: "Senior Software Engineer",
      description: "Embedded Software Engineer with expertise in UART, SPI, CAN, and I2C protocols, specializing in developing and optimizing software for microcontrollers.",
      image: "/team/Vinay.png"
    },
    {
      name: "Rajavel Rajendiran",
      designation: "SSenior Software Engineer",
      description: "The Senior Software Engineer drives model-based development and testing for Battery Management Systems (BMS).",
      image: "/team/Rajavelu.png"
    },
    {
      name: "Nallasivam Selvaraj",
      designation: "Software Engineer",
      description: "Experienced Software Engineer with expertise in DevOps, Python, C++ and software development, specializing in application development and user interface design.",
      image: "/team/Nallasivam.png"
    },
    {
      name: "Hari Ramar",
      designation: "Web Developer",
      description: "Specializes in building scalable and efficient web applications using a diverse technology stack, including React, Node.js, Express, PostgreSQL, Django, and Flask.",
      image: "/team/Hari.png"
    },
    {
      name: "Akilasekar Kalirajan",
      designation: "System Engineer",
      description: "System Engineer specializing in Model-Based Development (MBD), Battery Management Systems (BMS), and BMS testing chamber design.",
      image: "/team/Akilasekar.png"
    },
    {
      name: "Agilan Arulchelvam",
      designation: "Machine Learning Engineer",
      description: "A dynamic Data Analyst proficient in SQL, Python, and Data Visualization. ",
      image: "/team/Agilan.png"
    },
    {
      name: "Maarimuthu Rajagopal",
      designation: "Embedded Firmware Engineer",
      description: "Experienced in developing and optimizing firmware for microcontrollers with expertise in UART, SPI, CAN, and I2C protocols.",
      image: "/team/Maari.png"
    },
    {
      name: "Murali Dharan",
      designation: "Software Tester",
      description: "Drives quality assurance efforts by leveraging cutting-edge tools and methodologies, including Cucumber, to ensure the delivery of robust and reliable software solutions.",
      image: "/team/Muralidharan.png"
    },
     {
      name: "Saran Muthumanickam",
      designation: "Research Engineer",
      description: "Specializes in bioinformatics and genetics, driving innovation at the intersection of computational science and biology.",
      image: "/team/Saran.png"
    },
    {
      name: "Divya Rosy",
      designation: "Front End Developer",
      description: "Specializes in React development, crafting dynamic and user-friendly web interfaces that deliver exceptional user experiences.",
      image: "/team/Divya.png"
    },
    {
      name: "Giri Velavan Nijalingappan",
      designation: "Junior Embedded Engineer",
      description: "Embedded Software Engineer specializing in developing and optimizing software for microcontrollers and embedded systems.",
      image: "/team/Girivelavan.png"
    }
  ];

  // Create infinite loop by duplicating the array
  const infiniteMembers = [...teamMembers, ...teamMembers, ...teamMembers];
  const startIndex = teamMembers.length; // Start from the middle set

  // Initialize with middle set to allow infinite scrolling in both directions
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isInView, setIsInView] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

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

  // Intersection Observer to detect if component is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
        rootMargin: '0px 0px -100px 0px' // Add some margin to trigger earlier
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
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

  // Auto-play functionality - only when component is in view
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-muted/30" id="team">
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