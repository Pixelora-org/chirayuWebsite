'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Navbar } from '../../components/site/navbar'
import { Footer } from '../../components/site/footer'
import { MapPin, Users, Target, Heart, Shield, Lightbulb } from 'lucide-react'

export default function AboutPage() {
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
              About Chirayu
            </motion.h1>
            <motion.p 
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:.6, delay:.1}}
              className="text-xl text-zinc-300 max-w-3xl"
            >
              A community-focused health organization dedicated to improving public health through awareness, early detection, preventive care, and research-based interventions.
            </motion.p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{opacity:0, x:-30}}
                whileInView={{opacity:1, x:0}}
                viewport={{once:true}}
                transition={{duration:.6}}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900">Who We Are</h2>
                <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                  <p>
                    <strong>Chirayu Health Awareness & Research Centre</strong> is a community-focused health organization dedicated to improving public health through awareness, early detection, preventive care, and research-based interventions.
                  </p>
                  <p>
                    Based in <strong>Dharwad, Karnataka</strong>, Chirayu works with a mission to bring quality healthcare services closer to underserved communities and empower individuals with the knowledge to lead healthier lives.
                  </p>
                  <p>
                    We collaborate with schools, colleges, rural communities, slum areas, senior citizen groups, occupational workers, NGOs, and government organizations to ensure that preventive healthcare reaches those who need it most.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{opacity:0, x:30}}
                whileInView={{opacity:1, x:0}}
                viewport={{once:true}}
                transition={{duration:.6}}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1200&auto=format&fit=crop" 
                  alt="Chirayu Team" 
                  fill 
                  className="object-cover" 
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-zinc-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{duration:.6}}
                className="rounded-2xl overflow-hidden bg-white soft-shadow border border-zinc-200"
              >
                <div className="relative h-48">
                  <Image 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop" 
                    alt="Mission" 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                      <Target className="w-8 h-8 text-red-600" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-zinc-900">Our Mission</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    To promote health, prevent diseases, and empower communities through awareness, early screening, community outreach, and research-based programs, ensuring accessible and equitable healthcare for all.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{duration:.6, delay:.1}}
                className="rounded-2xl overflow-hidden bg-white soft-shadow border border-zinc-200"
              >
                <div className="relative h-48">
                  <Image 
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&auto=format&fit=crop" 
                    alt="Vision" 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Shield className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-zinc-900">Our Vision</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    To build a healthier society where every individual—regardless of socio-economic background—has the knowledge, access, and opportunity to maintain good health and prevent avoidable diseases.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Where We Work */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{opacity:0, x:-30}}
                whileInView={{opacity:1, x:0}}
                viewport={{once:true}}
                transition={{duration:.6}}
                className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" 
                  alt="Dharwad, Karnataka" 
                  fill 
                  className="object-cover" 
                />
              </motion.div>
              <motion.div
                initial={{opacity:0, x:30}}
                whileInView={{opacity:1, x:0}}
                viewport={{once:true}}
                transition={{duration:.6}}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">Where We Work</h2>
                </div>
                <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                  <p>
                    Chirayu is located in <strong>Southwest India in the state of Karnataka</strong>. Our programs are implemented in both rural and urban areas in and around the cities of <strong>Dharwad and Hubli</strong>.
                  </p>
                  <p>
                    We work with diverse communities including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Rural villages and tribal areas</li>
                    <li>Urban slum communities</li>
                    <li>Schools and colleges</li>
                    <li>Senior citizen groups</li>
                    <li>Occupational workers and drivers</li>
                    <li>Women and adolescent groups</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-gradient-to-br from-zinc-50 to-stone-50">
          <div className="container">
            <motion.div
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">Our Approach</h2>
              <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
                Chirayu follows a community-centric, preventive, and data-driven model
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lightbulb className="w-8 h-8" />,
                  title: "Early Detection",
                  description: "Early detection leads to early treatment, creating healthier communities",
                  image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=600&auto=format&fit=crop"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Community Engagement",
                  description: "Awareness + Screening + Counselling + Referral support",
                  image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=600&auto=format&fit=crop"
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Collaboration",
                  description: "Working with local leaders, NGOs, institutions & healthcare professionals",
                  image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=600&auto=format&fit=crop"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{opacity:0, y:30}}
                  whileInView={{opacity:1, y:0}}
                  viewport={{once:true}}
                  transition={{duration:.6, delay:i*0.1}}
                  className="rounded-2xl overflow-hidden bg-white soft-shadow border border-zinc-200"
                >
                  <div className="relative h-40">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                        <div className="text-red-600">{item.icon}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-3 text-zinc-900">{item.title}</h3>
                    <p className="text-zinc-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Chirayu */}
        <section className="py-20 bg-white">
          <div className="container">
            <motion.div
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">Why Choose Chirayu</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Community-focused approach",
                "Affordable & accessible services",
                "Experienced health team",
                "Trusted by local communities",
                "Research-based planning",
                "Transparent and ethical approach"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{opacity:0, y:20}}
                  whileInView={{opacity:1, y:0}}
                  viewport={{once:true}}
                  transition={{duration:.6, delay:i*0.05}}
                  className="rounded-xl border border-zinc-200 p-6 bg-zinc-50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="font-medium text-zinc-900">{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
