import { Landing } from "@/components/Landing";
import { getDictionary } from "@/lib/i18n";

export default function Page() {
  return <Landing t={getDictionary("en")} locale="en" />;
}
