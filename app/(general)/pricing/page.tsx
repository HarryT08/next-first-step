import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing title',
    description: 'Pricing description',
    keywords: ['Pricing Page', 'Harold', 'info', 'nextjs'],
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}