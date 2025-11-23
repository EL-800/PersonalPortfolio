import React from 'react';

interface SectionProps {
    id: string;
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
    return (
        <section id={id} className={`py-16 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
            {title && (
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-100 border-b border-gray-700 pb-4">
                    {title}
                </h2>
            )}
            {children}
        </section>
    );
};
