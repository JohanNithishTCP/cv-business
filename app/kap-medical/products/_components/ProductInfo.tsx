import Button from '../../_components/Button';

interface ProductInfoProps {
    name: string;
    shortDescription: string;
    features: string[];
}

export default function ProductInfo({ name, shortDescription, features }: ProductInfoProps) {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl md:text-3xl! font-bold text-[#002B49]! leading-tight">
                {name}
            </h1>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {shortDescription}
            </p>

            <ul className="space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm md:text-base text-[#002B49] font-semibold">
                        <span className="text-[#D32F2F] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#D32F2F] flex-shrink-0" />
                        {feature}
                    </li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-4 mt-4">
                <Button href="/contact" variant="danger">
                    Request a Demo
                </Button>
                <Button href="/contact" variant="outline">
                    Brochure
                </Button>
            </div>
        </div>
    );
}
