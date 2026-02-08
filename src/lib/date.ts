// Helper para formatear fechas
export function formatDate(dateString: string | null | undefined): string {
  if (!dateString) return "Presente";

  const date = new Date(dateString);
  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  const month = months[date.getMonth() + 1];
  const year = date.getFullYear();

  return `${month} ${year}`;
}

// Formatear período completo
export function formatPeriod(
  startDate: string,
  endDate: string | null,
): string {
  const start = formatDate(startDate);
  const end = formatDate(endDate);

  return `${start} - ${end}`;
}
