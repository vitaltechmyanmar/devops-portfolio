import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Cloud, Code2, GitBranch, Lock, Zap, ExternalLink, Github, Linkedin, Mail, CheckCircle2 } from "lucide-react";
import { useState } from "react";

/**
 * Cloud & DevOps Engineer Portfolio
 * Design: Premium Tech Elegance
 * - Deep navy background with cyan and emerald accents
 * - Sora font for headlines, Inter for body
 * - Refined animations and smooth transitions
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

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

  const skills = [
    { category: "Cloud Platforms", items: ["AWS", "Azure", "GCP", "DigitalOcean"] },
    { category: "Infrastructure", items: ["Terraform", "CloudFormation", "Ansible", "Pulumi"] },
    { category: "Containerization", items: ["Docker", "Kubernetes", "Docker Compose", "ECS"] },
    { category: "CI/CD", items: ["GitHub Actions", "GitLab CI", "Jenkins", "CircleCI"] },
    { category: "Monitoring", items: ["Prometheus", "Grafana", "DataDog", "New Relic"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis"] },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Cloud className="w-5 h-5 text-background" />
            </div>
            <span className="text-xl font-bold font-display">DevOps.io</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm hover:text-primary transition-colors">Services</a>
            <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
            <a href="#testimonials" className="text-sm hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-background">Get in Touch</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663655711171/PCfM9uDzkWDNWo2uiaPFKU/hero-cloud-infrastructure-BBakj5J8Y85LsVeTKJBEUP.webp"
            alt="Cloud Infrastructure"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        </div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-primary/30">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">Cloud & DevOps Expert</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Transform Your <span className="text-primary">Infrastructure</span> Today
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg">
                Expert Cloud Architecture, DevOps Strategy, and Infrastructure Automation for scalable, secure, and cost-efficient systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-background gap-2">
                  Explore My Work <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  Download Resume
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-8">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663655711171/PCfM9uDzkWDNWo2uiaPFKU/devops-workflow-jzS89nXEboStorij344PAJ.webp"
                alt="DevOps Workflow"
                className="relative rounded-2xl border border-primary/20 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-border">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Services & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cloud and DevOps solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card key={idx} className="bg-card border-border hover:border-primary/50 transition-all duration-300 p-8 group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world infrastructure solutions and DevOps implementations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-primary/50 transition-all duration-300 p-8 group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold flex-1">{project.title}</h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-accent">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-sm font-medium">{project.impact}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proficient in modern cloud and DevOps technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-lg font-bold mb-4 text-primary">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-secondary text-sm text-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading companies for infrastructure and DevOps expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-card border-border p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-background">{testimonial.initial}</span>
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Infrastructure?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how I can help you achieve your cloud and DevOps goals. Get in touch today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-background gap-2">
                <Mail className="w-4 h-4" />
                Send Me an Email
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 gap-2">
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </Button>
            </div>

            <div className="mt-12 pt-12 border-t border-border">
              <p className="text-sm text-muted-foreground">
                © 2026 Cloud & DevOps Portfolio. Built with modern web technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
