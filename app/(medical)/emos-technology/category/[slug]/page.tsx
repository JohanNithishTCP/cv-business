import CategoryIntro from '../../_components/CategoryIntro';
import CategoryProducts from '../../_components/CategoryProducts';
import CategoryFeatures from '../../_components/CategoryFeatures';
import Navbar from '../../_components/Navbar';
import Footer from '../../_components/Footer';
import { notFound } from 'next/navigation';

import categoriesData from '../../data/categories.json';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    const mockData = categoriesData[slug as keyof typeof categoriesData];

    if (!mockData) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar isHome={false} />

            <div className="pt-10">
                <CategoryIntro
                    title={mockData.title}
                    subTitle={mockData.introTitle}
                    description={mockData.introText}
                    image={mockData.introImage}
                />

                <CategoryProducts
                    title={mockData.productsTitle}
                    subtitle={mockData.productsSubtitle}
                    products={mockData.products}
                />

                <CategoryFeatures
                    carousel1Title={mockData.carousel1Title}
                    carousel1Features={mockData.carousel1Features}
                    carousel2Title={mockData.carousel2Title}
                    carousel2Features={mockData.carousel2Features}
                />
            </div>

            <Footer />
        </main>
    );
}
