'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, Linkedin, Instagram, Send, MessageSquare, ExternalLink, AtSign } from 'lucide-react'
import './contact.css'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null)

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      const contactElements = document.querySelectorAll('.animate-on-scroll')
      contactElements.forEach(element => {
        const rect = element.getBoundingClientRect()
        if (rect.top < window.innerHeight - 100) {
          element.classList.add('visible')
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend or email service
    console.log('Form submitted:', formData)
    
    // Simulate form submission success
    setFormStatus('success')
    setTimeout(() => {
      setFormStatus(null)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      id: 1,
      type: 'Email',
      value: 'gabaniyash846@gmail.com',
      icon: <Mail className="contact-icon" />,
      link: 'mailto:gabaniyash846@gmail.com'
    },
    {
      id: 2,
      type: 'Phone',
      value: '+91 7046996816',
      icon: <Phone className="contact-icon" />,
      link: 'tel:+917046996816'
    },
    {
      id: 3,
      type: 'LinkedIn',
      value: 'Yash Gabani',
      icon: <Linkedin className="contact-icon" />,
      link: 'https://www.linkedin.com/in/yash-gabani-527886258/'
    },
    {
      id: 4,
      type: 'Instagram',
      value: '@yash845_',
      icon: <Instagram className="contact-icon" />,
      link: 'https://www.instagram.com/yash845_/'
    },
    {
      id: 5,
      type: 'Medium',
      value: '@gabaniyash846',
      icon: <AtSign className="contact-icon" />,
      link: 'https://medium.com/@gabaniyash846'
    }
  ]

  return (
    <section className={`contact-section ${isVisible ? 'visible' : ''}`}>
      <div className="contact-header animate-on-scroll">
        <div className="contact-subtitle">
          <MessageSquare className="subtitle-icon" />
          <p>Let's connect and create something amazing together</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-info-container animate-on-scroll">
          <h3 className="contact-info-title">Contact Information</h3>
          <p className="contact-info-subtitle">Feel free to reach out through any of these channels:</p>
          
          <div className="contact-info-list">
            {contactInfo.map((info) => (
              <a 
                key={info.id} 
                href={info.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-info-item"
              >
                <div className="contact-info-icon-container">
                  {info.icon}
                </div>
                <div className="contact-info-content">
                  <h4 className="contact-info-type">{info.type}</h4>
                  <p className="contact-info-value">{info.value}</p>
                </div>
                <ExternalLink className="contact-external-icon" />
              </a>
            ))}
          </div>
          
          <div className="contact-decoration-1"></div>
          <div className="contact-decoration-2"></div>
        </div>

        <div className="contact-form-container animate-on-scroll">
          <h3 className="contact-form-title">Send Me a Message</h3>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                placeholder="Your Name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                placeholder="email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
                placeholder="Project Inquiry"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required 
                placeholder="Hello, I'd like to discuss a potential project..."
                rows={5}
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              <Send className="submit-icon" />
              Send Message
            </button>
            
            {formStatus === 'success' && (
              <div className="form-status success">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="form-status error">
                There was an error sending your message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
