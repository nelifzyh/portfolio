"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { experienceData } from "../../constant/ExperienceData";
import Button from "../atoms/Button";
import Card from "../atoms/Card";

export default function Experience() {
    const [selectedTab, setSelectedTab] = useState("academic");
    const router = useRouter(); // Gunakan useRouter

    return (
        <section id="experience" className="text-white text-center p-10">
            <h1 className="text-3xl md:text-4xl font-bold">Experience</h1>

            {/* Tombol Tab */}
            <div className="mt-8 flex justify-center space-x-8">
                <Button
                    text="Academic"
                    isActive={selectedTab === "academic"}
                    onClick={() => setSelectedTab("academic")}
                />
                <Button
                    text="Internship"
                    isActive={selectedTab === "internship"}
                    onClick={() => setSelectedTab("internship")}
                />
            </div>

            {/* Konten Card */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-14">
                {experienceData[selectedTab].map((item, index) => {
                    const slug = item.title.toLowerCase().replace(/\s+/g, "-"); // Convert title ke slug
                    return (
                        <Card
                            key={index}
                            photo={item.photo}
                            title={item.title}
                            institution={item.institution || item.company}
                            year={item.year}
                            description={item.description}
                            onClick={() => router.push(`/${slug}`)} // Navigasi ke halaman title
                        />
                    );
                })}
            </div>
        </section>
    );
}
