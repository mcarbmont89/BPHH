"use client"

import { useParams } from "next/navigation"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { motion } from "framer-motion"
import { Calendar, Clock, Share2, ArrowLeft, Tag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const blogPosts = {
  "recruitment-process": {
    en: {
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
    },
    es: {
      title: "Nuestro Proceso de Reclutamiento con IA: Un Cambio de Paradigma en la Contratación Tecnológica",
      content: `
        <p>En Botic Partners, hemos revolucionado el panorama del reclutamiento tecnológico con nuestro proceso impulsado por IA. Así es como estamos cambiando las reglas del juego:</p>
        
        <h2>1. Matching de Candidatos Impulsado por IA</h2>
        <p>Nuestros algoritmos de IA propietarios analizan grandes cantidades de datos para emparejar candidatos con ofertas de trabajo. Esto va más allá del simple matching por palabras clave, considerando factores como la trayectoria profesional, la compatibilidad de habilidades e incluso el ajuste cultural.</p>
        
        <h2>2. Análisis Predictivo de Rendimiento</h2>
        <p>Utilizando modelos de aprendizaje automático entrenados con colocaciones exitosas, podemos predecir el probable desempeño de un candidato en un puesto. Esto ayuda a las empresas a tomar decisiones de contratación más informadas.</p>
        
        <h2>3. Evaluación Automatizada de Habilidades</h2>
        <p>Nuestra plataforma impulsada por IA incluye desafíos de codificación automatizados y evaluaciones técnicas, proporcionando datos objetivos sobre las habilidades de un candidato.</p>
        
        <h2>4. Aprendizaje y Mejora Continua</h2>
        <p>Nuestro sistema de IA aprende de cada colocación, refinando continuamente sus algoritmos de matching para mejorar las recomendaciones futuras.</p>
        
        <p>Al aprovechar estas herramientas impulsadas por IA, podemos realizar matches más precisos, reducir el tiempo de contratación y, en última instancia, contribuir al éxito tanto de los candidatos como de las empresas en la industria tecnológica.</p>
      `,
    },
    date: "2025-01-15",
    readTime: "5 min",
    category: "Recruitment",
    author: "Maria Rodriguez",
    authorRole: "Head of AI Recruitment",
    authorImage: "/placeholder.svg?height=100&width=100",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%207%20abr%202025%2C%2014_56_15-9G8Pl56e7GyYUUquCqdMyWiTfMpQxG.png",
    relatedPosts: ["connecting-companies", "ai-agents-implementation"],
  },
  "connecting-companies": {
    en: {
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
    },
    es: {
      title: "Conectando Empresas, Impulsando el Crecimiento: El Enfoque de Botic Partners",
      content: `
        <p>En Botic Partners, no solo cubrimos puestos – conectamos empresas con el talento que necesitan para impulsar el crecimiento y la innovación. Así es como lo hacemos posible:</p>
        
        <h2>1. Comprendiendo el ADN de la Empresa</h2>
        <p>Profundizamos en la cultura, objetivos y necesidades técnicas de cada empresa. Esto nos permite encontrar candidatos que no solo ocuparán un puesto, sino que realmente prosperarán y contribuirán al crecimiento de la empresa.</p>
        
        <h2>2. Cultivo de Red de Talento</h2>
        <p>Hemos construido una amplia red de talento tecnológico de primer nivel. Nuestro sistema impulsado por IA interactúa continuamente con esta red, comprendiendo las habilidades, aspiraciones y potencial de cada profesional.</p>
        
        <h2>3. Colocación Estratégica de Talento</h2>
        <p>Al comprender tanto a las empresas como a los candidatos a un nivel profundo, realizamos colocaciones estratégicas que impulsan la innovación y el crecimiento. No solo cubrimos las necesidades actuales, sino que ayudamos a las empresas a construir los equipos que necesitarán para el éxito futuro.</p>
        
        <h2>4. Soporte Continuo y Retroalimentación</h2>
        <p>Nuestra relación no termina con una colocación. Proporcionamos soporte continuo y recopilamos retroalimentación para asegurar que cada match sea exitoso a largo plazo.</p>
        
        <p>A través de este enfoque, hemos ayudado a numerosas empresas a escalar sus equipos tecnológicos, lanzar productos innovadores y lograr un crecimiento sin precedentes. En Botic Partners, no somos solo una agencia de reclutamiento – somos un socio de crecimiento para la industria tecnológica.</p>
      `,
    },
    date: "2025-02-15",
    readTime: "6 min",
    category: "Business Growth",
    author: "Carlos Mendez",
    authorRole: "Strategic Partnerships Director",
    authorImage: "/placeholder.svg?height=100&width=100",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%207%20abr%202025%2C%2012_27_18-ANHdHODVQFX0EsM4a7FyXlKx8cRoDb.png",
    relatedPosts: ["recruitment-process", "ai-agents-implementation"],
  },
  "ai-agents-implementation": {
    en: {
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
    },
    es: {
      title: "Implementación de Agentes de IA: Transformando tus Procesos de Negocio",
      content: `
        <p>Los agentes de IA están revolucionando los procesos empresariales en todas las industrias. En Botic Partners, ayudamos a nuestros socios a implementar estas poderosas herramientas para optimizar operaciones y aumentar la eficiencia. Así es cómo lo hacemos:</p>
        
        <h2>1. Análisis de Procesos e Identificación de Oportunidades</h2>
        <p>Comenzamos analizando sus procesos actuales para identificar áreas donde los agentes de IA pueden tener el mayor impacto. Esto podría ser en servicio al cliente, análisis de datos o incluso en el propio reclutamiento.</p>
        
        <h2>2. Desarrollo Personalizado de Agentes de IA</h2>
        <p>Nuestro equipo de expertos en IA desarrolla agentes personalizados adaptados a sus necesidades específicas. Estos pueden variar desde chatbots para interacción con clientes hasta complejos agentes de análisis de datos.</p>
        
        <h2>3. Integración y Capacitación</h2>
        <p>No solo entregamos un producto – nos aseguramos de que esté completamente integrado en sus sistemas existentes. También proporcionamos capacitación integral a su equipo para garantizar que puedan aprovechar al máximo estas nuevas herramientas.</p>
        
        <h2>4. Mejora Continua</h2>
        <p>Nuestros agentes de IA están diseñados para aprender y mejorar con el tiempo. Proporcionamos soporte continuo y actualizaciones para garantizar que sus herramientas de IA estén siempre a la vanguardia.</p>
        
        <h2>5. Medición de Impacto</h2>
        <p>Le ayudamos a rastrear y medir el impacto de la implementación de IA en sus procesos empresariales, desde el aumento de la eficiencia hasta el ahorro de costos.</p>
        
        <p>Al implementar agentes de IA, nuestros socios han visto mejoras dramáticas en eficiencia, precisión y rendimiento general. Ya sea que busque optimizar su proceso de contratación, mejorar el servicio al cliente o optimizar sus operaciones, los agentes de IA pueden ser un cambio de juego para su negocio.</p>
      `,
    },
    date: "2025-03-15",
    readTime: "7 min",
    category: "AI Technology",
    author: "Elena Kim",
    authorRole: "AI Implementation Specialist",
    authorImage: "/placeholder.svg?height=100&width=100",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%207%20abr%202025%2C%2015_32_15-39a4zY9RPLXSTRXLrM6PtC743trwfW.png",
    relatedPosts: ["recruitment-process", "connecting-companies"],
  },
  // Add entries for the additional blog posts
  "ai-recruitment-trends": {
    en: {
      title: "2025 AI Recruitment Trends: What's Next in Talent Acquisition",
      content: `
        <p>The landscape of talent acquisition is constantly evolving, with AI technologies driving much of this change. As we look ahead to 2025, several key trends are emerging that will shape how companies find and secure top talent.</p>
        
        <h2>1. Hyper-Personalized Candidate Experiences</h2>
        <p>AI is enabling unprecedented levels of personalization in the recruitment process. From customized job recommendations to tailored interview questions, candidates will experience recruitment processes designed specifically for them.</p>
        
        <h2>2. Predictive Workforce Planning</h2>
        <p>Advanced AI models are now capable of predicting future talent needs with remarkable accuracy. Companies are increasingly using these tools to anticipate skills gaps and hiring needs before they become urgent.</p>
        
        <h2>3. Ethical AI and Bias Mitigation</h2>
        <p>As AI becomes more prevalent in recruitment, there's a growing focus on ensuring these systems are fair and unbiased. New tools and methodologies are emerging to detect and mitigate bias in AI-powered recruitment processes.</p>
        
        <h2>4. Voice and Emotion Analysis</h2>
        <p>Beyond analyzing resumes and written communication, AI is now capable of analyzing voice patterns and emotional cues during interviews. This provides deeper insights into candidate fit and potential.</p>
        
        <p>At Botic Partners, we're at the forefront of these trends, continuously evolving our AI recruitment solutions to provide our clients with the most advanced, effective, and ethical talent acquisition tools available.</p>
      `,
    },
    es: {
      title: "Tendencias de Reclutamiento con IA 2025: El Futuro de la Adquisición de Talento",
      content: `
        <p>El panorama de la adquisición de talento está en constante evolución, con las tecnologías de IA impulsando gran parte de este cambio. Mirando hacia 2025, están surgiendo varias tendencias clave que darán forma a cómo las empresas encuentran y aseguran el mejor talento.</p>
        
        <h2>1. Experiencias de Candidatos Hiper-Personalizadas</h2>
        <p>La IA está permitiendo niveles sin precedentes de personalización en el proceso de reclutamiento. Desde recomendaciones de trabajo personalizadas hasta preguntas de entrevista adaptadas, los candidatos experimentarán procesos de reclutamiento diseñados específicamente para ellos.</p>
        
        <h2>2. Planificación Predictiva de la Fuerza Laboral</h2>
        <p>Los modelos avanzados de IA ahora son capaces de predecir las necesidades futuras de talento con notable precisión. Las empresas están utilizando cada vez más estas herramientas para anticipar brechas de habilidades y necesidades de contratación antes de que se vuelvan urgentes.</p>
        
        <h2>3. IA Ética y Mitigación de Sesgos</h2>
        <p>A medida que la IA se vuelve más prevalente en el reclutamiento, hay un creciente enfoque en garantizar que estos sistemas sean justos y no sesgados. Están surgiendo nuevas herramientas y metodologías para detectar y mitigar sesgos en los procesos de reclutamiento impulsados por IA.</p>
        
        <h2>4. Análisis de Voz y Emociones</h2>
        <p>Más allá de analizar currículums y comunicación escrita, la IA ahora es capaz de analizar patrones de voz y señales emocionales durante las entrevistas. Esto proporciona información más profunda sobre el ajuste y potencial del candidato.</p>
        
        <p>En Botic Partners, estamos a la vanguardia de estas tendencias, evolucionando continuamente nuestras soluciones de reclutamiento con IA para proporcionar a nuestros clientes las herramientas de adquisición de talento más avanzadas, efectivas y éticas disponibles.</p>
      `,
    },
    date: "2025-02-10",
    readTime: "5 min",
    category: "Industry Trends",
    author: "David Chen",
    authorRole: "AI Research Director",
    authorImage: "/placeholder.svg?height=100&width=100",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%207%20abr%202025%2C%2015_52_25-l7QNyXnPwAO5G9cRMRtnpM8g5Z5ZtY.png",
    relatedPosts: ["recruitment-process", "future-of-work"],
  },
  "talent-retention-strategies": {
    en: {
      title: "AI-Enhanced Talent Retention Strategies That Actually Work",
      content: `
        <p>Finding top talent is only half the battle – keeping them engaged and committed to your organization is equally crucial. Here's how AI is transforming talent retention strategies:</p>
        
        <h2>1. Predictive Attrition Analysis</h2>
        <p>AI systems can now analyze patterns in employee behavior, performance, and engagement to predict which team members might be considering leaving. This allows HR teams to proactively address concerns before they lead to turnover.</p>
        
        <h2>2. Personalized Growth Paths</h2>
        <p>AI can analyze an employee's skills, interests, and career trajectory to suggest personalized development opportunities. This ensures each team member has a clear path for growth within your organization.</p>
        
        <h2>3. Real-time Engagement Monitoring</h2>
        <p>Advanced sentiment analysis tools can monitor employee engagement through various channels, providing managers with insights into team morale and potential issues.</p>
        
        <h2>4. AI-Powered Mentorship Matching</h2>
        <p>Finding the right mentor-mentee relationships can significantly impact retention. AI can analyze personality traits, skills, and career goals to suggest optimal mentorship pairings.</p>
        
        <p>By implementing these AI-enhanced retention strategies, our clients have seen significant improvements in employee satisfaction and dramatic reductions in turnover rates, particularly among high-value technical talent.</p>
      `,
    },
    es: {
      title: "Estrategias de Retención de Talento Mejoradas con IA que Realmente Funcionan",
      content: `
        <p>Encontrar el mejor talento es solo la mitad de la batalla – mantenerlos comprometidos y comprometidos con su organización es igualmente crucial. Así es cómo la IA está transformando las estrategias de retención de talento:</p>
        
        <h2>1. Análisis Predictivo de Deserción</h2>
        <p>Los sistemas de IA ahora pueden analizar patrones en el comportamiento, rendimiento y compromiso de los empleados para predecir qué miembros del equipo podrían estar considerando irse. Esto permite a los equipos de RRHH abordar proactivamente las preocupaciones antes de que conduzcan a la rotación.</p>
        
        <h2>2. Trayectorias de Crecimiento Personalizadas</h2>
        <p>La IA puede analizar las habilidades, intereses y trayectoria profesional de un empleado para sugerir oportunidades de desarrollo personalizadas. Esto asegura que cada miembro del equipo tenga un camino claro para el crecimiento dentro de su organización.</p>
        
        <h2>3. Monitoreo de Compromiso en Tiempo Real</h2>
        <p>Las herramientas avanzadas de análisis de sentimientos pueden monitorear el compromiso de los empleados a través de varios canales, proporcionando a los gerentes información sobre la moral del equipo y posibles problemas.</p>
        
        <h2>4. Emparejamiento de Mentoría Impulsado por IA</h2>
        <p>Encontrar las relaciones adecuadas de mentor-aprendiz puede impactar significativamente en la retención. La IA puede analizar rasgos de personalidad, habilidades y objetivos profesionales para sugerir emparejamientos óptimos de mentoría.</p>
        
        <p>Al implementar estas estrategias de retención mejoradas con IA, nuestros clientes han visto mejoras significativas en la satisfacción de los empleados y reducciones dramáticas en las tasas de rotación, particularmente entre el talento técnico de alto valor.</p>
      `,
    },
    date: "2025-02-22",
    readTime: "6 min",
    category: "Talent Management",
    author: "Sophia Johnson",
    authorRole: "Talent Retention Specialist",
    authorImage: "/placeholder.svg?height=100&width=100",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%207%20abr%202025%2C%2012_51_58-bstYWBgRPMl0ZqJWW149VZ71DkaVXi.png",
    relatedPosts: ["connecting-companies", "future-of-work"],
  },
  "future-of-work": {
    en: {
      title: "The Future of Work: How AI is Reshaping Recruitment and Workforce Management",
      content: `
        <p>The workplace is undergoing a profound transformation, driven largely by advances in artificial intelligence. These changes are reshaping not just how we work, but how companies find, develop, and manage talent.</p>
        
        <h2>1. The Rise of the Hybrid Workforce</h2>
        <p>AI is enabling new models of work that blend human and artificial intelligence. Companies are increasingly building teams where humans and AI agents collaborate, each focusing on what they do best.</p>
        
        <h2>2. Skills-Based Talent Acquisition</h2>
        <p>Traditional role-based hiring is giving way to skills-based recruitment. AI systems can now identify the specific skills needed for business success and find candidates who possess those skills, regardless of their formal qualifications or career history.</p>
        
        <h2>3. Continuous Learning Ecosystems</h2>
        <p>The rapid pace of technological change means that continuous learning is essential. AI-powered learning platforms can identify skill gaps and deliver personalized learning experiences to keep workforces competitive.</p>
        
        <h2>4. Augmented Management</h2>
        <p>AI tools are increasingly supporting managers with data-driven insights about team performance, engagement, and development needs. This allows for more informed, effective leadership.</p>
        
        <p>At Botic Partners, we're helping companies navigate this changing landscape, ensuring they have the right talent strategies in place to thrive in the AI-augmented workplace of the future.</p>
      `,
    },
    es: {
      title: "El Futuro del Trabajo: Cómo la IA está Redefiniendo el Reclutamiento y la Gestión de Personal",
      content: `
        <p>El lugar de trabajo está experimentando una profunda transformación, impulsada en gran parte por los avances en inteligencia artificial. Estos cambios están redefiniendo no solo cómo trabajamos, sino cómo las empresas encuentran, desarrollan y gestionan el talento.</p>
        
        <h2>1. El Auge de la Fuerza Laboral Híbrida</h2>
        <p>La IA está permitiendo nuevos modelos de trabajo que combinan inteligencia humana y artificial. Las empresas están construyendo cada vez más equipos donde humanos y agentes de IA colaboran, cada uno enfocándose en lo que hace mejor.</p>
        
        <h2>2. Adquisición de Talento Basada en Habilidades</h2>
        <p>La contratación tradicional basada en roles está dando paso al reclutamiento basado en habilidades. Los sistemas de IA ahora pueden identificar las habilidades específicas necesarias para el éxito empresarial y encontrar candidatos que posean esas habilidades, independientemente de sus calificaciones formales o historial profesional.</p>
        
        <h2>3. Ecosistemas de Aprendizaje Continuo</h2>
        <p>El rápido ritmo del cambio tecnológico significa que el aprendizaje continuo es esencial. Las plataformas de aprendizaje impulsadas por IA pueden identificar brechas de habilidades y ofrecer experiencias de aprendizaje personalizadas para mantener competitivas a las fuerzas laborales.</p>
        
        <h2>4. Gestión Aumentada</h2>
        <p>Las herramientas de IA están apoyando cada vez más a los gerentes con información basada en datos sobre el rendimiento del equipo, el compromiso y las necesidades de desarrollo. Esto permite un liderazgo más informado y efectivo.</p>
        
        <p>En Botic Partners, estamos ayudando a las empresas a navegar por este panorama cambiante, asegurando que tengan las estrategias de talento adecuadas para prosperar en el lugar de trabajo aumentado por IA del futuro.</p>
      `,
    },
    date: "2025-03-05",
    readTime: "8 min",
    category: "Future Insights",
    author: "James Wilson",
    authorRole: "Workforce Futurist",
    authorImage: "/placeholder.svg?height=100&width=100",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%207%20abr%202025%2C%2015_52_08-Sq8nfJEM4qzpzIn4rkQ58amsR7bPzz.png",
    relatedPosts: ["ai-recruitment-trends", "talent-retention-strategies"],
  },
}

// Now update the BlogPost component to use the language-specific content
export default function BlogPost() {
  const { t, language } = useLanguage()
  const params = useParams()
  const id = params.id as string
  const post = blogPosts[id as keyof typeof blogPosts]
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false)

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">{t("blog.postNotFound")}</h1>
            <p className="text-gray-600 mb-8">{t("blog.postNotFoundMessage")}</p>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("blog.backToBlog")}
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Get the content in the current language
  const currentLangContent = post[language as keyof typeof post] || post.en

  const sharePost = (platform: string) => {
    const url = window.location.href
    const title = currentLangContent.title

    switch (platform) {
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, "_blank")
        break
      case "linkedin":
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank")
        break
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank")
        break
      case "email":
        window.open(`mailto:?subject=${title}&body=${url}`, "_blank")
        break
    }

    setIsShareMenuOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero section with featured image */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] w-full">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={currentLangContent.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <Link
                href="/blog"
                className="inline-flex items-center text-white mb-4 hover:text-primary transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("blog.backToBlog")}
              </Link>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-primary text-white text-xs font-medium px-2.5 py-1 rounded">{post.category}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{currentLangContent.title}</h1>
              <div className="flex items-center text-white/80 text-sm gap-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{new Date(post.date).toLocaleDateString(language === "es" ? "es-ES" : "en-US")}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>
                    {post.readTime} {language === "es" ? "min de lectura" : "read"}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: currentLangContent.content }} />
              </article>

              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center flex-wrap gap-2">
                  <Tag className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700 font-medium mr-2">Tags:</span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">
                    AI Technology
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">Recruitment</span>
                </div>
              </div>

              {/* Share buttons */}
              <div className="mt-6 flex items-center">
                <span className="text-gray-700 font-medium mr-3">{language === "es" ? "Compartir:" : "Share:"}</span>
                <div className="relative">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center"
                    onClick={() => setIsShareMenuOpen(!isShareMenuOpen)}
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    {language === "es" ? "Compartir" : "Share"}
                  </Button>

                  {isShareMenuOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-2 z-10 w-40">
                      <button
                        className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                        onClick={() => sharePost("twitter")}
                      >
                        Twitter
                      </button>
                      <button
                        className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                        onClick={() => sharePost("linkedin")}
                      >
                        LinkedIn
                      </button>
                      <button
                        className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                        onClick={() => sharePost("facebook")}
                      >
                        Facebook
                      </button>
                      <button
                        className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                        onClick={() => sharePost("email")}
                      >
                        Email
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author info */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={post.authorImage || "/placeholder.svg"}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{post.author}</h3>
                    <p className="text-gray-600 text-sm">{post.authorRole}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  {language === "es"
                    ? "Experto en soluciones de reclutamiento impulsadas por IA con más de 10 años de experiencia en la industria tecnológica."
                    : "Expert in AI-powered recruitment solutions with over 10 years of experience in the tech industry."}
                </p>
              </div>

              {/* Related posts */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4">
                  {language === "es" ? "Artículos Relacionados" : "Related Articles"}
                </h3>
                <div className="space-y-4">
                  {post.relatedPosts.map((relatedPostId) => {
                    const relatedPost = blogPosts[relatedPostId as keyof typeof blogPosts]
                    const relatedPostContent = relatedPost[language as keyof typeof relatedPost] || relatedPost.en
                    return (
                      <Link href={`/blog/${relatedPostId}`} key={relatedPostId}>
                        <div className="group">
                          <h4 className="font-medium text-gray-800 group-hover:text-primary transition-colors">
                            {relatedPostContent.title}
                          </h4>
                          <div className="flex items-center text-gray-500 text-xs mt-1">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>
                              {new Date(relatedPost.date).toLocaleDateString(language === "es" ? "es-ES" : "en-US")}
                            </span>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Newsletter section */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("blog.newsletter.title")}</h2>
            <p className="text-gray-600 mb-8">{t("blog.newsletter.description")}</p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t("blog.newsletter.placeholder")}
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button className="whitespace-nowrap">{t("blog.newsletter.subscribe")}</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
