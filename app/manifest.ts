import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Pixel Flux Creative",
        short_name: "Pixel Flux",
        description: "Orquestación Digital: Donde el Código se Convierte en Inteligencia.",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#05dc80",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
            {
                src: "/logo_pxf_n2.png",
                sizes: "192x192 512x512",
                type: "image/png",
            },
        ],
    };
}
