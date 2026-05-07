'use client';

import React, { useState, useEffect } from 'react';
import Button from '../../_components/Button';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isFormValid, setIsFormValid] = useState(false);

    // Basic sanitization to prevent script tags
    const sanitizeInput = (value: string) => {
        return value.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gim, "")
            .replace(/<[^>]*>?/gm, ""); // Also remove other HTML tags for safety
    };

    const validate = (name: string, value: string) => {
        let error = '';

        switch (name) {
            case 'fullName':
                if (!value.trim()) error = 'Name is required';
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value.trim()) {
                    error = 'Email is required';
                } else if (!emailRegex.test(value)) {
                    error = 'Invalid email format';
                }
                break;
            case 'subject':
                if (!value.trim()) error = 'Subject is required';
                break;
            case 'message':
                if (!value.trim()) error = 'Message is required';
                break;
            default:
                break;
        }

        return error;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const sanitizedValue = sanitizeInput(value);

        setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
        setErrors(prev => ({ ...prev, [name]: validate(name, sanitizedValue) }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
    };

    useEffect(() => {
        const hasErrors = Object.values(errors).some(err => err !== '');
        const allFilled = Object.values(formData).every(val => val.trim() !== '');
        setIsFormValid(allFilled && !hasErrors);
    }, [formData, errors]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isFormValid) {
            // Add your submission logic here
            alert('Thank you! Your message has been sent.');
            setFormData({ fullName: '', email: '', subject: '', message: '' });
        }
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#002B49] mb-4">Leave us your info</h2>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Full Name*"
                            className={`w-full bg-white border-none p-4 rounded-lg focus:ring-2 outline-none shadow-sm text-gray-700 ${errors.fullName ? 'focus:ring-red-500' : 'focus:ring-[#D32F2F]'}`}
                        />
                        {errors.fullName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.fullName}</p>}
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Email*"
                            className={`w-full bg-white border-none p-4 rounded-lg focus:ring-2 outline-none shadow-sm text-gray-700 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-[#D32F2F]'}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Subject*"
                            className={`w-full bg-white border-none p-4 rounded-lg focus:ring-2 outline-none shadow-sm text-gray-700 ${errors.subject ? 'focus:ring-red-500' : 'focus:ring-[#D32F2F]'}`}
                        />
                        {errors.subject && <p className="text-red-500 text-xs mt-1 ml-1">{errors.subject}</p>}
                    </div>
                    <div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Message*"
                            rows={6}
                            className={`w-full bg-white border-none p-4 rounded-lg focus:ring-2 outline-none shadow-sm text-gray-700 resize-none ${errors.message ? 'focus:ring-red-500' : 'focus:ring-[#D32F2F]'}`}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message}</p>}
                    </div>
                    <div className="text-center pt-4">
                        <Button
                            type="submit"
                            disabled={!isFormValid}
                            variant="secondary"
                            className="w-full md:w-auto py-4 px-12"
                        >
                            Get in touch
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}
