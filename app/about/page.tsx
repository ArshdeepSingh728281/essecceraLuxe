/* eslint-disable @typescript-eslint/no-explicit-any */

import AboutPage from "../pages/AboutPage";

export const revalidate = 3600;

export default async function About() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/getpage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pagename: "aboutus" }),
    next: { revalidate: 10 }, // enables ISR
  });

  const result = await res.json();

  if (!result.success) return <div>Failed to load</div>;

  const { aboutText, missionText, team } = result.page.data;

  return (
    <AboutPage
      aboutText={aboutText}
      missionText={missionText}
      team={team}
    />
  );
}
