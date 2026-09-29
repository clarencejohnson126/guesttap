import "../globals.css";
import { Shell } from "@/components/Shell";
import { buildMetadata } from "@/lib/metadata";

export { viewport } from "@/lib/metadata";
export const metadata = buildMetadata("de");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Shell locale="de">{children}</Shell>;
}
