const currencySymbol = (code: string) => {
  const map: Record<string, string> = { EUR: "€", USD: "$", GBP: "£" };
  return map[(code || "").toUpperCase()] || (code ? code.toUpperCase() : "€");
};

const formatNumber = (n: number, locale: string) =>
  new Intl.NumberFormat(locale, { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);

export const formatSalaryText = (salaryRaw: unknown, currencyCode: string, locale: string) => {
  if (salaryRaw === null || salaryRaw === undefined) return null;

  const symbol = currencySymbol(currencyCode);
  const s = String(salaryRaw).trim();
  if (!s) return null;

  const hasCurrencyAlready = /€|\$|£|\bEUR\b|\bUSD\b|\bGBP\b/i.test(s);

  const rangeMatch = s.match(/^\s*([\d.,]+)\s*[-–]\s*([\d.,]+)\s*$/);
  if (rangeMatch) {
    const a = Number(rangeMatch[1].replace(/\./g, "").replace(",", "."));
    const b = Number(rangeMatch[2].replace(/\./g, "").replace(",", "."));
    const left = Number.isFinite(a) ? formatNumber(a, locale) : rangeMatch[1];
    const right = Number.isFinite(b) ? formatNumber(b, locale) : rangeMatch[2];
    return `${left} - ${right}${hasCurrencyAlready ? "" : ` ${symbol}`}`;
  }

  const singleNumberMatch = s.match(/^\s*[\d.,]+\s*$/);
  if (singleNumberMatch) {
    const n = Number(s.replace(/\./g, "").replace(",", "."));
    if (Number.isFinite(n)) return `${formatNumber(n, locale)}${hasCurrencyAlready ? "" : ` ${symbol}`}`;
  }

  return hasCurrencyAlready ? s : `${s} ${symbol}`;
};

export const isCareerClosed = (career: any) => {
  const status = String(career?.status ?? "").toLowerCase();
  const title = String(career?.position ?? "").toLowerCase();
  return status === "closed" || title.includes("(closed)") || title.includes("(cerrada)");
};

export const getLogoUrl = (career: any) => {
  const server = process.env.NEXT_PUBLIC_CMS_URL || "";
  const url = career?.logo?.url;
  if (url) return url.startsWith("http") ? url : `${server}${url}`;
  if ((career?.company || "").toLowerCase() === "botic partners") return "/boticlogo.png";
  if (career?.company_url)
    return `https://logo.clearbit.com/${career.company_url.replace("https://", "").replace("http://", "").replace("www.", "")}`;
  return "/placeholder-logo.png";
};
