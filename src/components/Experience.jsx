import React, { useEffect, useRef } from 'react';
import { FiMapPin, FiBriefcase, FiHome } from 'react-icons/fi';
import {
    FaLinkedin,
    FaInstagram,
    FaGlobe,
    FaFacebook,
    FaYoutube,
    FaXTwitter
} from 'react-icons/fa6';
import Badge from './ui/Badge';

const PEEK = 50;
const NAV_H = 0;

/* 🔥 EXPERIENCE DATA */
const EXPERIENCE = [
    {
        role: 'Frontend Developer',
        company: 'Clavis Technologies',
        location: 'Noida, India',
        workType: 'Full-time',
        workLocation: 'Onsite',
        skills: ['Angular', 'TypeScript', 'SCSS', 'Admin Panels', 'API Integration'],
        duration: 'Aug 2021 – Apr 2025',
        desc: 'Developed and maintained enterprise-level applications and admin panels, focusing on scalability, performance, and seamless user experience.',
        points: [
            'Built and shipped 15+ client-facing web applications using React.js and WordPress, consistently meeting deadlines in an agile delivery environment.',
            'Converted Figma and Adobe XD mockups into pixel-perfect, fully responsive UIs, reducing design-todevelopment handoff revisions by ~40%.',
            'Optimised website performance across 5 client projects — achieved average page load time reduction of 30–40% through code splitting, lazy loading, and image optimisation',
            'Improved website load performance by up to 40% using optimization techniques',
            'Reduced UI bugs by 50% through cross-browser testing and QA.',
            'Delivered 30+ international client projects with high client satisfaction.'
        ],
        projects: ['zyratalk.com', 'sixsigmadentistry.com', 'skillinventory.clavis.digital', 'ellaxestates.com'],
        logo: '/logo-clavis.png',
        socials: {
            linkedin: 'https://www.linkedin.com/company/clavis-technologies/',
            instagram: 'https://www.instagram.com/clavis_technologies/',
            facebook: 'https://www.facebook.com/ClavisTech',
            twitter: 'https://x.com/Clavistechno',
            website: 'https://www.clavistechnologies.com/'
        }
    },
    {
        role: 'HTML DEVELOPER',
        company: 'SageNext Infotech LLC',
        location: 'Noida, India',
        workType: 'Full-time',
        workLocation: 'Onsite',
        skills: ['HTML5', ' CSS3', 'jQuery', 'REST APIs', 'third-party integrations'],
        duration: 'July 2021 – July 2022',
        desc: 'Developed semantic, tableless HTML/CSS layouts for multiple client projects, with a strong focus on accessibility, WCAG compliance, responsive design, and timely delivery.',
        points: [
        'Developed semantic and tableless HTML/CSS layouts for 10+ client projects simultaneously.',
        'Maintained high standards of accessibility and WCAG compliance across all projects.',
        'Created responsive, clean, and user-friendly interfaces based on client requirements.',
        'Delivered all assigned projects on schedule in a fast-paced agency environment.',
        'Supported a team managing 20+ active client accounts while maintaining consistent quality.'
        ],
        projects: ['Thesagenext', 'Zoylee'],
        logo: '/sagenext-logo.jpg',
        socials: {
            linkedin: 'https://www.linkedin.com/company/sagenext-infotech-llc/',
            instagram: 'https://www.instagram.com/sagenext_infotech/',
            facebook: 'https://www.facebook.com/sagenextinfo',
            twitter: 'https://x.com/sagenextinfo',
            youtube: 'https://www.youtube.com/user/sagenextinfo',
            website: 'https://www.thesagenext.com/'
        }
    },
    {
        role: 'Web & Graphic Designer',
        company: 'Business2Sell & Service',
        location: 'Noida, India',
        workType: 'Full-time',
        workLocation: 'Onsite',
        skills: [
  'WordPress',
  'HTML5',
  'CSS3',
  'Responsive Web Design',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'CorelDRAW',
  'Cross-Browser Compatibility',
  'Semantic HTML',
  'WCAG Accessibility',
],
        duration: 'June 2019 – July 2021',
        desc: 'Designed and developed end-to-end WordPress websites and brand identities for Australian clients, delivering high-quality UI/UX solutions, marketing assets, and websites from concept to deployment.',

points: [
    'Designed and developed complete website UIs for 30+ Australian clients across real estate, trade services, pest control, and legal industries.',
    'Managed end-to-end WordPress projects including requirement gathering, UI design, content migration, testing, and live deployment with a 2–3 week average delivery timeline.',
    'Created brand identities for 10+ businesses, including logos, colour palettes, and digital/print marketing materials using Adobe Creative Suite.',
    'Designed print-ready creative assets such as banners, brochures, and social media graphics, ensuring zero rework with external print vendors.',
    'Collaborated remotely with Australian clients across multiple time zones, managing feedback, revisions, and project delivery within agreed scope and timelines.'
],
        projects: ['bondcleaninginbrisbane.com.au', 'betterbondcleaning.com.au', 'betterpestcontrol.com.au', ],
        logo: '/business2sell_logo.jpg',
        socials: {
            linkedin: 'https://www.linkedin.com/company/business2sell-group/',
            instagram: 'https://www.instagram.com/business2sell.group/',
            facebook: 'https://www.facebook.com/business2sell.group',
            twitter: 'twitter.com/GroupB2S',
            youtube: 'https://www.youtube.com/@Business2sellGroup',
            website: 'https://www.business2sell.group/'
        }
    },
    
];

