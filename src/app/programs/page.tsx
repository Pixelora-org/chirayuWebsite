'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Navbar } from '../../components/site/navbar'
import { Footer } from '../../components/site/footer'
import { Stethoscope, Activity, GraduationCap, Users, Heart, Shield } from 'lucide-react'

const programs = [
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "Health Awareness Programs",
    description: "We conduct regular awareness sessions on various health topics to educate communities and prevent diseases.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    topics: [
      "Diabetes & Hypertension",
      "Anaemia & Nutrition",
      "Women's Health",
      "Mental Health",
      "Lifestyle Diseases",
      "Hygiene, Sanitation & Infectious Diseases",
      "School Health Education"
    ],
    color: "red"
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Community Health Screening",
    description: "Organizing free and affordable screening camps in rural villages, slum areas, schools, and communities.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&auto=format&fit=crop",
    locations: [
      "Rural villages",
      "Slum areas",
      "Tribal/remote locations",
      "Schools & Colleges",
      "Old-age groups",
      "Driver & occupational worker groups"
    ],
    screenings: [
      "BP, Blood Sugar, ECG",
      "CBC, Thyroid, Cholesterol",
      "Anaemia, BMI",
      "Vision check",
      "Basic physical assessment"
    ],
    color: "blue"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Research & Data-Based Intervention",
    description: "Collecting community health data to identify disease patterns and support targeted health program design.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    activities: [
      "Identify disease patterns",
      "Improve health planning",
      "Support research and publications",
      "Help organizations design targeted health programs"
    ],
    color: "purple"
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "School Health Programs",
    description: "Special initiatives for student health focusing on early detection and preventive care.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    services: [
      "Vision screening",
      "Growth assessment",
      "Nutrition & hygiene education",
      "Basic health check-ups",
      "Mental health and stress awareness sessions"
    ],
    color: "green"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Women & Adolescent Health",
    description: "Comprehensive programs focusing on women's health, adolescent care, and preventive screening.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
    services: [
      "Anaemia screening",
      "Menstrual health and hygiene",
      "Thyroid & vitamin deficiency screening",
      "Nutrition counselling",
      "Women's health awareness sessions"
    ],
    color: "pink"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Senior Citizen Health Support",
    description: "Specialized health services for elderly community members focusing on chronic disease management.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1200&auto=format&fit=crop",
    services: [
      "ECG & cardiac risk screening",
      "Blood pressure & diabetes monitoring",
      "Mobility, bone health & general check-ups",
      "Chronic disease management",
      "Health counselling for seniors"
    ],
    color: "orange"
  }
]

export default function ProgramsPage() {
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
              Our Programs & Projects
            </motion.h1>
            <motion.p 
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:.6, delay:.1}}
              className="text-xl text-zinc-300 max-w-3xl"
            >
              Comprehensive health programs reaching communities across Dharwad, Karnataka
            </motion.p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="space-y-24">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{opacity:0, y:50}}
                  whileInView={{opacity:1, y:0}}
                  viewport={{once:true}}
                  transition={{duration:.6}}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image 
                        src={program.image} 
                        alt={program.title} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className={`w-16 h-16 bg-${program.color}-100 rounded-full flex items-center justify-center mb-6`}>
                      <div className={`text-${program.color}-600`}>{program.icon}</div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">{program.title}</h2>
                    <p className="text-lg text-zinc-600 mb-6 leading-relaxed">{program.description}</p>
                    
                    {program.topics && (
                      <div>
                        <h3 className="font-semibold text-zinc-900 mb-3">Awareness Topics:</h3>
                        <ul className="space-y-2">
                          {program.topics.map((topic, i) => (
                            <li key={i} className="flex items-start gap-2 text-zinc-600">
                              <span className="text-red-600 mt-1">•</span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {program.locations && (
                      <div className="mb-6">
                        <h3 className="font-semibold text-zinc-900 mb-3">Locations:</h3>
                        <ul className="space-y-2">
                          {program.locations.map((location, i) => (
                            <li key={i} className="flex items-start gap-2 text-zinc-600">
                              <span className="text-blue-600 mt-1">•</span>
                              <span>{location}</span>
                            </li>
                          ))}
                        </ul>
                        <h3 className="font-semibold text-zinc-900 mb-3 mt-4">Screenings Include:</h3>
                        <ul className="space-y-2">
                          {program.screenings?.map((screening, i) => (
                            <li key={i} className="flex items-start gap-2 text-zinc-600">
                              <span className="text-blue-600 mt-1">•</span>
                              <span>{screening}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {program.activities && (
                      <div>
                        <h3 className="font-semibold text-zinc-900 mb-3">Activities:</h3>
                        <ul className="space-y-2">
                          {program.activities.map((activity, i) => (
                            <li key={i} className="flex items-start gap-2 text-zinc-600">
                              <span className="text-purple-600 mt-1">•</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {program.services && (
                      <div>
                        <h3 className="font-semibold text-zinc-900 mb-3">Services:</h3>
                        <ul className="space-y-2">
                          {program.services.map((service, i) => (
                            <li key={i} className="flex items-start gap-2 text-zinc-600">
                              <span className={`text-${program.color}-600 mt-1`}>•</span>
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-zinc-50 to-stone-50">
          <div className="container text-center">
            <motion.div
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">Partner With Us</h2>
              <p className="text-lg text-zinc-600 mb-8">
                Interested in bringing our health programs to your community? Contact us to learn more about partnerships and collaborations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact">
                  <button className="px-8 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors">
                    Contact Us
                  </button>
                </a>
                <a href="/get-involved">
                  <button className="px-8 py-3 border-2 border-zinc-300 text-zinc-900 rounded-full font-semibold hover:bg-white transition-colors">
                    Get Involved
                  </button>
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
