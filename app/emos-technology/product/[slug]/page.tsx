import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../_components/Navbar';
import Footer from '../../_components/Footer';
import ProductGallery from '../../_components/ProductGallery';
import ProductInfo from '../../_components/ProductInfo';
import ProductReviews from '../../_components/ProductReviews';
import ProductCatalog from '../../_components/ProductCatalog';
import Newsletter from '../../_components/Newsletter';
import productsData from '../../data/products.json';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    const product = (productsData as Record<string, any>)[slug];

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar isHome={false} />

            <div className="pt-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs Placeholder */}
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 mb-8 font-bold">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/category/human" className="hover:text-primary transition-colors">Products</Link>
                        <span>/</span>
                        <span className="text-gray-800">{product.title}</span>
                    </div>

                    {/* Main Product Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24 items-start">
                        <div data-aos="fade-right">
                            <ProductGallery images={product.images} videos={product.videos} />
                        </div>
                        <div data-aos="fade-left">
                            <ProductInfo
                                title={product.title}
                                description={product.description}
                                keyFeatures={product.keyFeatures}
                            />
                        </div>
                    </div>
                </div>

                {/* Catalog Section */}
                <ProductCatalog catalogIds={product.catalogIds} />

                {/* Reviews Section and more */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div data-aos="fade-up">
                        <ProductReviews />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
