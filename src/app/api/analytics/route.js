
export async function GET() {
  const zoneId = process.env.CLOUDFLARE_ZONE_ID;
  const apiToken = process.env.CLOUDFLARE_TOKEN;

  // Define date range (Past 24 hours)
  const now = new Date();
  const startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000); // 24 hours ago
  const startDateStr = startDate.toISOString();
  const endDateStr = now.toISOString();

  // GraphQL query
  const query = `
    query GetZoneAnalytics($zoneTag: String!, $datetime_geq: DateTime!, $datetime_lt: DateTime!) {
      viewer {
        zones(filter: { zoneTag: $zoneTag }) {
          totals: httpRequests1hGroups(limit: 10000, filter: { datetime_geq: $datetime_geq, datetime_lt: $datetime_lt }) {
            uniq {
              uniques
            }
          }
        }
      }
    }
  `;

  // Request payload
  const payload = {
    query: query,
    variables: {
      zoneTag: zoneId,
      datetime_geq: startDateStr,
      datetime_lt: endDateStr,
    },
  };

  try {
    const response = await fetch("https://api.cloudflare.com/client/v4/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch analytics data" }), { status: response.status });
    }

    const data = await response.json();

    // Extract total unique visitors
    const totals = data?.data?.viewer?.zones?.[0]?.totals || [];
    const totalUniques = totals.reduce((sum, group) => {
      const uniques = group?.uniq?.uniques || 0; // Safely access `uniques`
      return sum + uniques;
    }, 0);


    return new Response(JSON.stringify({ uniqueVisitors: totalUniques }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}