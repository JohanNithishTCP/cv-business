import React from 'react';

export default function BookingForm() {
    return (
        <div className="site-container lg:max-w-6xl! px-4 lg:px-0">
            <div
                className="text-center mb-8"
                data-aos="fade-up"
            >
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Schedule Your Gynecology Appointment Today <br /> for Comprehensive Care and Support</h2>
            </div>

            <div
                className="relative shadow-lg"
                data-aos="zoom-in"
                data-aos-delay="200"
            >
                {/* Tab */}
                <div className="bg-brand-green/90 inline-block px-6 py-2.5 w-full rounded-t-lg font-bold text-gray-800 text-[16px] relative z-10 border border-brand-green-dark translate-y-px">
                    Book Appointment
                </div>

                {/* Form Background Box */}
                <div className="bg-brand-green/80 rounded-b-xl rounded-tr-none  border border-brand-green-dark p-6 md:p-8 lg:p-10 relative overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-6 relative z-10 mb-8">
                        {[
                            "Select Location", "New Patient", "Visit Reason",
                            "Select your Doctor", "dd-mm-yy", "Personalize your booking"
                        ].map((label, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded h-13 px-4 flex justify-between items-center cursor-pointer hover:shadow-sm transition-shadow duration-300 border border-gray-100 group"
                                data-aos="fade-up"
                                data-aos-delay={300 + (idx * 50)}
                            >
                                <span className="text-gray-500 text-[14px] font-medium group-hover:text-gray-700 transition-colors">{label}</span>
                                {label === "dd-mm-yy" ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:translate-y-0.5 transition-transform duration-300"><path d="m6 9 6 6 6-6" /></svg>
                                )}
                            </div>
                        ))}
                    </div>

                    <div
                        className="flex justify-center relative z-10 w-full"
                        data-aos="fade-up"
                        data-aos-delay="650"
                    >
                        <button className="bg-primary hover:bg-primary-dark text-white px-10 py-2.5 rounded-md font-bold shadow hover:-translate-y-0.5 transition-all duration-300 text-[16px] tracking-wide relative top-2">
                            Book Now!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
