import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const sampleReviews = [
  { id: 1, name: "Shahid Majeed", rating: 5, comment: "Amazing work! Highly recommended." },
  { id: 3, name: "Sara Ahmed", rating: 5, comment: "Loved the design and attention to detail!" },
];

export default function Reviews() {
  const [reviews] = useState(sampleReviews);

  return (
    <section className="bg-[#0a192f] py-16 px-6 w-full text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🌟 What Clients Say
        </motion.h2>
        <motion.p
          className="text-blue-300 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Real feedback from people who loved working with me.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-blue-900/50 backdrop-blur-lg shadow-md rounded-xl p-6 border border-blue-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-white mb-2">{review.name}</h3>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? "text-yellow-400" : "text-blue-300"}`}
                  />
                ))}
              </div>
              <p className="text-blue-100">{review.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
