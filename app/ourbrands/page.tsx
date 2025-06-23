/* eslint-disable @typescript-eslint/no-explicit-any */

import OurBrandsPage from "../pages/OurBrandsPage";

export const revalidate = 3600; 

async function getBrandsData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/getpage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pagename: "home" }),
    next: { revalidate: 10 },
  });

  const result = await res.json();
  return result.success ? result.page.data.ourbrands : [];
}

export default async function OurBrands() {
  const serverBrandsData = await getBrandsData();

  return <OurBrandsPage serverBrandsData={serverBrandsData} />;
}
