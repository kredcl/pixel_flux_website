import { getDictionary } from "@/app/get-dictionary";
import AutomationPage from "@/components/pages/AutomationPage";
import { Locale } from "@/app/i18n-config";

export default async function Page({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);
    return <AutomationPage dict={dictionary} />;
}
