import { getDictionary } from "@/app/get-dictionary";
import DevelopmentPage from "@/components/pages/DevelopmentPage";
import { Locale } from "@/app/i18n-config";

export default async function Page({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang as Locale);
    return <DevelopmentPage dict={dictionary} />;
}
