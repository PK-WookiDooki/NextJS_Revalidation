export default function getFormattedDate(dateSting: string): string {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
    new Date(dateSting)
  );
}
