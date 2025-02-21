import Image from "next/image";

export default function Card({ photo, title, institution, year, onClick }) {
    return (
        <div className="w-96 h-auto bg-gray-800 p-6 rounded-lg shadow-xl flex flex-col items-center 
                        relative overflow-hidden group transition-transform duration-300 hover:scale-105"
            onClick={onClick}
        >
            {/* Efek mengkilap */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                            opacity-0 group-hover:opacity-100 translate-x-[-150%] group-hover:translate-x-[150%] 
                            transition-transform duration-1000 ease-in-out" />

            <div className="w-full h-52 relative mb-4">
                <Image
                    src={photo}
                    alt={title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-sm"
                />
            </div>
            <h3
                className="text-lg font-bold text-white text-center truncate w-5/6"
                title={title}
            >
                {title}
            </h3>
            <p className="text-sm text-gray-400 text-center">
                {institution} {year}
            </p>
        </div>
    );
}
