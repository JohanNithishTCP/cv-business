"use client";

const Newsletter = () => {
    return (
        <section className="bg-[#2D2D2D] py-16 text-white border-b border-white/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-xl md:text-2xl font-bold mb-8">Subscrbe for the daily updates</h2>
                <form className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 bg-white p-1 rounded-sm shadow-xl">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 bg-transparent px-6 py-3 text-gray-800 focus:outline-none text-sm font-medium"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#86B817] hover:bg-[#75A014] text-white font-bold py-3 px-10 transition-colors text-xs uppercase tracking-widest rounded-sm"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
