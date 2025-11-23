import React from 'react';
import { resumeData } from '../data/resume';
import { Section } from '../components/Section';

export const Skills: React.FC = () => {
    const { skills, trainings } = resumeData;

    return (
        <Section id="skills" title="Skills & Training">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Technical Skills */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold text-white">Technical Skills</h3>
                    <div className="space-y-6">
                        {skills.map((skillGroup, index) => (
                            <div key={index}>
                                <h4 className="text-lg font-medium text-blue-400 mb-3">{skillGroup.category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((item, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-blue-500/50 hover:text-white transition-colors cursor-default"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trainings & Certifications */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold text-white">Trainings & Certifications</h3>
                    <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 h-full max-h-[500px] overflow-y-auto custom-scrollbar">
                        <ul className="space-y-4">
                            {trainings.map((training, index) => (
                                <li key={index} className="flex items-start text-gray-400 text-sm">
                                    <span className="mr-3 text-blue-500 mt-1">✓</span>
                                    {training}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
};
