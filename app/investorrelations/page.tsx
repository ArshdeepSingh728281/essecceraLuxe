

/* eslint-disable @typescript-eslint/no-explicit-any */

import InvestorPage from "../pages/InvestorPage";

export const revalidate = 3600;

async function getInvestorData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/getpage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pagename: "investor" }),
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      console.error("Failed to fetch investor page:", res.status);
      return [];
    }

    const result = await res.json();

    if (!result.success || !result.page?.data?.reports) {
      console.error("Invalid response format for investor page:", result);
      return [];
    }

    return result.page.data.reports;
  } catch (error) {
    console.error("Error fetching investor page:", error);
    return [];
  }
}

export default async function InvestorRelations() {
  const serverReports = await getInvestorData();

  return <InvestorPage serverReports={serverReports} />;
}
