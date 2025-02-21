"use client";

import { useParams, useRouter } from "next/navigation";
import { experienceData } from "../../constant/ExperienceData";
import Image from "next/image";
import { ArrowLeft } from "lucide-react"; // Import ikon panah kiri

export default function TitlePage() {
    const { title } = useParams();
    const router = useRouter();
    const allData = [...experienceData.academic, ...experienceData.internship];

    // Cari data yang sesuai dengan title yang diklik
    const selectedItem = allData.find(
        (item) => item.title.toLowerCase().replace(/\s+/g, "-") === title
    );

    if (!selectedItem) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-white">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
                >
                    <ArrowLeft size={18} /> Kembali
                </button>
                <h1 className="text-3xl font-bold mt-4">Data not found</h1>
                <p>The experience you're looking for does not exist.</p>
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
                        src={selectedItem.photo}
                        alt={selectedItem.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                    />
                </div>
                <div className="text-center md:text-left md:w-1/2">
                    <h1 className="text-3xl font-bold">{selectedItem.title}</h1>
                    <p className="text-lg text-gray-400 mt-2">
                        {selectedItem.institution || selectedItem.company} - {selectedItem.year}
                    </p>
                    <p className="text-lg text-gray-400 mt-2 text-justify">
                        {selectedItem.desc}
                    </p>
                </div>
            </div>

            {/* Deskripsi di bawah foto */}
            <p className="mt-8 text-justify text-lg">{selectedItem.description}</p>

            {/* Menampilkan links */}
            {selectedItem.links && selectedItem.links.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-4">
                    {selectedItem.links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block relative w-80 h-36 md:w-96 md:h-48 rounded-md overflow-hidden border border-gray-600 hover:opacity-80 transition"
                        >
                            <Image
                                src={link.photos}
                                alt={`Link ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                            />
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
