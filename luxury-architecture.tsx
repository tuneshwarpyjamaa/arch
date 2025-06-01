import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Award, Building2, Crown, Mail, MapPin, Phone, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-light tracking-wide text-stone-900">Harsoor Architects</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#portfolio"
                className="text-sm font-medium text-stone-700 hover:text-amber-600 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="#services"
                className="text-sm font-medium text-stone-700 hover:text-amber-600 transition-colors"
              >
                Services
              </Link>
              <Link href="#about" className="text-sm font-medium text-stone-700 hover:text-amber-600 transition-colors">
                About
              </Link>
              <Link href="#blogs" className="text-sm font-medium text-stone-700 hover:text-amber-600 transition-colors">
                Blogs
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-stone-700 hover:text-amber-600 transition-colors"
              >
                Contact
              </Link>
            </nav>
            <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-200" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                  <Award className="h-4 w-4" />
                  <span>Award-Winning Architecture</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-stone-900 leading-tight">
                  Extraordinary
                  <span className="block text-amber-600 font-normal">Residences</span>
                </h1>
                <p className="text-xl text-stone-600 leading-relaxed max-w-lg">
                  Crafting bespoke architectural masterpieces for discerning clients who demand nothing less than
                  perfection.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg">
                  View Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-stone-300 text-stone-700 px-8 py-4 text-lg">
                  Private Consultation
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=480"
                  alt="Luxury architectural design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-amber-100 border-2 border-white flex items-center justify-center"
                      >
                        <Star className="h-4 w-4 text-amber-600 fill-current" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-900">50+ Elite Projects</p>
                    <p className="text-xs text-stone-600">Worldwide Recognition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-stone-900">Signature Projects</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Each project represents a unique vision brought to life through meticulous attention to detail and
              uncompromising quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Hamptons Estate",
                location: "New York",
                value: "$45M",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Beverly Hills Mansion",
                location: "California",
                value: "$78M",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Swiss Alpine Retreat",
                location: "Switzerland",
                value: "$32M",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Manhattan Penthouse",
                location: "New York",
                value: "$95M",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Malibu Oceanfront",
                location: "California",
                value: "$67M",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "London Townhouse",
                location: "United Kingdom",
                value: "$54M",
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{project.location}</p>
                    <p className="text-lg font-light">{project.value}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-stone-900 mb-2">{project.title}</h3>
                  <p className="text-stone-600 text-sm">{project.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-light text-stone-900">Bespoke Services</h2>
                <p className="text-xl text-stone-600 leading-relaxed">
                  Our comprehensive approach ensures every aspect of your vision is realized with unparalleled precision
                  and artistry.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Architectural Design",
                    description:
                      "Custom residential and commercial architecture tailored to your unique requirements and lifestyle.",
                  },
                  {
                    title: "Interior Architecture",
                    description:
                      "Seamless integration of interior spaces that reflect sophistication and functionality.",
                  },
                  {
                    title: "Project Management",
                    description: "White-glove project oversight ensuring timelines, quality, and budget adherence.",
                  },
                  {
                    title: "Consultation Services",
                    description:
                      "Strategic guidance for property acquisition, renovation, and development opportunities.",
                  },
                ].map((service, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-600 mt-3" />
                    <div>
                      <h3 className="text-lg font-medium text-stone-900 mb-1">{service.title}</h3>
                      <p className="text-stone-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=480"
                  alt="Architectural services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-light text-stone-900">Uncompromising Excellence</h2>
              <p className="text-xl text-stone-600 leading-relaxed">
                For over two decades, Harsoor Architects has been the architect of choice for the world's most discerning clients,
                creating extraordinary spaces that transcend conventional luxury.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-12">
              {[
                { number: "50+", label: "Elite Projects", icon: Building2 },
                { number: "20+", label: "Years Experience", icon: Award },
                { number: "$2B+", label: "Project Value", icon: Crown },
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100">
                    <stat.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-light text-stone-900">{stat.number}</p>
                    <p className="text-stone-600">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-light">Begin Your Journey</h2>
                <p className="text-xl text-stone-300 leading-relaxed">
                  Schedule a private consultation to discuss your vision. Our team is ready to transform your dreams
                  into architectural reality.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Private Line", value: "+1 (555) 123-4567" },
                  { icon: Mail, label: "Exclusive Inquiries", value: "contact@meridianarch.com" },
                  { icon: MapPin, label: "Atelier", value: "Madison Avenue, New York" },
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center">
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-stone-400 text-sm">{contact.label}</p>
                      <p className="text-white font-medium">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-300 mb-2">First Name</label>
                      <Input
                        className="bg-white/10 border-white/20 text-white placeholder:text-stone-400"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-300 mb-2">Last Name</label>
                      <Input
                        className="bg-white/10 border-white/20 text-white placeholder:text-stone-400"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-300 mb-2">Email</label>
                    <Input
                      type="email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-stone-400"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-300 mb-2">Project Details</label>
                    <Textarea
                      className="bg-white/10 border-white/20 text-white placeholder:text-stone-400 min-h-[120px]"
                      placeholder="Tell us about your vision..."
                    />
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3">
                    Request Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-white py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Crown className="h-6 w-6 text-amber-600" />
              <span className="text-xl font-light tracking-wide">Harsoor Architects</span>
            </div>
            <div className="flex space-x-8 text-sm text-stone-400">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Careers
              </Link>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Harsoor Architects. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
