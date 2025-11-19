import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Menu,
  X,
  Instagram,
  Youtube,
  Award,
  Dumbbell,
  Apple,
  Trophy,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";

import heroImage from "@assets/generated_images/Hero_background_gym_workout_4c4725a8.png";
import aboutImage from "@assets/generated_images/About_me_portrait_8846eb09.png";
import homeWorkoutImage from "@assets/generated_images/Home_workouts_program_card_508aef60.png";
import gymPlanImage from "@assets/generated_images/Gym_plans_program_card_8c031801.png";
import dietPlanImage from "@assets/generated_images/Diet_plans_program_card_57a229c3.png";
import challengeImage from "@assets/generated_images/30-day_challenge_program_card_5749d792.png";
import blogImage1 from "@assets/generated_images/Blog_card_fitness_tips_45de0a07.png";
import blogImage2 from "@assets/generated_images/Blog_card_nutrition_guide_e2b22c58.png";
import blogImage3 from "@assets/generated_images/Blog_card_wellness_lifestyle_e3dfb4e9.png";
import blogImage4 from "@assets/generated_images/Blog_card_strength_training_ad53f6ae.png";
import transformBefore1 from "@assets/generated_images/Transformation_before_photo_1_7f4557fb.png";
import transformAfter1 from "@assets/generated_images/Transformation_after_photo_1_1006215c.png";
import transformBefore2 from "@assets/generated_images/Transformation_before_photo_2_6b907c1a.png";
import transformAfter2 from "@assets/generated_images/Transformation_after_photo_2_b5da97b9.png";
import transformBefore4 from "@assets/generated_images/Transformation_before_photo_4_dc41e7fd.png";
import transformAfter4 from "@assets/generated_images/Transformation_after_photo_4_5ca4ea98.png";

const navigation = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Transformations", href: "#transformations" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const programs = [
  {
    id: 1,
    title: "Home Workouts",
    description: "Effective workouts you can do anywhere, with minimal equipment needed.",
    image: homeWorkoutImage,
    icon: Dumbbell,
  },
  {
    id: 2,
    title: "Gym Plans",
    description: "Structured programs designed to maximize your gym sessions and build strength.",
    image: gymPlanImage,
    icon: Trophy,
  },
  {
    id: 3,
    title: "Diet Plans",
    description: "Personalized nutrition guidance to fuel your fitness journey and reach your goals.",
    image: dietPlanImage,
    icon: Apple,
  },
  {
    id: 4,
    title: "Personal Training",
    description: "One-on-one coaching tailored to your unique goals and fitness level.",
    image: challengeImage,
    icon: Award,
  },
];

const transformations = [
  {
    id: 1,
    before: transformBefore1,
    after: transformAfter1,
    name: "Sarah M.",
    testimonial: "Lost 35 pounds and gained confidence I never knew I had. Alex's guidance changed my life!",
  },
  {
    id: 2,
    before: transformBefore2,
    after: transformAfter2,
    name: "Mike T.",
    testimonial: "Built muscle and strength beyond my expectations. Best investment in myself I've ever made!",
  },
  {
    id: 3,
    before: transformBefore4,
    after: transformAfter4,
    name: "David R.",
    testimonial: "Down 50 pounds and stronger than ever. This program gave me the tools to completely change my lifestyle!",
  },
];

