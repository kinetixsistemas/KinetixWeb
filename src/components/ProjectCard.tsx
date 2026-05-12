'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/src/constants/projects';
import { Maximize2, X } from 'lucide-react'; // O usa tus iconos de Material

export default function ProjectCard({ project }: { project: Project }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="group card overflow-hidden flex flex-col h-full bg-white rounded-3xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 border border-slate-100">

                {/* Contenedor de Imagen */}
                <div className="relative overflow-hidden aspect-video">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay al hacer hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                        {/* BOTÓN PARA EL MODAL */}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors"
                            title="Ver imagen completa"
                        >
                            <Maximize2 size={20} />
                        </button>

                        {/* BOTÓN PARA IR AL LINK */}
                        <Link
                            href={project.link}
                            target="_blank"
                            className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-colors"
                        >
                            <span className="material-symbols-outlined !text-[20px]">link</span>
                        </Link>
                    </div>

                    {/* Badge de Categoría */}
                    <div className="absolute top-4 left-4">
                        <span className="text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-blue-600">
                            {project.category}
                        </span>
                    </div>
                </div>

                {/* Contenido */}
                <div className="p-7 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">
                        {project.description}
                    </p>

                    {project.tags && (
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-md uppercase tracking-tight">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* MODAL (Fuera del flujo del link) */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 animate-in fade-in duration-300"
                    onClick={() => setIsModalOpen(false)}
                >
                    <button className="absolute top-6 right-6 text-white hover:rotate-90 transition-transform">
                        <X size={40} />
                    </button>

                    <div className="relative w-full h-full max-w-6xl flex items-center justify-center">
                        <Image
                            src={project.image}
                            alt={project.title}
                            className="object-contain max-h-full rounded-lg"
                            style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                        />
                    </div>
                </div>
            )}
        </>
    );
}