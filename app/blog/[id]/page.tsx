"use client"

import { useParams } from "next/navigation"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { motion } from "framer-motion"

const blogPosts = {
  "recruitment-process": {
    title: "Our AI-Powered Recruitment Process: A Game-Changer in Tech Hiring",
    content: `
      <p>At Botic Partners, we've revolutionized the tech recruitment landscape with our AI-powered process. Here's how we're changing the game:</p>
      
      <h2>1. AI-Driven Candidate Matching</h2>
      <p>Our proprietary AI algorithms analyze vast amounts of data to match candidates with job openings. This goes beyond keyword matching, considering factors like career trajectory, skill compatibility, and even cultural fit.</p>
      
      <h2>2. Predictive Performance Analysis</h2>
      <p>Using machine learning models trained on successful placements, we can predict a candidate's likely performance in a role. This helps companies make more informed hiring decisions.</p>
      
      <h2>3. Automated Skill Assessment</h2>
      <p>Our AI-powered platform includes automated coding challenges and technical assessments, providing objective data on a candidate's skills.</p>
      
      <h2>4. Continuous Learning and Improvement</h2>
      <p>Our AI system learns from each placement, continuously refining its matching algorithms to improve future recommendations.</p>
      
      <p>By leveraging these AI-powered tools, we're able to make more accurate matches, reduce time-to-hire, and ultimately contribute to the success of both candidates and companies in the tech industry.</p>
    `,
    date: "2025-01-15",
  },
  "connecting-companies": {
    title: "Connecting Companies, Fueling Growth: The Botic Partners Approach",
    content: `
      <p>At Botic Partners, we don't just fill positions – we connect companies with the talent they need to fuel growth and innovation. Here's how we make it happen:</p>
      
      <h2>1. Understanding Company DNA</h2>
      <p>We dive deep into each company's culture, goals, and technical needs. This allows us to find candidates who will not just fill a role, but truly thrive and contribute to the company's growth.</p>
      
      <h2>2. Talent Network Cultivation</h2>
      <p>We've built a vast network of top-tier tech talent. Our AI-powered system continuously engages with this network, understanding each professional's skills, aspirations, and potential.</p>
      
      <h2>3. Strategic Talent Placement</h2>
      <p>By understanding both companies and candidates at a deep level, we make strategic placements that drive innovation and growth. We're not just filling today's needs, but helping companies build the teams they'll need for future success.</p>
      
      <h2>4. Ongoing Support and Feedback</h2>
      <p>Our relationship doesn't end with a placement. We provide ongoing support and gather feedback to ensure each match is successful in the long term.</p>
      
      <p>Through this approach, we've helped numerous companies scale their tech teams, launch innovative products, and achieve unprecedented growth. At Botic Partners, we're not just a recruitment agency – we're a growth partner for the tech industry.</p>
    `,
    date: "2025-02-15",
  },
  "ai-agents-implementation": {
    title: "Implementing AI Agents: Transforming Your Business Processes",
    content: `
      <p>AI agents are revolutionizing business processes across industries. At Botic Partners, we help our partners implement these powerful tools to streamline operations and boost efficiency. Here's how:</p>
      
      <h2>1. Process Analysis and Opportunity Identification</h2>
      <p>We start by analyzing your current processes to identify areas where AI agents can make the biggest impact. This could be in customer service, data analysis, or even in recruitment itself.</p>
      
      <h2>2. Customized AI Agent Development</h2>
      <p>Our team of AI experts develops customized agents tailored to your specific needs. These could range from chatbots for customer interaction to complex data analysis agents.</p>
      
      <h2>3. Integration and Training</h2>
      <p>We don't just deliver a product – we ensure it's fully integrated into your existing systems. We also provide comprehensive training to your team to ensure they can make the most of these new tools.</p>
      
      <h2>4. Continuous Improvement</h2>
      <p>Our AI agents are designed to learn and improve over time. We provide ongoing support and updates to ensure your AI tools are always at the cutting edge.</p>
      
      <h2>5. Measuring Impact</h2>
      <p>We help you track and measure the impact of AI implementation on your business processes, from increased efficiency to cost savings.</p>
      
      <p>By implementing AI agents, our partners have seen dramatic improvements in efficiency, accuracy, and overall performance. Whether you're looking to streamline your hiring process, improve customer service, or optimize your operations, AI agents can be a game-changer for your business.</p>
    `,
    date: "2025-03-15",
  },
}

export default function BlogPost() {
  const { t } = useLanguage()
  const params = useParams()
  const id = params.id as string
  const post = blogPosts[id as keyof typeof blogPosts]

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-500 mb-8">{new Date(post.date).toLocaleDateString()}</p>
          <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: post.content }} />
        </motion.article>
      </main>
      <Footer />
    </div>
  )
}

