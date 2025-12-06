'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Navbar } from '../../components/site/navbar'
import { Footer } from '../../components/site/footer'
import { Button } from '../../components/ui/button'
import { Heart, Users, Handshake, DollarSign, Briefcase, Phone } from 'lucide-react'

export default function GetInvolvedPage() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-zinc-900 to-zinc-800 text-white">
          <div className="container">
            <motion.h1 
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:.6}}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Get Involved
            </motion.h1>
            <motion.p 
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:.6, delay:.1}}
              className="text-xl text-zinc-300 max-w-3xl"
            >
              Join us in building a healthier society. Your support helps us reach more communities with preventive healthcare.
            </motion.p>
          </div>
        </section>

        {/* Ways to Get Involved */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <DollarSign className="w-8 h-8" />,
                  title: "Donate",
                  description: "Your financial contribution helps us organize more health camps, purchase screening equipment, and reach underserved communities.",
                  benefits: [
                    "Support health screening camps",
                    "Fund awareness programs",
                    "Enable research initiatives",
                    "Tax-deductible donations"
                  ],
                  color: "red",
                  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Volunteer",
                  description: "Contribute your time and skills to help organize health camps, conduct awareness sessions, or assist with community outreach.",
                  benefits: [
                    "Medical professionals welcome",
                    "Community outreach support",
                    "Event organization help",
                    "Data collection assistance"
                  ],
                  color: "blue",
                  image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop"
                },
                {
                  icon: <Handshake className="w-8 h-8" />,
                  title: "Partner",
                  description: "Collaborate with Chirayu to bring health programs to your organization, school, or community.",
                  benefits: [
                    "Organize health camps",
                    "School health programs",
                    "Corporate partnerships",
                    "NGO collaborations"
                  ],
                  color: "green",
                  image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{opacity:0, y:30}}
                  whileInView={{opacity:1, y:0}}
                  viewport={{once:true}}
                  transition={{duration:.6, delay:i*0.1}}
                  className="rounded-2xl overflow-hidden border border-zinc-200 bg-white soft-shadow group hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className={`w-12 h-12 bg-${item.color}-600 rounded-full flex items-center justify-center text-white`}>
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-zinc-900">{item.title}</h3>
                    <p className="text-zinc-600 mb-6 leading-relaxed">{item.description}</p>
                    <div className="space-y-2 mb-6">
                      {item.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className={`text-${item.color}-600 mt-1`}>✓</span>
                          <span className="text-sm text-zinc-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full" variant="default">
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Donate */}
        <section className="py-20 bg-zinc-50">
          <div className="container">
            <motion.div
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">How to Donate</h2>
                <p className="text-lg text-zinc-600">
                  Your contribution makes a real difference in community health
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl bg-white p-8 border border-zinc-200 soft-shadow">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                    <Phone className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-zinc-900">Bank Transfer</h3>
                  <p className="text-zinc-600 mb-4">
                    Transfer directly to our bank account. Contact us for account details.
                  </p>
                  <Button>Get Bank Details</Button>
                </div>
                <div className="rounded-2xl bg-white p-8 border border-zinc-200 soft-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-zinc-900">Online Payment</h3>
                  <p className="text-zinc-600 mb-4">
                    Make a secure online donation through our payment gateway.
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white border-0">Donate Now</Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Volunteer Form */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{opacity:0, x:-30}}
                whileInView={{opacity:1, x:0}}
                viewport={{once:true}}
                transition={{duration:.6}}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900">Become a Volunteer</h2>
                <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                  Join our team of dedicated volunteers who are making a difference in community health. Whether you're a medical professional, student, or community member, there's a place for you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-zinc-900">Medical Professionals</h4>
                      <p className="text-zinc-600">Doctors, nurses, and healthcare workers to conduct screenings</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-zinc-900">Community Outreach</h4>
                      <p className="text-zinc-600">Help organize camps and spread awareness</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-zinc-900">Data & Research</h4>
                      <p className="text-zinc-600">Assist with data collection and analysis</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{opacity:0, x:30}}
                whileInView={{opacity:1, x:0}}
                viewport={{once:true}}
                transition={{duration:.6}}
                className="rounded-2xl border border-zinc-200 p-8 bg-white soft-shadow"
              >
                <h3 className="text-2xl font-bold mb-6 text-zinc-900">Volunteer Registration</h3>
                <form className="space-y-4">
                  <input 
                    placeholder="Full name" 
                    className="h-12 w-full rounded-lg border border-zinc-300 px-4 focus:outline-none focus:ring-2 focus:ring-red-500" 
                  />
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="h-12 w-full rounded-lg border border-zinc-300 px-4 focus:outline-none focus:ring-2 focus:ring-red-500" 
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone number" 
                    className="h-12 w-full rounded-lg border border-zinc-300 px-4 focus:outline-none focus:ring-2 focus:ring-red-500" 
                  />
                  <select className="h-12 w-full rounded-lg border border-zinc-300 px-4 focus:outline-none focus:ring-2 focus:ring-red-500">
                    <option>Select area of interest</option>
                    <option>Medical Professional</option>
                    <option>Community Outreach</option>
                    <option>Data & Research</option>
                    <option>Event Organization</option>
                  </select>
                  <textarea 
                    placeholder="Tell us about yourself and why you want to volunteer" 
                    rows={4} 
                    className="w-full rounded-lg border border-zinc-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none" 
                  />
                  <button 
                    type="submit"
                    className="w-full h-12 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
                  >
                    Submit Application
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container text-center">
            <motion.div
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">Ready to Make a Difference?</h2>
              <p className="text-lg text-zinc-600 mb-8">
                Contact us today to learn more about how you can get involved with Chirayu Health Awareness & Research Centre.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-0">
                    Contact Us
                  </Button>
                </a>
                <a href="/programs">
                  <Button variant="outline" size="lg">
                    View Programs
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