export default function Experience() {
    const wrapRefs = useRef([]);
    const innerRefs = useRef([]);

    useEffect(() => {
        const setHeights = () => {
            wrapRefs.current.forEach((wrap, idx) => {
                const inner = innerRefs.current[idx];
                if (!wrap || !inner) return;
                wrap.style.height = `${inner.offsetHeight + 20}px`;
            });
        };

        requestAnimationFrame(setHeights);
        window.addEventListener('resize', setHeights);
        return () => window.removeEventListener('resize', setHeights);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            wrapRefs.current.forEach((wrap, idx) => {
                const inner = innerRefs.current[idx];
                if (!wrap || !inner || idx === EXPERIENCE.length - 1) return;

                const stickyTop = NAV_H + idx * PEEK;
                const rect = wrap.getBoundingClientRect();
                const buried = stickyTop - rect.top;

                if (buried > 0) {
                    const t = Math.min(buried / (inner.offsetHeight * 0.4), 1);
                    inner.style.opacity = `${1 - t * 0.6}`;
                    inner.style.transform = `scale(${1 - t * 0.04})`;
                } else {
                    inner.style.opacity = '1';
                    inner.style.transform = 'scale(1)';
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="experience" className="text-white space-y-3">
            <div className="max-w-5xl mx-auto relative">
                {EXPERIENCE.map((exp, idx) => (
                    <div
                        key={idx}
                        ref={(el) => (wrapRefs.current[idx] = el)}
                        style={{
                            position: 'sticky',
                            top: `${NAV_H + idx * PEEK}px`,
                            zIndex: idx + 1,
                        }}
                    >
                        <div
                            ref={(el) => (innerRefs.current[idx] = el)}
                            className="ui-card overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-6 py-4 border-b border-white/10">

                                {/* LEFT */}
                                <div className="flex flex-col gap-2 min-w-0">
                                    <h3 className="text-base md:text-lg font-semibold text-white">
                                        {exp.role}
                                    </h3>

                                    {/* BADGES */}
                                    <div className="flex flex-wrap gap-2 text-xs">
                                        <span className="flex items-center gap-1 px-3 py-1 rounded-md bg-white/5 text-slate-300">
                                            <FiBriefcase className="text-[13px]" />
                                            {exp.workType}
                                        </span>

                                        <span
                                            className={`flex items-center gap-1 px-3 py-1 rounded-md
          ${exp.workLocation === 'Remote' && 'bg-green-500/10 text-green-400'}
          ${exp.workLocation === 'Onsite' && 'bg-blue-500/10 text-blue-400'}
          ${exp.workLocation === 'Hybrid' && 'bg-purple-500/10 text-purple-400'}
        `}
                                        >
                                            <FiHome className="text-[13px]" />
                                            {exp.workLocation}
                                        </span>
                                    </div>
                                </div>

                                {/* RIGHT */}
                                <div className="flex flex-row md:flex-col md:items-end items-center justify-between gap-2 w-full md:w-auto">
                                    <span className="text-xs text-slate-400 whitespace-nowrap">
                                        {exp.duration}
                                    </span>

                                    <span className="flex items-center gap-1 px-3 py-1 rounded-md bg-white/5 text-slate-300 text-xs whitespace-nowrap">
                                        <FiMapPin className="text-[13px]" />
                                        {exp.location}
                                    </span>
                                </div>

                            </div>

                            {/* META INFO */}
                            <div className="px-6 pt-4">
                                <div className="flex items-start gap-4">
                                    <img
                                        src={exp.logo}
                                        alt={exp.company}
                                        className="w-14 h-14 rounded-full object-contain"
                                    />
                                    <div className="flex flex-col w-full">
                                        <div className="flex items-center justify-between w-full">
                                            <h3 className="text-sm md:text-base font-semibold text-white">
                                                {exp.company}
                                            </h3>
                                            <div className="flex items-center gap-3 ml-4 flex-wrap">

                                                {exp.socials?.linkedin && (
                                                    <a href={exp.socials.linkedin} target="_blank" rel="noreferrer"
                                                        className="text-slate-400 hover:text-blue-400 transition">
                                                        <FaLinkedin size={20} />
                                                    </a>
                                                )}

                                                {exp.socials?.instagram && (
                                                    <a href={exp.socials.instagram} target="_blank" rel="noreferrer"
                                                        className="text-slate-400 hover:text-pink-400 transition">
                                                        <FaInstagram size={20} />
                                                    </a>
                                                )}

                                                {exp.socials?.facebook && (
                                                    <a href={exp.socials.facebook} target="_blank" rel="noreferrer"
                                                        className="text-slate-400 hover:text-blue-500 transition">
                                                        <FaFacebook size={20} />
                                                    </a>
                                                )}

                                                {exp.socials?.youtube && (
                                                    <a href={exp.socials.youtube} target="_blank" rel="noreferrer"
                                                        className="text-slate-400 hover:text-red-500 transition">
                                                        <FaYoutube size={20} />
                                                    </a>
                                                )}

                                                {exp.socials?.twitter && (
                                                    <a href={exp.socials.twitter} target="_blank" rel="noreferrer"
                                                        className="text-slate-400 hover:text-white transition">
                                                        <FaXTwitter size={20} />
                                                    </a>
                                                )}

                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between w-full text-xs text-slate-400 mt-1">
                                            <span className="flex items-center gap-1">
                                                <FiMapPin className="text-[12px]" />
                                                {exp.location}
                                            </span>
                                            {exp.socials?.website && (
                                                <a
                                                    href={exp.socials.website}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="flex items-center gap-1 hover:text-green-400 transition hover:scale-105"
                                                >
                                                    {/* <FaGlobe className="text-[12px]" /> */}
                                                    {/* {exp.socials.website.replace(/^https?:\/\//, '')} */}
                                                    Visit Website
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* BODY */}
                            <div className="px-6 py-6">
                                <p className="text-sm text-slate-300 mb-4">{exp.desc}</p>
                                <ul className="space-y-2 mb-4">
                                    {exp.points.map((p, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-slate-400">
                                            <span className="w-2 h-2 bg-yellow-400 rounded-full mt-1 flex-shrink-0" />
                                            {p}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {exp.skills.map((skill, i) => (
                                        <Badge key={i} variant="accent" size="sm">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {exp.projects.map((link, i) => {
                                        const url = link.startsWith('http') ? link : `https://${link}`;
                                        return (
                                            <a
                                                key={i}
                                                href={url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-xs px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition"
                                            >
                                                {link}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
