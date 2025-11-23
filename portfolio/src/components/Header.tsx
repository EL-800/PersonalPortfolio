import React, { useState } from 'react';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#" className="text-xl font-bold text-white tracking-tight">
                    MJ<span className="text-blue-500">.</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-gray-300 hover:text-white hover:text-blue-400 transition-colors text-sm font-medium"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="md:hidden bg-gray-900 border-t border-gray-800">
                    <div className="flex flex-col py-4">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
};
