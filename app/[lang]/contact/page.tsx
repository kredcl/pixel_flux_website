import { getDictionary } from "@/app/get-dictionary";
import ContactPage from "@/components/pages/ContactPage";
import { Locale } from "@/app/i18n-config";

export default async function Page({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);
    return <ContactPage dict={dictionary} />;
}
