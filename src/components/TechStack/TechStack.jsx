import { useMemo } from 'react'
import { motion } from 'framer-motion'
import SEOHead from '../SEO/SEOHead'
import { SEO_CONFIGS } from '../SEO/seoConfigs'

import { 
  SiReact, 
  SiTailwindcss, 
  SiMongodb, 
  SiGit,
  SiPostman,
  SiFramer,
  SiCloudinary,
  SiVercel,
  SiGithub,
  SiJavascript,
  SiNodedotjs,
  SiBootstrap,
  SiEjs,
  SiJsonwebtokens
} from 'react-icons/si'

import { 
  FaDatabase, 
  FaTools, 
  FaCloud, 
  FaRocket, 
  FaCode, 
  FaBrain 
} from 'react-icons/fa'

function TechStack() {

  // ✅ YOUR TECH STACK
  const techCategories = useMemo(() => [
  {
    id: 1,
    title: "Backend Development",
    icon: FaCode,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs, level: "Advanced", color: "#339933" },
      { name: "Express.js", icon: FaCode, level: "Advanced", color: "#ffffff" },
      { name: "Java", icon: FaCode, level: "Intermediate", color: "#f89820" },
      { name: "C Programming", icon: FaCode, level: "Intermediate", color: "#A8B9CC" },
      { name: "JWT Authentication", icon: SiJsonwebtokens, level: "Advanced", color: "#000000" },
      { name: "Nodemailer (OTP)", icon: FaCode, level: "Proficient", color: "#00C853" }
    ]
  },
  {
    id: 2,
    title: "Frontend Development",
    icon: FaRocket,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    technologies: [
      { name: "React.js", icon: SiReact, level: "Advanced", color: "#61DAFB" },
      { name: "Next.js", icon: FaCode, level: "Advanced", color: "#000000" },
      { name: "JavaScript", icon: SiJavascript, level: "Advanced", color: "#F7DF1E" },
      { name: "HTML5", icon: FaCode, level: "Advanced", color: "#E34F26" },
      { name: "CSS3", icon: FaCode, level: "Advanced", color: "#1572B6" },
      { name: "TailwindCSS", icon: SiTailwindcss, level: "Advanced", color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, level: "Intermediate", color: "#7952B3" },
      { name: "Framer Motion", icon: SiFramer, level: "Advanced", color: "#0055FF" }
    ]
  },
  {
    id: 3,
    title: "Database Systems",
    icon: FaDatabase,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    technologies: [
      { name: "MongoDB", icon: SiMongodb, level: "Advanced", color: "#47A248" },
      { name: "MySQL", icon: FaDatabase, level: "Advanced", color: "#4479A1" },
      { name: "PostgreSQL", icon: FaDatabase, level: "Intermediate", color: "#336791" }
    ]
  },
  {
    id: 4,
    title: "Development Tools",
    icon: FaTools,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    technologies: [
      { name: "Git", icon: SiGit, level: "Advanced", color: "#F05032" },
      { name: "GitHub", icon: SiGithub, level: "Advanced", color: "#181717" },
      { name: "Postman", icon: SiPostman, level: "Proficient", color: "#FF6C37" },
      { name: "pnpm", icon: FaCode, level: "Intermediate", color: "#f69220" }
    ]
  },
  {
    id: 5,
    title: "Cloud & Deployment",
    icon: FaCloud,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    technologies: [
      { name: "AWS", icon: FaCloud, level: "Beginner", color: "#FF9900" },
      { name: "Vercel", icon: SiVercel, level: "Advanced", color: "#000000" },
      { name: "GoDaddy", icon: FaCloud, level: "Beginner", color: "#00A4A6" },
      { name: "Cloudinary", icon: SiCloudinary, level: "Proficient", color: "#3448C5" }
    ]
  },
  {
    id: 6,
    title: "AI & Modern Tools",
    icon: FaBrain,
    color: "text-amber-300",
    bgColor: "bg-amber-500/10", 
    borderColor: "border-amber-500/20",
    technologies: [
      { name: "ChatGPT", icon: FaBrain, level: "Advanced", color: "#10A37F" },
      { name: "Grok", icon: FaBrain, level: "Advanced", color: "#10A37F" },
      { name: "Cursor AI", icon: FaBrain, level: "Advanced", color: "#10A37F" },
      { name: "Lovable AI", icon: FaBrain, level: "Intermediate", color: "#ffffff" },
      { name: "Cloud AI", icon: FaBrain, level: "Advanced", color: "#10A37F" },
      { name: "Antigravity", icon: FaBrain, level: "Advanced", color: "#10A37F" }
    ]
  },
  {
    id: 7,
    title: "Design",
    icon: FaCode,
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    technologies: [
      { name: "Figma", icon: FaCode, level: "Intermediate", color: "#F24E1E" }
    ]
  }
], [])

  // ✅ YOUR PROJECTS
  const projectHighlights = useMemo(() => [
    {
      id: 1,
      name: "MobiVault – E-Commerce Platform",
      description: "Full-stack e-commerce platform with user authentication, admin dashboard, and order management system",
      techUsed: ["MongoDB", "Express", "Node.js", "EJS", "JWT"],
      highlight: "OTP authentication, admin dashboard, coupon system & order management"
    },
    {
      id: 2,
      name: "Developer Portfolio",
      description: "Modern responsive portfolio showcasing projects, skills, and development journey",
      techUsed: ["React", "TailwindCSS", "Framer Motion", "Vite"],
      highlight: "Clean UI with animations and responsive design"
    },
    {
      id: 3,
      name: "Santa Good Deeds",
      description: "Community-based web app built during Brocamp Hackathon",
      techUsed: ["Node.js", "Express", "MongoDB"],
      highlight: "Community-driven web app developed during Brocamp Hackathon to promote positive actions"
    }
  ], [])

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'text-amber-400'
      case 'Advanced': return 'text-amber-300'
      case 'Intermediate': return 'text-yellow-400'
      case 'Proficient': return 'text-amber-500'
      default: return 'text-neutral-400'
    }
  }

  return (
    <>
      <SEOHead {...SEO_CONFIGS.techStack} />
      <section className="section-padding pt-28">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-neutral-700/50 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaCode className="w-6 h-6 text-amber-400" />
              <span className="text-lg font-semibold text-neutral-300">
                Technology Stack
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="gradient-text">Technologies</span> & Tools
            </motion.h1>

            <motion.p 
              className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A comprehensive overview of the technologies, frameworks, and tools I use to build 
              modern, scalable applications. From backend development to cloud deployment.
            </motion.p>
          </div>

          {/* Tech Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {techCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={category.id}
                  className={`glass-effect rounded-2xl p-6 border ${category.borderColor} ${category.bgColor}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-100">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.technologies.map((tech, techIndex) => {
                      const TechIcon = tech.icon
                      return (
                        <motion.div
                          key={techIndex}
                          className="flex items-center justify-between p-3 bg-neutral-800/30 rounded-lg border border-neutral-700/30"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + techIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            x: 5,
                            backgroundColor: "rgba(38, 38, 38, 0.5)"
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <TechIcon 
                              className="w-5 h-5" 
                              style={{ color: tech.color }}
                            />
                            <span className="font-medium text-neutral-200">
                              {tech.name}
                            </span>
                          </div>
                          <span className={`text-sm font-semibold ${getLevelColor(tech.level)}`}>
                            {tech.level}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Project Highlights */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl font-bold gradient-text mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Tech Stack in Action
              </motion.h2>
              <motion.p 
                className="text-neutral-400 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Real projects showcasing how I apply these technologies to solve problems
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectHighlights.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="glass-effect rounded-2xl p-6 border border-neutral-700/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <h3 className="text-xl font-bold text-neutral-100 mb-3">
                    {project.name}
                  </h3>
                  <p className="text-neutral-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-amber-400 font-medium text-sm mb-2">
                      Key Technologies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techUsed.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-neutral-700/50 text-neutral-300 rounded-full text-xs font-medium border border-neutral-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-700/50">
                    <p className="text-amber-400 font-medium text-sm">
                      💡 {project.highlight}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>


        </div>
      </section>
    </>
  )
}

export default TechStack
