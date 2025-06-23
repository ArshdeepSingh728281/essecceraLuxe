/* eslint-disable @typescript-eslint/no-explicit-any */

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
