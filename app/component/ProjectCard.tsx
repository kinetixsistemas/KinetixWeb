
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/app/constants/projects';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (

        <Link
            href={project.link}
            className="group card overflow-hidden flex flex-col h-full block hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
        >
            {/* Image */}

            <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>

                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category badge */}
                <div className="absolute top-4 left-4" >
                    <span
                        className="text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                        style={{ background: 'linear-gradient(135deg, var(--primary), #0066cc)' }}
                    >
                        {project.category}
                    </span>
                </div>
                {/* Arrow appears on hover */}
                <div className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                    <span className="material-symbols-outlined text-white text-[20px]" > arrow_forward </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-7 flex-grow flex flex-col" >
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-3" >
                    {project.title}
                </h3>
                < p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5 flex-1" >
                    {project.description}
                </p>
                {project.tags && (
                    <div className="flex flex-wrap gap-2 mt-auto" >
                        {project.tags.map((tag) => (
                            <span key={tag} className="tech-chip" > {tag} </span>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    );
}