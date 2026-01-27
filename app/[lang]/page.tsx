import { getDictionary } from "@/app/get-dictionary";
import HomePage from "@/components/pages/HomePage";
import { Locale } from "@/app/i18n-config";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang = (lang as Locale) || "es";
  const dictionary = await getDictionary(validLang);
  return <HomePage dict={dictionary} />;
}
