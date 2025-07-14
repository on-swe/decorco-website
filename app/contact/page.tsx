import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="bg-primary-dark text-text-light pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal delay={0.2}>
          <h1 className="text-5xl md:text-6xl font-serif text-center mb-12">Get in Touch</h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ScrollReveal delay={0.4} xOffset={-50}>
              <p className="text-lg text-gray-300 leading-relaxed">
                We'd love to hear from you! Whether you have a question about our services, want to discuss a potential
                project, or just want to say hello, feel free to reach out. Our team is ready to assist you.
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal delay={0.5} yOffset={30}>
                <div className="flex items-center space-x-4">
                  <Mail className="h-8 w-8 text-accent-gold" />
                  <div>
                    <h3 className="text-xl font-semibold">Email Us</h3>
                    <p className="text-gray-300">info@decorco.com</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.6} yOffset={30}>
                <div className="flex items-center space-x-4">
                  <Phone className="h-8 w-8 text-accent-gold" />
                  <div>
                    <h3 className="text-xl font-semibold">Call Us</h3>
                    <p className="text-gray-300">(123) 456-7890</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.7} yOffset={30}>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-8 w-8 text-accent-gold" />
                  <div>
                    <h3 className="text-xl font-semibold">Our Office</h3>
                    <p className="text-gray-300">123 Design Street, Suite 456, City, State 12345, USA</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.8} yOffset={30}>
                <div className="flex items-center space-x-4">
                  <Clock className="h-8 w-8 text-accent-gold" />
                  <div>
                    <h3 className="text-xl font-semibold">Working Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-300">Sunday: Closed</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Map Placeholder */}
            <ScrollReveal delay={0.9} yOffset={30}>
              <div className="w-full h-80 bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                {/* Replace with actual Google Maps embed or static map image */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2100000000007!2d-122.4194159!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f8f8f8f8f%3A0x8085808f8f8f8f8f!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                ></iframe>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.8} xOffset={50}>
            <form className="bg-gray-800 p-8 rounded-lg shadow-xl space-y-6">
              <h2 className="text-3xl font-serif mb-4">Send us a message</h2>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="bg-gray-700 border-gray-600 text-text-light focus:ring-accent-gold focus:border-accent-gold"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="bg-gray-700 border-gray-600 text-text-light focus:ring-accent-gold focus:border-accent-gold"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  rows={5}
                  className="bg-gray-700 border-gray-600 text-text-light focus:ring-accent-gold focus:border-accent-gold"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent-gold hover:bg-accent-gold/90 text-text-light px-8 py-6 text-lg rounded-none transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
