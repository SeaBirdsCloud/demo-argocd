import { motion } from "framer-motion"

function QuoteCard({ quote }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl max-w-xl w-full p-8 text-center border border-blue-100"
    >
      <p className="text-xl italic text-gray-800 mb-4 leading-relaxed">
        “{quote.text}”
      </p>
      <p className="text-blue-700 font-medium">— {quote.author}</p>
    </motion.div>
  )
}

export default QuoteCard
