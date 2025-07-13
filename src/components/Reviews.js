import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ name: '', rating: 5, comment: '' });
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/reviews')
      .then(res => setReviews(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/reviews', formData);
      setMessage('✅ Review submitted!');
      setFormData({ name: '', rating: 5, comment: '' });

      // Refresh reviews
      const res = await axios.get('http://localhost:5000/api/reviews');
      setReviews(res.data);

      // ✅ Hide the form after successful submission
      setShowForm(false);
    } catch (err) {
      setMessage('❌ Failed to submit review');
    }
  };




  return (
    <section className="bg-[#0a192f] py-16 px-6 w-full text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🌟 What Clients Say
        </motion.h2>

        <motion.p
          className="text-blue-300 text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Real feedback from real people who loved working with me.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review._id}
              className="bg-blue-900/50 backdrop-blur-lg shadow-md rounded-xl p-6 border border-blue-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-white">{review.name}</h3>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-blue-300'}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-blue-100">{review.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="text-center mt-10">
        <div className="text-center mt-10">
          <motion.button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {showForm ? 'Cancel' : ' Add Your Review'}
          </motion.button>
        </div>

      </div>

      {showForm && (
        <div className="mt-8 bg-blue-900/30 p-6 rounded-xl shadow-inner border border-blue-700 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-white mb-4">✍️ Leave a Review</h3>
          {message && <p className="text-center mb-4 text-green-400 font-semibold">{message}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-[#0a192f] text-white border border-blue-600 placeholder:text-blue-300"
            />

            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#0a192f] text-white border border-blue-600"
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>
                  {num} Star{num > 1 && 's'}
                </option>
              ))}
            </select>

            <textarea
              name="comment"
              placeholder="Your Comment"
              value={formData.comment}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-[#0a192f] text-white border border-blue-600 placeholder:text-blue-300"
            />

            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition w-full"
            >
              Submit Review
            </button>
          </form>
        </div>
      )}


    </section>
  );
};

export default Reviews;
