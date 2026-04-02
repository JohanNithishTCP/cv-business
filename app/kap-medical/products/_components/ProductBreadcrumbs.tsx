
import React from 'react';
import Link from 'next/link';
import { ChevronsRight } from 'lucide-react';

interface BreadcrumbsProps {
    productName: string;
}

export default function ProductBreadcrumbs({ productName }: BreadcrumbsProps) {
    return (
        <nav className="flex py-6 text-xs font-medium text-gray-500 items-center gap-2">
            <Link href="/" className="hover:text-[#D32F2F] transition-colors">Home</Link>
            <ChevronsRight size={14} />
            <Link href="/products" className="hover:text-[#D32F2F] transition-colors">Products</Link>
            <ChevronsRight size={14} />
            <span className="text-[#D32F2F] truncate font-bold">{productName}</span>
        </nav>
    );
}

