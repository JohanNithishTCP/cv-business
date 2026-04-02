import { Star } from 'lucide-react';
import Image from 'next/image';

interface Review {
    id: number;
    author: string;
    avatar: string;
    rating: number;
    date: string;
    text: string;
}

const reviews: Review[] = [
    {
        id: 1,
        author: "Alexander Rity",
        avatar: "https://i.pravatar.cc/150?u=alex",
        rating: 5,
        date: "4 months ago",
        text: "Lorem Ipsum is the standard placeholder text in publishing and web design, used to demonstrate graphic elements like fonts and layouts without using meaningful content. Derived from Cicero's 45 BC text, this scrambled, nonsensical Latin mimics English, allowing designers to focus on visual, rather than textual, elements."
    },
    {
        id: 2,
        author: "Susan Doe",
        avatar: "https://i.pravatar.cc/150?u=susan",
        rating: 5,
        date: "4 months ago",
        text: "Lorem Ipsum is the standard placeholder text in publishing and web design, used to demonstrate graphic elements like fonts and layouts without using meaningful content. Derived from Cicero's 45 BC text, this scrambled, nonsensical Latin mimics English, allowing designers to focus on visual, rather than textual, elements."
    }
];

const ProductReviews = () => {
    return (
        <section className="py-16 bg-[#FDFEFA] rounded-3xl border border-gray-100 shadow-sm mt-12 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-10">Reviews</h2>

                {/* Rating Summary */}
                <div className="flex flex-col md:flex-row gap-12 mb-16 pb-16 border-b border-gray-200">
                    <div className="text-center md:text-left">
                        <div className="text-6xl font-bold text-gray-800 mb-2">4.8</div>
                        <div className="flex gap-1 justify-center md:justify-start mb-2">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className={`w-6 h-6 ${s <= 5 ? 'fill-[#86B817] text-[#86B817]' : 'text-[#86B817] opacity-60'}`} />
                            ))}
                        </div>
                        <p className="text-xs text-gray-400 font-medium">35K ratings</p>
                    </div>

                    <div className="flex-1 space-y-3 max-w-xl">
                        {[5, 4, 3, 2, 1].map((rating) => (
                            <div key={rating} className="flex items-center gap-4 group">
                                <span className="text-sm font-bold text-gray-500 w-8">{rating}.0</span>
                                <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[#86B817] rounded-full transition-all duration-1000"
                                        style={{ width: `${rating === 5 ? 90 : rating === 4 ? 10 : rating === 3 ? 0 : rating === 2 ? 0 : 0}%` }}
                                    ></div>
                                </div>
                                {/* <span className="text-xs text-gray-400 w-16">{rating === 5 ? '28k' : rating === 4 ? '4k' : rating === 3 ? '1k' : rating === 2 ? '200' : '0'} reviews</span> */}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-12">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 group hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                                        <img src={`${review.avatar}`} alt={review.author} className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">{review.author}</h4>
                                        <p className="text-xs text-gray-400">{review.date}</p>
                                    </div>
                                </div>
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < review.rating ? 'fill-[#86B817] text-[#86B817]' : 'text-gray-200'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {review.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductReviews;
