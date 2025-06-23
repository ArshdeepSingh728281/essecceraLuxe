/* eslint-disable @typescript-eslint/no-explicit-any */

import OurBrandsPage from "../pages/OurBrandsPage";

export const revalidate = 3600;

async function getBrandsData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/getpage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pagename: "home" }),
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      console.error("Failed to fetch home page for brands:", res.status);
      return [];
    }

    const result = await res.json();

    if (!result.success || !result.page?.data?.ourbrands) {
      console.error("Invalid response format for brands:", result);
      return [];
    }

    return result.page.data.ourbrands;
  } catch (error) {
    console.error("Error fetching brands data:", error);
    return [];
  }
}

export default async function OurBrands() {
  const serverBrandsData = await getBrandsData();

  return <OurBrandsPage serverBrandsData={serverBrandsData} />;
}
