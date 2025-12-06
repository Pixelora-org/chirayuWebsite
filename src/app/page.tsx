'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'
import { Navbar } from '../components/site/navbar'
import { Footer } from '../components/site/footer'
import { Heart, Users, Stethoscope, GraduationCap, Activity, Shield } from 'lucide-react'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[85dvh] flex items-center">
          <Image 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2000&auto=format&fit=crop" 
            alt="Community Health" 
            fill 
            priority 
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/60 to-zinc-950/80" />
          <div className="container relative py-24 text-white">
            <motion.h1 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}} 
              transition={{duration:.6}} 
              className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl text-balance leading-tight"
            >
              Building a Healthier Society Through Awareness & Prevention
            </motion.h1>
            <motion.p 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              transition={{duration:.6, delay:.1}} 
              className="mt-6 max-w-3xl text-lg md:text-xl text-zinc-200 leading-relaxed"
            >
              Chirayu Health Awareness & Research Centre brings quality healthcare services closer to underserved communities in Dharwad, Karnataka, empowering individuals with knowledge to lead healthier lives.
            </motion.p>
            <motion.div 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              transition={{duration:.6, delay:.2}} 
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-0">Get Involved</Button>
              <Button variant="outline" size="lg" className="backdrop-blur text-white border-white/30 hover:bg-white/10">Learn More</Button>
            </motion.div>
          </div>
        </section>

        {/* Urgent Cause / Who We Are */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{opacity:0, x:-30}}
                whileInView={{opacity:1, x:0}}
                viewport={{once:true}}
                transition={{duration:.6}}
              >
                <div className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-4">Who We Are</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900">
                  Chirayu Health Awareness & Research Centre
                </h2>
                <p className="text-lg text-zinc-600 mb-4 leading-relaxed">
                  A community-focused health organization dedicated to improving public health through awareness, early detection, preventive care, and research-based interventions.
                </p>
                <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                  Based in <strong>Dharwad, Karnataka</strong>, Chirayu works with a mission to bring quality healthcare services closer to underserved communities and empower individuals with the knowledge to lead healthier lives.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  We collaborate with schools, colleges, rural communities, slum areas, senior citizen groups, occupational workers, NGOs, and government organizations to ensure that preventive healthcare reaches those who need it most.
                </p>
                <Link href="/about">
                  <Button className="mt-6">View More</Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{opacity:0, x:30}}
                whileInView={{opacity:1, x:0}}
                viewport={{once:true}}
                transition={{duration:.6}}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1200&auto=format&fit=crop" 
                  alt="Community Health Program" 
                  fill 
                  className="object-cover" 
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-br from-zinc-50 to-stone-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{duration:.6}}
                className="rounded-2xl bg-white p-8 soft-shadow border border-zinc-200"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-zinc-900">Our Mission</h3>
                <p className="text-zinc-600 leading-relaxed">
                  To promote health, prevent diseases, and empower communities through awareness, early screening, community outreach, and research-based programs, ensuring accessible and equitable healthcare for all.
                </p>
              </motion.div>
              <motion.div
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{duration:.6, delay:.1}}
                className="rounded-2xl bg-white p-8 soft-shadow border border-zinc-200"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-zinc-900">Our Vision</h3>
                <p className="text-zinc-600 leading-relaxed">
                  To build a healthier society where every individual—regardless of socio-economic background—has the knowledge, access, and opportunity to maintain good health and prevent avoidable diseases.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Do - Programs Overview */}
        <section className="py-20 bg-white">
          <div className="container">
            <motion.div
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">What We Do</h2>
              <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
                Our comprehensive health programs reach communities across Dharwad and surrounding areas
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Stethoscope className="w-8 h-8" />,
                  title: "Health Awareness Programs",
                  description: "Regular awareness sessions on diabetes, hypertension, anaemia, women's health, mental health, and lifestyle diseases.",
                  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
                },
                {
                  icon: <Activity className="w-8 h-8" />,
                  title: "Community Health Screening",
                  description: "Free and affordable screening camps in rural villages, slums, schools, and communities with comprehensive health checks.",
                  image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop"
                },
                {
                  icon: <GraduationCap className="w-8 h-8" />,
                  title: "School Health Programs",
                  description: "Special initiatives for student health including vision screening, growth assessment, and nutrition education.",
                  image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Women & Adolescent Health",
                  description: "Programs focusing on anaemia screening, menstrual health, thyroid screening, and nutrition counselling.",
                  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Senior Citizen Health Support",
                  description: "ECG & cardiac risk screening, blood pressure monitoring, and comprehensive health check-ups for elderly.",
                  image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=800&auto=format&fit=crop"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Research & Data-Based Intervention",
                  description: "Collecting community health data to identify disease patterns and support targeted health program design.",
                  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
                }
              ].map((program, i) => (
                <motion.article
                  key={i}
                  initial={{opacity:0, y:30}}
                  whileInView={{opacity:1, y:0}}
                  viewport={{once:true}}
                  transition={{duration:.6, delay:i*0.1}}
                  whileHover={{y:-8}}
                  className="rounded-2xl overflow-hidden border border-zinc-200 bg-white soft-shadow group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={program.image} 
                      alt={program.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2">
                        {program.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-3 text-zinc-900">{program.title}</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">{program.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/programs">
                <Button size="lg">View All Programs</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container">
            <motion.div
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">Our Impact</h2>
              <p className="text-lg text-zinc-600">Reaching communities across Dharwad, Karnataka</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "1000+", label: "Health Camps Organized" },
                { number: "50+", label: "Rural Communities Reached" },
                { number: "25+", label: "Schools & Colleges" },
                { number: "5000+", label: "Individuals Screened" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{opacity:0, scale:0.9}}
                  whileInView={{opacity:1, scale:1}}
                  viewport={{once:true}}
                  transition={{duration:.6, delay:i*0.1}}
                  className="rounded-2xl bg-white p-8 text-center soft-shadow border border-zinc-200"
                >
                  <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-zinc-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="container">
            <motion.div
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
              className="mx-auto max-w-4xl rounded-3xl border border-zinc-200 p-12 bg-gradient-to-br from-zinc-50 to-stone-50 soft-shadow text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">Join Us in Building a Healthier Community</h3>
              <p className="text-lg text-zinc-600 mb-8 max-w-2xl mx-auto">
                Partner with Chirayu to bring preventive healthcare to underserved communities. Your support helps us reach more people.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-0">Donate Now</Button>
                <Link href="/get-involved">
                  <Button variant="outline" size="lg">Get Involved</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
