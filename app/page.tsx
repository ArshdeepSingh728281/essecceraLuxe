import Main from "./pages/main";

export const revalidate = 3600; 

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/getpage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pagename: "home" }),
  });

  const result = await res.json();
  const pageData = result.success ? result.page.data : null;

  return <Main pageData={pageData} />;
}
