import type { ParameterStatus, ProductParameter } from "@/src/data/products";
import type { TechnicalCell, TechnicalParameterTable } from "@/src/data/sakoTechnicalParameters";

type ProductParameterTableProps =
  | {
      caption: string;
      parameters: ProductParameter[];
      technicalTable?: never;
      columns?: never;
      rows?: never;
    }
  | {
      caption: string;
      columns: string[];
      rows: Record<string, string>[];
      parameters?: never;
      technicalTable?: never;
    }
  | {
      caption?: never;
      technicalTable: TechnicalParameterTable;
      parameters?: never;
      columns?: never;
      rows?: never;
    };

const statusStyles: Record<ParameterStatus, string> = {
  Verified: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
  Estimated: "bg-blue-50 text-blue-700 ring-blue-600/15",
  "To verify": "bg-amber-50 text-amber-700 ring-amber-600/15",
  "Coming soon": "bg-slate-100 text-slate-600 ring-slate-500/15",
};

function isUrl(value: string) {
  return value.startsWith("https://") || value.startsWith("http://");
}

function renderValue(value: string) {
  if (!isUrl(value)) {
    return value;
  }

  return (
    <a
      href={value}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-[#0D3567] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
    >
      Source link
    </a>
  );
}

function getCellValue(cell: TechnicalCell) {
  return typeof cell === "string" ? cell : cell.value;
}

function getCellColSpan(cell: TechnicalCell) {
  return typeof cell === "string" ? undefined : cell.colSpan;
}

function StatusBadge({ status }: { status: ParameterStatus | string }) {
  const safeStatus: ParameterStatus =
    status === "Verified" || status === "Estimated" || status === "Coming soon" || status === "To verify"
      ? status
      : "To verify";

  return (
    <span className={`inline-flex w-max rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusStyles[safeStatus]}`}>
      {status}
    </span>
  );
}

export function ProductParameterTable(props: ProductParameterTableProps) {
  if (props.technicalTable) {
    const table = props.technicalTable;
    const tableWidth = table.columns.length === 1 ? "min-w-[720px]" : "min-w-[1320px]";

    return (
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className={`${tableWidth} border-separate border-spacing-0 text-left text-sm`}>
            <caption className="sr-only">{table.caption}</caption>
            <thead className="bg-[#0D3567] text-white">
              <tr>
                <th
                  scope="col"
                  className="sticky left-0 z-20 min-w-[250px] border-r border-white/20 bg-[#0D3567] px-5 py-4 text-xs font-bold uppercase tracking-[0.08em]"
                >
                  MODEL SPECIFICATION
                </th>
                {table.columns.map((column) => (
                  <th
                    key={column}
                    scope="col"
                    className="min-w-[170px] border-r border-white/20 px-5 py-4 text-xs font-bold uppercase tracking-[0.06em] last:border-r-0"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, rowIndex) => (
                <tr key={row.label} className={rowIndex % 2 === 0 ? "align-top" : "bg-slate-50/80 align-top"}>
                  <th
                    scope="row"
                    className={`sticky left-0 z-10 border-b border-r border-slate-200 px-5 py-4 text-xs font-bold uppercase tracking-[0.04em] text-slate-950 ${
                      rowIndex % 2 === 0 ? "bg-white" : "bg-slate-50"
                    }`}
                  >
                    {row.label}
                  </th>
                  {row.values.map((cell, index) => (
                    <td
                      key={`${row.label}-${index}`}
                      colSpan={getCellColSpan(cell)}
                      className="border-b border-r border-slate-200 px-5 py-4 text-sm leading-6 text-slate-700 last:border-r-0"
                    >
                      {renderValue(getCellValue(cell))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (props.parameters) {
    return (
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-[720px] text-left text-sm">
            <caption className="sr-only">{props.caption}</caption>
            <thead className="bg-[#0D3567] text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Parameter</th>
                <th className="px-4 py-3 font-semibold">Value</th>
                <th className="px-4 py-3 font-semibold">Unit</th>
                <th className="px-4 py-3 font-semibold">Notes</th>
                <th className="px-4 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {props.parameters.map((row) => (
                <tr key={row.parameter} className="align-top">
                  <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900">{row.parameter}</th>
                  <td className="px-4 py-3 text-slate-700">{renderValue(row.value)}</td>
                  <td className="px-4 py-3 text-slate-600">{row.unit ?? "To verify"}</td>
                  <td className="px-4 py-3 text-slate-600">{row.notes ?? "To verify"}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={row.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-[1280px] text-left text-sm">
          <caption className="sr-only">{props.caption}</caption>
          <thead className="bg-[#0D3567] text-white">
            <tr>
              {props.columns.map((column) => (
                <th key={column} className="whitespace-nowrap px-4 py-3 font-semibold">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {props.rows.map((row) => (
              <tr key={row["Model / Variant"] ?? row.Model ?? JSON.stringify(row)} className="align-top">
                {props.columns.map((column) => (
                  <td key={column} className="max-w-[220px] px-4 py-3 text-slate-700">
                    {renderValue(row[column] ?? "To verify")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
