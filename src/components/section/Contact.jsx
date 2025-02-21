import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="text-white p-10 mt-20">
            <h1 className="text-3xl md:text-4xl font-bold mb-10">Contact</h1>
            <p className="text-lg text-gray-300">
                I'm currently looking to join a cross-functional team that values improving people's lives
            </p>
            <p className="text-lg text-gray-300">
                through accessible design. Or have a project in mind? Let's connect.
            </p>

            {/* Email */}
            <div className="flex items-center gap-2 mt-5">
                <Mail size={20} />
                <a
                    href="mailto:nelifauziyah07@gmail.com"
                >
                    nelifauziyah07@gmail.com
                </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-6 mt-14">
                {/* WhatsApp */}
                <a
                    href="https://wa.me/089652792095"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-500 transition"
                >
                    <MessageCircle size={24} />
                </a>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/nelifauziyah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition"
                >
                    <Linkedin size={24} />
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/nelifzyh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition"
                >
                    <Github size={24} />
                </a>
            </div>
        </section>
    );
}
