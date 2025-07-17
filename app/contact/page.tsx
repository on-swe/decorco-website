"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { GlowButton } from "@/components/ui/glow-button";
import MapComponent from "@/components/map/MapComponent";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    inquiryType: "",
    message: "",
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", newsletterEmail);
    // Handle newsletter subscription
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Header */}
      <section className="relative bg-[#1a1a1a] min-h-[60vh] items-center justify-center flex overflow-x-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-[6rem] leading-[7rem] md:text-[10rem] md:leading-[10rem] font-wegato font-thin text-white">
              Contact Us
            </h1>
            <p className="text-xl text-[#cbd5e1] max-w-2xl mx-auto">
              Ready to start your real estate journey? We're here to help every
              step of the way.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 p-8">
              <h2 className="leading-[4rem] text-[4rem] font-thin font-wegato mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Inquiry Type
                    </label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, inquiryType: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="buying">
                          Buying a Property
                        </SelectItem>
                        <SelectItem value="selling">
                          Selling a Property
                        </SelectItem>
                        <SelectItem value="renting">Renting</SelectItem>
                        <SelectItem value="investment">
                          Investment Consulting
                        </SelectItem>
                        <SelectItem value="valuation">
                          Property Valuation
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your real estate needs..."
                    required
                    className="w-full"
                  />
                </div>

                <GlowButton
                  type="submit"
                  className="w-full bg-[#1a1a1a] text-white hover:bg-gray-900 py-3 rounded-none"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </GlowButton>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-gray-50 p-6">
              <h3 className="text-[3rem] font-wegato font-thin mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Office Address</p>
                    <p className="text-gray-600">
                      123 Real Estate Avenue
                      <br />
                      Suite 456
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-gray-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-gray-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@eliteestates.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-gray-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <div className="text-gray-600 text-sm">
                      <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="relative bg-[#1a1a1a] text-white p-6 border border-white rounded-none ">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />

              <h3 className="text-[3rem] font-wegato font-thin">Stay Updated</h3>
              <p className="text-gray-300 mb-8">
                Subscribe to our newsletter for market updates and exclusive
                listings.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="bg-white text-black rounded-none"
                />
                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-100 rounded-none"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <section className="mt-16">
          <h2 className="text-[4rem] font-wegato font-thin mb-6 text-white">Visit Our Office</h2>
          <div className="bg-gray-100 h-96">
            <MapComponent />
          </div>
        </section>

      </div>
    </div>
  );
}
