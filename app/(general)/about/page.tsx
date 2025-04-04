import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO title',
    description: 'SEO description',
    keywords: ['About Page', 'Harold', 'info', 'nextjs'],
};

export default function AboutPage(){
    return (
        <span className="text-7xl">About Page</span>
    )
}