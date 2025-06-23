/* eslint-disable @typescript-eslint/no-explicit-any */


import Main from "./pages/main";

export const revalidate = 3600;

export default async function Home() {
  let pageData = null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/getpage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pagename: "home" }),
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      console.error("Failed to fetch home page:", res.status);
      return <div>Failed to load</div>;
    }

    const result = await res.json();

    if (!result.success || !result.page?.data) {
      console.error("Home page response malformed:", result);
      return <div>Failed to load</div>;
    }

    pageData = result.page.data;
  } catch (error) {
    console.error("Error parsing home page data:", error);
    return <div>Failed to load</div>;
  }

  return <Main pageData={pageData} />;
}
