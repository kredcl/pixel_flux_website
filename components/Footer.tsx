import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Instagram } from "lucide-react";

export default function Footer({ dict }: { dict: any }) {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-display font-bold text-white mb-2">
                            {dict && dict.common ? dict.common.pixel_flux : "PIXEL FLUX"}
                        </h3>
                        <p className="text-gray-400 text-sm">
                            {dict && dict.footer ? dict.footer.tagline : "Forjando el futuro de las experiencias digitales."}
                        </p>
                    </div>

                    <div className="flex gap-6">
                        {[Github, Twitter, Instagram, Linkedin, Mail].map((Icon, i) => (
                            <Link
                                key={i}
                                href="#"
                                className="text-gray-400 hover:text-spring-green hover:scale-110 transition-all duration-300"
                            >
                                <Icon size={24} />
                            </Link>
                        ))}
                    </div>

                    <div className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} {dict && dict.footer ? dict.footer.rights : "Pixel Flux Creative."}
                    </div>
                </div>
            </div>
        </footer>
    );
}
