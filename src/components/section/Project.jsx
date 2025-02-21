"use client";

import { useRouter } from "next/navigation";
import Card from "../atoms/Card";
import { projectData } from "../../constant/ProjectData";

export default function Project() {
    const router = useRouter();

    return (
        <section id="project" className="text-white text-center p-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Latest Project</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center mt-20">
                {projectData.projectData.map((project, index) => (
                    <div
                        key={index}
                        onClick={() =>
                            router.push(`/project/${project.title.toLowerCase().replace(/\s+/g, "-")}`)
                        }
                        className="cursor-pointer"
                    >
                        <Card
                            photo={project.photos}
                            title={project.title}
                            institution={project.techstack} // Menampilkan techstack
                            year="" // Kosong karena tidak digunakan
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
