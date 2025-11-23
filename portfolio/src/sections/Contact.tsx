import React from 'react';
import { resumeData } from '../data/resume';
import { Section } from '../components/Section';

export const Contact: React.FC = () => {
    const { email, phone } = resumeData.profile;

    return (
        <Section id="contact" title="Get In Touch">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center border border-gray-700 shadow-2xl">
                <h3 className="text-3xl font-bold text-white mb-4">Let's Work Together</h3>
                <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <a
                        href={`mailto:${email}`}
                        className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Say Hello
                    </a>

                    <div className="flex items-center gap-3 px-8 py-4 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 cursor-default">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {phone}
                    </div>
                </div>
            </div>
        </Section>
    );
};
