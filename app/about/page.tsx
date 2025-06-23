/* eslint-disable @typescript-eslint/no-explicit-any */

import AboutPage from "../pages/AboutPage";

export const revalidate = 3600;

export default async function About() {
  let aboutText = "";
  let missionText = "";
  let team: { name: string; desc: string; img: string }[] = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/getpage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pagename: "aboutus" }),
      next: { revalidate: 10 }, // enables ISR
    });

    if (!res.ok) {
      console.error("Failed to fetch: status", res.status);
      return <div>Failed to load</div>;
    }

    const result = await res.json();

    if (!result.success || !result.page?.data) {
      console.error("Invalid JSON response", result);
      return <div>Failed to load</div>;
    }

    ({ aboutText, missionText, team } = result.page.data);
  } catch (err) {
    console.error("Error loading About page:", err);
    return <div>Failed to load</div>;
  }

  return (
    <AboutPage
      aboutText={aboutText}
      missionText={missionText}
      team={team}
    />
  );
}
