import React from 'react';
import { resumeData } from '../data/resume';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} {resumeData.profile.name}. All rights reserved.
                </div>

                <div className="flex space-x-6">
                    <a
                        href={`mailto:${resumeData.profile.email}`}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                        aria-label="Email"
                    >
                        Email
                    </a>
                    {/* Add other social links if available in the future */}
                </div>
            </div>
        </footer>
    );
};
