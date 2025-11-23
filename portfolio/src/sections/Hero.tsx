import React from 'react';
import { resumeData } from '../data/resume';
import { Section } from '../components/Section';

export const Hero: React.FC = () => {
    const { name, title, summary } = resumeData.profile;

    return (
        <Section id="hero" className="min-h-[80vh] flex flex-col justify-center pt-20">
            <div className="space-y-6 max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{name}</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
                    {title}
                </h2>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
                    {summary}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
                    >
                        Contact Me
                    </a>
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold rounded-lg transition-all border border-gray-700 hover:border-gray-600"
                    >
                        View Projects
                    </a>
                </div>
            </div>
        </Section>
    );
};