const blogPosts = [
  {
    id: 1,
    title: "5 Essential Exercises for Core Strength",
    excerpt: "Build a rock-solid core with these fundamental movements that every fitness enthusiast should master.",
    image: blogImage1,
    category: "Workouts",
    content: `A strong core is the foundation of all athletic movement and everyday activities. Here are five essential exercises that will help you build a rock-solid midsection:

1. **Planks**: The king of core exercises. Start with 30 seconds and work your way up to 2 minutes. Focus on keeping your body in a straight line from head to heels.

2. **Dead Bugs**: This exercise teaches proper core stability while moving your limbs. Lie on your back and alternate extending opposite arm and leg while keeping your lower back pressed to the floor.

3. **Pallof Press**: A fantastic anti-rotation exercise that builds functional core strength. Use a resistance band or cable machine and press out while resisting rotation.

4. **Bird Dogs**: Similar to dead bugs but performed on all fours. This exercise improves balance and coordination while strengthening your core.

5. **Mountain Climbers**: A dynamic core exercise that also gets your heart rate up. Focus on keeping your hips level and core engaged throughout the movement.

Remember, consistency is key. Perform these exercises 3-4 times per week for best results!`,
  },
  {
    id: 2,
    title: "Nutrition 101: Fueling Your Fitness",
    excerpt: "Learn the basics of proper nutrition and how to eat for optimal performance and recovery.",
    image: blogImage2,
    category: "Nutrition",
    content: `Proper nutrition is just as important as your training. Here's what you need to know:

**Macronutrients:**
- **Protein**: Essential for muscle repair and growth. Aim for 0.8-1g per pound of bodyweight.
- **Carbohydrates**: Your body's primary energy source. Focus on complex carbs like oats, rice, and sweet potatoes.
- **Fats**: Important for hormone production. Include healthy fats from nuts, avocados, and olive oil.

**Meal Timing:**
- Eat protein with every meal
- Consume carbs around your workouts for energy and recovery
- Stay hydrated - aim for at least 8 glasses of water daily

**Pre-Workout Nutrition:**
Eat a balanced meal 2-3 hours before training, or a small snack 30-60 minutes before if needed.

**Post-Workout Nutrition:**
Within 30-60 minutes after training, consume protein and carbs to kickstart recovery.

Remember, nutrition is highly individual. These are guidelines - adjust based on your goals and how your body responds!`,
  },
  {
    id: 3,
    title: "The Importance of Rest & Recovery",
    excerpt: "Discover why rest days are just as important as training days for achieving your fitness goals.",
    image: blogImage3,
    category: "Wellness",
    content: `Many people underestimate the importance of recovery. Here's why rest days are crucial:

**Why Recovery Matters:**
- Your muscles grow during rest, not during workouts
- Prevents overtraining and burnout
- Reduces injury risk
- Improves performance in your next workout

**Types of Recovery:**

1. **Active Recovery**: Light activities like walking, swimming, or yoga
2. **Complete Rest**: Taking a full day off from structured exercise
3. **Sleep**: Aim for 7-9 hours per night - this is when most recovery happens

**Recovery Strategies:**
- **Stretching and Mobility Work**: Helps reduce muscle soreness and improve flexibility
- **Foam Rolling**: Can help release muscle tension
- **Proper Nutrition**: Fuel your body with quality foods
- **Hydration**: Essential for all recovery processes
- **Stress Management**: Mental recovery is just as important as physical

**How Often Should You Rest?**
Most people need at least 1-2 complete rest days per week. Listen to your body - if you're constantly fatigued, take an extra day off!`,
  },
  {
    id: 4,
    title: "Strength Training for Beginners",
    excerpt: "Get started with weight training safely and effectively with this comprehensive beginner's guide.",
    image: blogImage4,
    category: "Training",
    content: `Ready to start your strength training journey? Here's everything you need to know:

**Getting Started:**
- Start with bodyweight exercises or light weights
- Focus on learning proper form before adding weight
- Work with a trainer if possible for the first few sessions

**Basic Movement Patterns:**
1. **Push** (chest press, shoulder press)
2. **Pull** (rows, pull-ups)
3. **Squat** (bodyweight squats, goblet squats)
4. **Hinge** (deadlifts, hip thrusts)
5. **Carry** (farmer's walks)

**Beginner Program Structure:**
- Train 3 days per week
- Full body workouts
- 3-4 sets per exercise
- 8-12 reps per set
- Rest 1-2 minutes between sets

**Progressive Overload:**
Gradually increase the challenge by:
- Adding more weight
- Doing more reps
- Doing more sets
- Reducing rest time

**Common Mistakes to Avoid:**
- Ego lifting (using too much weight)
- Neglecting proper form
- Not warming up
- Training the same muscles daily
- Ignoring recovery

Remember: Everyone starts somewhere. Focus on consistency and gradual progress!`,
  },
];

