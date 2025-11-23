import React from 'react';
import { resumeData } from '../data/resume';
import { Section } from '../components/Section';

export const Experience: React.FC = () => {
    const { experience } = resumeData;

    return (
        <Section id="experience" title="Experience">
            <div className="space-y-12">
                {experience.map((job, index) => (
                    <div key={index} className="relative pl-8 md:pl-0">
                        {/* Timeline line for desktop */}
                        <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-800 transform -translate-x-1/2"></div>

                        <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                            {/* Date & Company (Side) */}
                            <div className="md:w-[45%] mb-4 md:mb-0">
                                <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                                    <span className="text-blue-400 font-bold text-lg">{job.company}</span>
                                    <span className="text-gray-500 text-sm font-mono">{job.date}</span>
                                </div>
                            </div>

                            {/* Center Dot */}
                            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 transform -translate-x-[5px] md:-translate-x-1/2 mt-1.5 z-10"></div>

                            {/* Content (Main) */}
                            <div className="md:w-[45%] bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-2">{job.role}</h3>
                                <ul className="space-y-3">
                                    {job.description.map((desc, idx) => (
                                        <li key={idx} className="text-gray-400 text-sm leading-relaxed flex items-start">
                                            <span className="mr-2 text-blue-500/50 mt-1">•</span>
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
