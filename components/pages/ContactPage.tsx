"use client";

import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function ContactPage({ dict }: { dict: any }) {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const params = useParams();
    const lang = params.lang as string;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
            } else {
                throw new Error("Failed to send message");
            }
        } catch (error) {
            console.error(error);
            setStatus("idle");
            alert(dict.contact.form.error || "Error al enviar el mensaje.");
        }
    };

    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar dict={dict} />
            <PageTransition>
                <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
                    <section className="mb-20 text-center">
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                            <span className="text-spring-green">{dict.contact.title}</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            {dict.contact.subtitle}
                        </p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/10">
                                <h3 className="text-2xl font-bold mb-6">{dict.nav.contact}</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <Mail className="text-spring-green" />
                                        <a href="mailto:info@pixelfluxcreative.com" className="hover:text-spring-green transition-colors">
                                            info@pixelfluxcreative.com
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Phone className="text-spring-green" />
                                        <span>+56 9 3234 8612</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <MapPin className="text-spring-green" />
                                        <span>Agencia Digital (Global)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">{dict.contact.form.name}</label>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-spring-green transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">{dict.contact.form.email}</label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-spring-green transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">{dict.contact.form.message}</label>
                                <textarea
                                    name="message"
                                    rows={6}
                                    required
                                    className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-spring-green transition-colors"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status !== "idle"}
                                className="w-full bg-spring-green text-black font-bold py-4 rounded-lg hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "idle" ? dict.contact.form.submit : status === "submitting" ? dict.contact.form.sending : dict.contact.form.success}
                            </button>
                        </form>
                    </div>
                </div>
                <Footer dict={dict} />
            </PageTransition>
        </main>
    );
}