const certifications = [
  "NASM Certified Personal Trainer",
  "Precision Nutrition Level 1",
  "ACE Group Fitness Instructor",
  "CPR & First Aid Certified",
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTransformation, setCurrentTransformation] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<typeof blogPosts[0] | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll(".fade-in-section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        if (isVisible) {
          section.classList.add("is-visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextTransformation = () => {
    setCurrentTransformation((prev) => (prev + 1) % transformations.length);
  };

  const prevTransformation = () => {
    setCurrentTransformation((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-black/30 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <span className={`text-2xl font-display font-extrabold transition-colors ${scrolled ? "text-foreground" : "text-white"}`} data-testid="text-brand-name">
                ALEX MORGAN
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8" data-testid="container-nav-desktop">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`hover:text-primary transition-colors duration-200 font-medium ${scrolled ? "text-foreground" : "text-white"}`}
                  data-testid={`link-nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={scrolled ? "" : "text-white hover:text-white hover:bg-white/20"}
                data-testid="button-mobile-menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border" data-testid="container-nav-mobile">
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white mb-6 fade-in-up" data-testid="heading-hero-title">
            TRANSFORM YOUR BODY
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 font-medium fade-in-up" style={{ animationDelay: "0.1s" }} data-testid="text-hero-tagline">
            Join thousands who've achieved their fitness goals with personalized training
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 fade-in-up" style={{ animationDelay: "0.2s" }}>
            <a href="#programs">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform"
                data-testid="button-view-programs"
              >
                View Programs
              </Button>
            </a>
            <a href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-transform"
                data-testid="button-join-challenge"
              >
                Get Started Today
              </Button>
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 fade-in-up" style={{ animationDelay: "0.3s" }} data-testid="group-hero-social-links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
              aria-label="Instagram"
              data-testid="link-hero-instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
              aria-label="YouTube"
              data-testid="link-hero-youtube"
            >
              <Youtube className="h-6 w-6" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
              aria-label="TikTok"
              data-testid="link-hero-tiktok"
            >
              <SiTiktok className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-background fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-foreground mb-6" data-testid="heading-about">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="text-about-bio-1">
                Hey there! I'm Alex Morgan, a certified fitness coach with over 8 years of experience helping people transform their bodies and lives. My journey started when I struggled with my own fitness, and now I'm passionate about guiding others to achieve what they never thought possible.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-about-bio-2">
                I believe fitness is more than just physical transformation—it's about building confidence, discipline, and a lifestyle you love. Whether you're just starting out or looking to take your training to the next level, I'm here to support you every step of the way.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-display font-bold text-foreground mb-4" data-testid="heading-certifications">
                  Certifications & Achievements
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2"
                      data-testid={`text-certification-${index}`}
                    >
                      <Award className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={aboutImage}
                alt="Alex Morgan - Fitness Coach"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                data-testid="img-about-portrait"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-card fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-foreground mb-4" data-testid="heading-programs">
              Programs & Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-programs-description">
              Choose from our range of personalized programs designed to help you achieve your specific fitness goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program) => (
              <Card
                key={program.id}
                className="group hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                data-testid={`card-program-${program.id}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    data-testid={`img-program-${program.id}`}
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary/90 p-2 rounded-md">
                      <program.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-bold text-foreground mb-3" data-testid={`heading-program-${program.id}`}>
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-program-description-${program.id}`}>
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Transformations Section */}
      <section id="transformations" className="py-20 bg-background fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-foreground mb-4" data-testid="heading-transformations">
              Client Transformations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-transformations-description">
              Real people, real results. See how our programs have transformed lives
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-card rounded-xl shadow-xl p-8" data-testid="card-transformation">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <Badge className="mb-4" data-testid="badge-before">Before</Badge>
                  <img
                    src={transformations[currentTransformation].before}
                    alt="Before transformation"
                    className="w-full h-96 object-cover rounded-lg"
                    data-testid="img-transformation-before"
                  />
                </div>
                <div>
                  <Badge variant="default" className="mb-4" data-testid="badge-after">After</Badge>
                  <img
                    src={transformations[currentTransformation].after}
                    alt="After transformation"
                    className="w-full h-96 object-cover rounded-lg"
                    data-testid="img-transformation-after"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-display font-bold text-foreground mb-3" data-testid="text-client-name">
                  {transformations[currentTransformation].name}
                </h3>
                <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto" data-testid="text-testimonial">
                  "{transformations[currentTransformation].testimonial}"
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTransformation}
                className="rounded-full"
                data-testid="button-prev-transformation"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex gap-2" data-testid="group-transformation-dots">
                {transformations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTransformation(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentTransformation ? "w-8 bg-primary" : "w-2 bg-border"
                    }`}
                    data-testid={`button-dot-${index}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTransformation}
                className="rounded-full"
                data-testid="button-next-transformation"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-card fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-foreground mb-4" data-testid="heading-blog">
              Fitness Tips & Blog
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-blog-description">
              Expert advice, workout tips, and nutrition guidance to support your fitness journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="group overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedBlog(post)}
                data-testid={`card-blog-${post.id}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    data-testid={`img-blog-${post.id}`}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="backdrop-blur-sm" data-testid={`badge-blog-category-${post.id}`}>
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-bold text-foreground mb-3 line-clamp-2" data-testid={`heading-blog-${post.id}`}>
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3" data-testid={`text-blog-excerpt-${post.id}`}>
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Blog Article Dialog */}
          <Dialog open={!!selectedBlog} onOpenChange={() => setSelectedBlog(null)}>
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-3xl font-display font-bold mb-4">
                  {selectedBlog?.title}
                </DialogTitle>
              </DialogHeader>
              {selectedBlog && (
                <div className="space-y-4">
                  <img
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <Badge variant="secondary">{selectedBlog.category}</Badge>
                  <div className="prose prose-lg max-w-none">
                    {selectedBlog.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-foreground leading-relaxed mb-4 whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Brand Collaborations Section */}
      <section className="py-20 bg-background fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-foreground mb-4" data-testid="heading-brands">
              Brand Collaborations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-brands-description">
              Proud to partner with leading fitness and wellness brands
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            {["Nike", "Adidas", "MyProtein", "GymShark", "Fitbit"].map((brand, index) => (
              <div
                key={brand}
                className="text-3xl font-display font-bold text-foreground"
                data-testid={`text-brand-${index}`}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary/5 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-foreground mb-6" data-testid="heading-contact">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground mb-12" data-testid="text-contact-description">
              Ready to start your transformation? Get in touch with me today!
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center justify-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <a
                  href="mailto:alex@fitnesscoach.com"
                  className="text-lg text-foreground hover:text-primary transition-colors font-medium"
                  data-testid="link-email"
                >
                  alex@fitnesscoach.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <a
                  href="tel:+1234567890"
                  className="text-lg text-foreground hover:text-primary transition-colors font-medium"
                  data-testid="link-phone"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
                data-testid="link-contact-instagram"
              >
                <Instagram className="h-8 w-8" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
                data-testid="link-contact-youtube"
              >
                <Youtube className="h-8 w-8" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="TikTok"
                data-testid="link-contact-tiktok"
              >
                <SiTiktok className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p className="font-medium" data-testid="text-footer-copyright">© 2024 Alex Morgan Fitness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
