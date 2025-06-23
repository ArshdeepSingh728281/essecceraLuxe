

import InvestorPage from "../pages/InvestorPage";

export const revalidate = 3600 

async function getInvestorData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/getpage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pagename: "investor" }),
    next: { revalidate: 10 },
  });

  const result = await res.json();
  return result.success ? result.page.data.reports : [];
}

export default async function InvestorRelations() {
  const serverReports = await getInvestorData();

  return <InvestorPage serverReports={serverReports} />;
}
