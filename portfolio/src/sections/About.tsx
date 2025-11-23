import React from 'react';
import { resumeData } from '../data/resume';
import { Section } from '../components/Section';

export const About: React.FC = () => {
    const { education } = resumeData;

    return (
        <Section id="about" title="About & Education">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-white">Education</h3>
                    {education.map((edu, index) => (
                        <div key={index} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                            <h4 className="text-xl font-bold text-blue-400">{edu.degree}</h4>
                            <p className="text-lg text-gray-200 mt-1">{edu.school}</p>
                            <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                            <ul className="mt-4 space-y-2">
                                {edu.details.map((detail, idx) => (
                                    <li key={idx} className="text-gray-400 flex items-start">
                                        <span className="mr-2 text-blue-500">•</span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-white">Background</h3>
                    <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 text-gray-300 leading-relaxed">
                        <p>
                            I am a passionate Computer Systems Engineering student at ESCOM, IPN, with a strong foundation in competitive programming and software development.
                            My journey involves not just learning but also teaching others, having volunteered to train students for the Mexican Olympiad in Informatics.
                        </p>
                        <p className="mt-4">
                            I enjoy solving complex problems and building efficient, user-friendly web applications. My experience ranges from full-stack development with .NET and React to exploring AI and robotics.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};
