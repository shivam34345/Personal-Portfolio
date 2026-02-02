import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactModal = ({ isOpen, onClose }) => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        description: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // EmailJS Service ID, Template ID, Public Key
       emailjs.send(
  'service_h6uvtpu',
  'template_kakwzfc',
  {
    name: formState.name,           // ✅ matches {{name}}
    email: formState.email,         // ✅ matches {{email}}
    message: formState.description, // ✅ matches {{message}}
    title: 'Inbox',                 // ✅ optional (for subject)
  },
  'QpKw5LP4CPYRZlZgM'
)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text)
                alert("Message Sent Successfully! 🚀")
                setFormState({ name: '', email: '', description: '' })
                onClose()
            })
            .catch((err) => {
                console.log('FAILED...', err)
                alert("Failed to send message. Please try again later.")
            })
            .finally(() => {
                setIsSubmitting(false)
            })
    }

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 50 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-gray-900 border border-white/10 p-8 rounded-3xl w-full max-w-lg mx-4 relative shadow-[0_0_50px_rgba(125,95,255,0.2)]"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-xl"
                            >
                                ✕
                            </button>

                            <h2 className="text-3xl font-bold text-white mb-2">Let's Talk</h2>
                            <p className="text-gray-400 mb-6 text-sm">Tell me about your next big idea.</p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                        placeholder="Captain Kirk"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                        placeholder="kirk@enterprise.sf"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Project Description</label>
                                    <textarea
                                        name="description"
                                        required
                                        rows="4"
                                        value={formState.description}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                        placeholder="A hyper-speed navigation system..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg transform transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Launch Message 🚀'}
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default ContactModal
