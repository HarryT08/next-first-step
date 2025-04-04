import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Contact description',
    keywords: ['Contact Page', 'Harold', 'info', 'nextjs'],
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}