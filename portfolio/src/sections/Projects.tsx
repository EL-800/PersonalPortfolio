import React from 'react';
import { resumeData } from '../data/resume';
import { Section } from '../components/Section';

export const Projects: React.FC = () => {
    const { projects } = resumeData;

    return (
        <Section id="projects" title="Projects & Contests">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col">
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                            <p className="text-xs text-blue-400 font-mono mb-4">{project.date}</p>

                            <div className="space-y-3 flex-1">
                                {project.description.map((desc, idx) => (
                                    <p key={idx} className="text-gray-400 text-sm leading-relaxed">
                                        {desc}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Optional: Add links or tags here if available in future */}
                        <div className="px-6 py-4 bg-gray-800/50 border-t border-gray-800">
                            <span className="text-xs text-gray-500 font-mono">View Details →</span>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
