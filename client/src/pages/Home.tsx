import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Cloud, Code2, GitBranch, Lock, Zap, ExternalLink, Github, Linkedin, Mail, CheckCircle2, Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Cloud & DevOps Engineer Portfolio
 * Design: Terminal Hacker Aesthetic (inspired by thixpin.me)
 * - Almost black background with neon green accents
 * - Dashed borders and decorative elements
 * - Minimalist, cyberpunk vibe
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const stats = [
    { label: "Years of Experience", value: "8+" },
    { label: "Projects Delivered", value: "50+" },
    { label: "Team Members Mentored", value: "20+" },
    { label: "Cloud Infrastructure Managed", value: "100+ Instances" },
  ];

  const services = [
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Design and implement scalable cloud solutions on AWS, Azure, and GCP with best practices for security and performance.",
    },
    {
      icon: Code2,
      title: "Infrastructure as Code",
      description: "Terraform, CloudFormation, and Pulumi expertise to manage infrastructure programmatically and maintain consistency.",
    },
    {
      icon: Zap,
      title: "CI/CD Pipeline",
      description: "Build automated deployment pipelines using GitHub Actions, GitLab CI, and Jenkins for faster, reliable releases.",
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      description: "Implement security best practices, compliance frameworks, and monitoring solutions for enterprise environments.",
    },
    {
      icon: GitBranch,
      title: "DevOps Strategy",
      description: "Consult on DevOps transformation, containerization with Docker/Kubernetes, and operational excellence.",
    },
    {
      icon: Zap,
      title: "Monitoring & Logging",
      description: "Set up comprehensive monitoring with Prometheus, ELK Stack, and DataDog for visibility and quick incident response.",
    },
  ];

  const projects = [
    {
      title: "Multi-Cloud Infrastructure Migration",
      description: "Migrated legacy on-premise infrastructure to AWS with zero downtime using Terraform and blue-green deployment strategies.",
      tags: ["AWS", "Terraform", "CI/CD", "Migration"],
      impact: "40% cost reduction, 99.99% uptime",
    },
    {
      title: "Kubernetes Platform Engineering",
      description: "Designed and deployed a production-grade Kubernetes cluster with auto-scaling, monitoring, and GitOps workflows.",
      tags: ["Kubernetes", "Docker", "ArgoCD", "Prometheus"],
      impact: "50% faster deployments, improved reliability",
    },
    {
      title: "Enterprise Security Hardening",
      description: "Implemented comprehensive security controls, vulnerability scanning, and compliance automation across infrastructure.",
      tags: ["Security", "Compliance", "Scanning", "IAM"],
      impact: "100% compliance score, zero critical vulnerabilities",
    },
    {
      title: "Disaster Recovery & Backup Strategy",
      description: "Built automated backup and disaster recovery solutions with cross-region failover for business continuity.",
      tags: ["Backup", "DR", "AWS", "Automation"],
      impact: "RTO < 1 hour, RPO < 15 minutes",
    },
  ];

  const skills = [
    { category: "Cloud Platforms", items: ["AWS", "Azure", "GCP", "DigitalOcean"] },
    { category: "Infrastructure", items: ["Terraform", "CloudFormation", "Ansible", "Pulumi"] },
    { category: "Containerization", items: ["Docker", "Kubernetes", "Docker Compose", "ECS"] },
    { category: "CI/CD", items: ["GitHub Actions", "GitLab CI", "Jenkins", "CircleCI"] },
    { category: "Monitoring", items: ["Prometheus", "Grafana", "DataDog", "New Relic"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis"] },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp",
      content: "Exceptional expertise in cloud architecture. Transformed our infrastructure and reduced costs by 40% while improving reliability.",
      initial: "S",
    },
    {
      name: "Michael Rodriguez",
      role: "Engineering Manager, CloudScale",
      content: "Outstanding DevOps professional. Their Kubernetes implementation was seamless and the team's adoption was incredibly smooth.",
      initial: "M",
    },
    {
      name: "Emily Watson",
      role: "VP Operations, DataFlow",
      content: "Highly recommended for infrastructure transformation. Professional, knowledgeable, and delivers results on time.",
      initial: "E",
    },
    {
      name: "James Park",
      role: "Startup Founder, InnovateLabs",
      content: "Helped us scale from 0 to production infrastructure in weeks. Great guidance on best practices and cost optimization.",
      initial: "J",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 overflow-hidden">
      {/* Decorative side elements */}
      <div className="fixed left-0 top-0 h-full w-12 border-r border-dashed border-green-500 opacity-30 pointer-events-none hidden lg:block">
        <div className="flex flex-col gap-4 p-2 mt-20">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-8 h-8 border-2 border-dashed border-green-500 flex items-center justify-center text-xs text-green-500 font-bold">
              {i}
            </div>
          ))}
        </div>
      </div>

      <div className="fixed right-0 top-0 h-full w-12 border-l border-dashed border-green-500 opacity-30 pointer-events-none hidden lg:block">
        <div className="flex flex-col gap-4 p-2 mt-20">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-8 h-8 border-2 border-dashed border-green-500 flex items-center justify-center text-xs text-green-500 font-bold">
              {i}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-dashed border-green-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-500">DevOps.io</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {["About", "Services", "Projects", "Skills", "Testimonials", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-green-500 transition border border-dashed border-transparent hover:border-green-500/50 px-3 py-1 text-sm">
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-green-500" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* CTA Button */}
          <Button className="hidden md:flex bg-green-500 hover:bg-green-600 text-black font-bold">
            Get in Touch
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-dashed border-green-500/30 p-4 space-y-3">
            {["About", "Services", "Projects", "Skills", "Testimonials", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block text-gray-300 hover:text-green-500 transition py-2">
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-sm text-gray-400">Hi, my name is</div>
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Cloud & DevOps<br />
                <span className="text-green-500">Engineer</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                I create reliable cloud solutions and build scalable applications. Expert in AWS, Kubernetes, Infrastructure Automation, and DevOps practices.
              </p>
              <div className="text-sm text-green-500 border border-dashed border-green-500/50 w-fit px-4 py-2">
                ✓ Currently available for remote work & freelance
              </div>
              <div className="flex gap-4 pt-4">
                <Button className="bg-green-500 hover:bg-green-600 text-black font-bold">
                  Explore My Work <ArrowRight size={16} className="ml-2" />
                </Button>
                <Button variant="outline" className="border-dashed border-green-500 text-green-500 hover:bg-green-500/10">
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-end gap-6">
              <a href="#" className="w-12 h-12 border border-dashed border-green-500/50 flex items-center justify-center hover:border-green-500 hover:text-green-500 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 border border-dashed border-green-500/50 flex items-center justify-center hover:border-green-500 hover:text-green-500 transition">
                <Github size={20} />
              </a>
              <a href="#" className="w-12 h-12 border border-dashed border-green-500/50 flex items-center justify-center hover:border-green-500 hover:text-green-500 transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-dashed border-green-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            About <span className="text-green-500">Me</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            I'm a passionate Cloud & DevOps Engineer with 8+ years of experience designing and implementing scalable infrastructure solutions. I specialize in AWS, Kubernetes, and Infrastructure Automation, helping organizations transform their operations and achieve digital excellence.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            What I <span className="text-green-500">Do</span>
          </h2>
          <p className="text-gray-400 mb-12">Comprehensive cloud and DevOps solutions tailored to your business needs</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="border border-dashed border-green-500/30 hover:border-green-500/60 p-6 transition group">
                  <Icon className="w-8 h-8 text-green-500 mb-4 group-hover:scale-110 transition" />
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            Technical <span className="text-green-500">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="border border-dashed border-green-500/30 p-6">
                <h3 className="text-green-500 font-bold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sidx) => (
                    <span key={sidx} className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-sm rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            Featured <span className="text-green-500">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="border border-dashed border-green-500/30 hover:border-green-500/60 p-6 transition group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold flex-1">{project.title}</h3>
                  <ExternalLink size={20} className="text-green-500 opacity-0 group-hover:opacity-100 transition" />
                </div>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tidx) => (
                    <span key={tidx} className="px-2 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-green-500 text-sm font-semibold">✓ {project.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            What Clients <span className="text-green-500">Say</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="border border-dashed border-green-500/30 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500/20 border border-green-500 rounded-full flex items-center justify-center text-green-500 font-bold">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your <span className="text-green-500">Infrastructure?</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Let's discuss how I can help you achieve your cloud and DevOps goals. Get in touch today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-500 hover:bg-green-600 text-black font-bold">
              Send Me an Email
            </Button>
            <Button variant="outline" className="border-dashed border-green-500 text-green-500 hover:bg-green-500/10">
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-dashed border-green-500/20 py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
        <p>© 2026 Cloud & DevOps Portfolio. Built with modern web technologies.</p>
      </footer>
    </div>
  );
}
