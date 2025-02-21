"use client";

import { useParams, useRouter } from "next/navigation";
import { projectData } from "../../../constant/ProjectData";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetailPage() {
    const { title } = useParams();
    const router = useRouter();

    // Cari project berdasarkan title yang diklik
    const selectedProject = projectData.projectData.find(
        (project) => project.title.toLowerCase().replace(/\s+/g, "-") === title
    );

    if (!selectedProject) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-white">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
                >
                    <ArrowLeft size={18} /> Kembali
                </button>
                <h1 className="text-3xl font-bold mt-4">Data not found</h1>
                <p>The project you're looking for does not exist.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col text-white px-20 py-10 mt-20">
            {/* Tombol Kembali */}
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 px-6 py-3 text-white rounded-full hover:bg-gray-900 transition w-fit"
            >
                <ArrowLeft size={18} /> Kembali
            </button>

            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10 mt-5">
                <div className="relative w-full md:w-1/2 h-60 md:h-96">
                    <Image
                        src={selectedProject.photos}
                        alt={selectedProject.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                    />
                </div>
                <div className="text-center md:text-left md:w-1/2">
                    <h1 className="text-3xl font-bold">{selectedProject.title}</h1>
                    <p className="text-lg text-gray-400 mt-2">{selectedProject.techstack}</p>
                    <p className="text-lg text-gray-400 mt-2 text-justify">
                        {selectedProject.description}
                    </p>
                </div>
            </div>

            {/* Menampilkan Link jika ada */}
            {selectedProject.links && (
                <div className="mt-8">
                    <a
                        href={selectedProject.links}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline"
                    >
                        Visit Project
                    </a>
                </div>
            )}
        </div>
    );
}
