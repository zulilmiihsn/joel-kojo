import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: "700",
});

export default function Title() {
  return (
    <h1
      className={`absolute top-8 inset-x-0 text-center text-white text-2xl tracking-[.50em] ${garamond.className}`}
      role="banner"
      aria-label="The GOAT - Joel Kojo character title"
    >
      THE GOAT
    </h1>
  );
}
