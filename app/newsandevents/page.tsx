/* eslint-disable @typescript-eslint/no-explicit-any */

// import NewsAndEventsPage from "../pages/NewsAndEventsPage";

// export const revalidate = 3600;

// async function getNewsData() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/getpage`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ pagename: "newsandevents" }),
//     next: { revalidate: 10 },
//   });

//   const result = await res.json();

//   return result.success ? result.page.data.newsdata : [];
// }

// export default async function NewsAndEvents() {
//   const serverNewsData = await getNewsData();

//   return <NewsAndEventsPage serverNewsData={serverNewsData} />;
// }






/* eslint-disable @typescript-eslint/no-explicit-any */

import NewsAndEventsPage from "../pages/NewsAndEventsPage";

async function getNewsData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/getpage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pagename: "newsandevents" }),
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      console.error("Failed to fetch news data:", res.status);
      return [];
    }

    const result = await res.json();
    return result.success ? result.page.data.newsdata : [];

  } catch (error) {
    console.error("Error fetching/parsing news data:", error);
    return [];
  }
}

export default async function NewsAndEvents() {
  const serverNewsData = await getNewsData();

  return <NewsAndEventsPage serverNewsData={serverNewsData} />;
}
