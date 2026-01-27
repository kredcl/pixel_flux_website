import { getDictionary } from "@/app/get-dictionary";
import HomePage from "@/components/pages/HomePage";
import { Locale } from "@/app/i18n-config";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return <HomePage dict={dictionary} />;
}
