import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "إنسبشن — استراتيجية وتسويق إبداعي في الرياض",
  description:
    "وكالة تسويق إبداعية في الرياض، المملكة العربية السعودية — نبني علامات تجارية بثقل الإرث وسرعة الحاضر.",
};

export default function ArLayout({ children }: { children: React.ReactNode }) {
  return <div className="ar-locale">{children}</div>;
}
