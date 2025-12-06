'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Navbar } from '../../components/site/navbar'
import { Footer } from '../../components/site/footer'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
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
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:.6, delay:.1}}
              className="text-xl text-zinc-300 max-w-3xl"
            >
              Reach out for partnerships, health camps, collaborations, or general inquiries
            </motion.p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid gap-10 md:grid-cols-2">
              {/* Contact Form */}
              <motion.div
                initial={{opacity:0, x:-30}}
                whileInView={{opacity:1, x:0}}
                viewport={{once:true}}
                transition={{duration:.6}}
                className="rounded-2xl border border-zinc-200 p-8 bg-white soft-shadow"
              >
                <h2 className="text-2xl font-bold mb-6 text-zinc-900">Send us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <input 
                      placeholder="Full name" 
                      className="h-12 w-full rounded-lg border border-zinc-300 px-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email address" 
                      className="h-12 w-full rounded-lg border border-zinc-300 px-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone number" 
                      className="h-12 w-full rounded-lg border border-zinc-300 px-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your message" 
                      rows={6} 
                      className="w-full rounded-lg border border-zinc-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none" 
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full h-12 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{opacity:0, x:30}}
                whileInView={{opacity:1, x:0}}
                viewport={{once:true}}
                transition={{duration:.6}}
                className="space-y-6"
              >
                <div className="rounded-2xl border border-zinc-200 p-8 bg-white soft-shadow">
                  <h2 className="text-2xl font-bold mb-6 text-zinc-900">Get in Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-zinc-900 mb-2">Address</h3>
                        <p className="text-zinc-600 leading-relaxed">
                          Chirayu Health Awareness & Research Centre<br />
                          Dharwad, Karnataka<br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-zinc-900 mb-2">Phone</h3>
                        <p className="text-zinc-600">
                          <a href="tel:+919999999999" className="hover:text-red-600 transition-colors">
                            +91 99999 99999
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-zinc-900 mb-2">Email</h3>
                        <p className="text-zinc-600">
                          <a href="mailto:info@chirayu.org" className="hover:text-red-600 transition-colors">
                            info@chirayu.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="rounded-2xl border border-zinc-200 overflow-hidden soft-shadow">
                  <div className="relative h-64 bg-zinc-100">
                    <Image 
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" 
                      alt="Dharwad, Karnataka" 
                      fill 
                      className="object-cover" 
                    />
                    <div className="absolute inset-0 bg-zinc-900/20 flex items-center justify-center">
                      <div className="text-center text-white">
                        <MapPin className="w-12 h-12 mx-auto mb-2" />
                        <p className="font-semibold">Dharwad, Karnataka</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20 bg-zinc-50">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{duration:.6}}
                className="text-center"
              >
                <h3 className="font-bold text-lg mb-2 text-zinc-900">Partnerships</h3>
                <p className="text-zinc-600">
                  Interested in collaborating on health programs? Contact us for partnership opportunities.
                </p>
              </motion.div>
              <motion.div
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{duration:.6, delay:.1}}
                className="text-center"
              >
                <h3 className="font-bold text-lg mb-2 text-zinc-900">Health Camps</h3>
                <p className="text-zinc-600">
                  Want to organize a health screening camp in your community? Get in touch with us.
                </p>
              </motion.div>
              <motion.div
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{duration:.6, delay:.2}}
                className="text-center"
              >
                <h3 className="font-bold text-lg mb-2 text-zinc-900">Volunteer</h3>
                <p className="text-zinc-600">
                  Join our team of volunteers and make a difference in community health.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
