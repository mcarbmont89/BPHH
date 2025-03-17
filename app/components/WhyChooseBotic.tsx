import { Brain, CheckCircle, Handshake, Lightbulb, TrendingUp, Users } from "lucide-react"

const WhyChooseBotic = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Why Choose Botic?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <Handshake className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Trust & Reliability</h3>
            <p className="text-gray-600">
              We prioritize building trust with our clients through transparent communication and reliable service
              delivery.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <Brain className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Innovative Solutions</h3>
            <p className="text-gray-600">
              We leverage cutting-edge technologies and creative strategies to deliver innovative solutions tailored to
              your unique needs.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <TrendingUp className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Proven Results</h3>
            <p className="text-gray-600">
              Our track record speaks for itself. We consistently deliver measurable results that drive growth and
              success for our clients.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <Users className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Dedicated Support</h3>
            <p className="text-gray-600">
              Our dedicated support team is always available to provide prompt and personalized assistance, ensuring
              your satisfaction.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <Lightbulb className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Strategic Thinking</h3>
            <p className="text-gray-600">
              We approach every project with a strategic mindset, carefully analyzing your goals and developing a
              roadmap for success.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <CheckCircle className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Quality Assurance</h3>
            <p className="text-gray-600">
              We adhere to the highest standards of quality assurance, ensuring that our solutions are reliable, secure,
              and perform flawlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseBotic

