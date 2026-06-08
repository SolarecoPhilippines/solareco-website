import type { ProductParameter } from "@/src/data/products";

export type TechnicalCell = string | { value: string; colSpan?: number };

export type TechnicalRow = {
  label: string;
  values: TechnicalCell[];
};

export type TechnicalParameterTable = {
  title: string;
  caption: string;
  sourceLabel: string;
  printedPages: string;
  officialCatalogueUrl: string;
  columns: string[];
  rows: TechnicalRow[];
};

export type SakoBatteryModel = {
  model: string;
  slug: string;
  voltage: "25.6V" | "51.2V";
  capacity: "100Ah" | "200Ah" | "300Ah" | "600Ah";
  productFamily: string;
  batteryType: string;
  totalEnergy: string;
  usableEnergy: string;
  mountingType: string;
};

export const SAKO_CATALOGUE_SOURCE_LABEL = "2026-03 SAKO Solar Catalogue 220V";
export const SAKO_CATALOGUE_PRINTED_PAGES = "25–30";
export const SAKO_CATALOGUE_URL =
  "https://sakopower.com/wp-content/uploads/2026/05/2026-03-SAKO-Solar-Catalogue-220V%EF%BC%89.pdf";

const allModels = { colSpan: 7 };
const allModelsValue = (value: string): TechnicalCell => ({ value, ...allModels });

export const sakoLiSunTechnicalTable: TechnicalParameterTable = {
  title: "TECHNICAL PARAMETER",
  caption: "SAKO Li-Sun lithium battery technical parameter comparison matrix",
  sourceLabel: SAKO_CATALOGUE_SOURCE_LABEL,
  printedPages: SAKO_CATALOGUE_PRINTED_PAGES,
  officialCatalogueUrl: SAKO_CATALOGUE_URL,
  columns: [
    "SK-25.6V 100Ah",
    "SK-25.6V 200Ah",
    "SK-25.6V 300Ah",
    "SK-51.2V 100Ah",
    "SK-51.2V 200Ah",
    "SK-51.2V 300Ah",
    "SK-51.2V 600Ah",
  ],
  rows: [
    { label: "Battery Type", values: [allModelsValue("LiFePO4")] },
    {
      label: "Total Energy",
      values: ["2560Wh", "5120Wh", "7680Wh", "5120Wh", "10240Wh", "15360Wh", "30720Wh"],
    },
    {
      label: "Usable Energy (90% DOD)",
      values: ["2304Wh", "4608Wh", "6912Wh", "4608Wh", "9216Wh", "13824Wh", "27648Wh"],
    },
    {
      label: "Voltage Window",
      values: ["22.4~29.2V", "22.4~29.2V", "22.4~29.2V", "44.8~58.4V", "44.8~58.4V", "44.8~58.4V", "44.8~58.4V"],
    },
    {
      label: "Fast Charge Voltage",
      values: ["28.8V", "28.8V", "28.8V", "57.6V", "57.6V", "57.6V", "57.6V"],
    },
    {
      label: "Float Charge Voltage",
      values: ["28.0V", "28.0V", "28.0V", "56.0V", "56.0V", "56.0V", "56.0V"],
    },
    {
      label: "Low DC Cut-off Voltage",
      values: ["24.0V", "24.0V", "24.0V", "48.0V", "48.0V", "48.0V", "48.0V"],
    },
    {
      label: "Max. Continuous Discharge Current",
      values: ["100A", "150A", "200A", "100A", "150A", "200A", "300A"],
    },
    {
      label: "Max. Pulse Discharge Current",
      values: ["150A 1Sec.", "200A 1Sec.", "300A 1Sec.", "150A 1Sec.", "150A 1Sec.", "300A 1Sec.", "450A 1Sec."],
    },
    {
      label: "Max. Continuous Charge Current",
      values: ["50A", "100A", "150A", "50A", "100A", "150A", "300A"],
    },
    { label: "Scalable", values: [allModelsValue("1~15 in parallel")] },
    {
      label: "Communication",
      values: ["RS485", "RS485", "CAN,RS485", "CAN,RS485", "CAN,RS485", "CAN,RS485", "CAN,RS485"],
    },
    {
      label: "Cycle Life",
      values: [
        ">6000 Cycles@(+25°C, 0.2C, 80%DOD, 60%EOL)",
        ">6000 Cycles@(+25°C, 0.2C, 80%DOD, 60%EOL)",
        ">8000 Cycles@(+25°C, 0.2C, 80%DOD, 60%EOL)",
        ">6000 Cycles@(+25°C, 0.2C, 80%DOD, 60%EOL)",
        ">6000 Cycles@(+25°C, 0.2C, 80%DOD, 60%EOL)",
        ">8000 Cycles@(+25°C, 0.2C, 80%DOD, 60%EOL)",
        ">6000 Cycles@(+25°C, 0.2C, 80%DOD, 60%EOL)",
      ],
    },
    { label: "Terminal", values: [allModelsValue("double M8")] },
    { label: "Storage Temperature", values: [allModelsValue("0°C~30°C")] },
    { label: "Storage Duration", values: [allModelsValue("6 months at 25°C")] },
    { label: "Safety Standard", values: [allModelsValue("UN38.3, MSDS")] },
    { label: "IP Degree", values: [allModelsValue("IP20")] },
    {
      label: "Protection",
      values: [
        allModelsValue(
          "Over charge protection, Over discharge protection, Over current protection, Shortcircuit protection, Over temperature protection",
        ),
      ],
    },
    { label: "Working Temperature", values: [allModelsValue("-10°C~+50°C")] },
    { label: "Humidity", values: [allModelsValue("0~95% (no condensation)")] },
    {
      label: "Product Size L×W×H (mm)",
      values: ["520*390*178", "640*390*178", "690*455*190", "640*390*178", "850*560*178", "850*560*178", "970*791*245"],
    },
    {
      label: "Package Size L×W×H (mm)",
      values: [
        "566*440*240 (UN carton)",
        "684*460*240 (UN carton)",
        "735*485*380 (UN wooden cases)",
        "665*530*276 (UN carton)",
        "897*575*340 (UN wooden cases)",
        "897*575*470 (UN wooden cases)",
        "1055*821*457 (UN wooden cases)",
      ],
    },
    {
      label: "Weight (NW)",
      values: ["29.9Kg", "50.4Kg", "64.0Kg", "49.3Kg", "84Kg", "117Kg", "233.0Kg"],
    },
    {
      label: "Weight (GW)",
      values: ["30.4Kg", "50.9Kg", "75.7Kg", "49.8Kg", "102Kg", "136.2Kg", "250.4Kg"],
    },
  ],
};

function rowValue(label: string, modelIndex: number) {
  const row = sakoLiSunTechnicalTable.rows.find((item) => item.label === label);
  const cell = row?.values[0];

  if (!row) {
    return "";
  }

  if (typeof cell !== "string" && cell?.colSpan === sakoLiSunTechnicalTable.columns.length) {
    return cell.value;
  }

  const value = row.values[modelIndex];
  return typeof value === "string" ? value : value.value;
}

const modelMetadata = [
  {
    voltage: "25.6V",
    capacity: "100Ah",
    productFamily: "Li-Sun Wall/Stand-Mounted Lithium Battery Pack",
    mountingType: "Wall / Stand-Mounted",
  },
  {
    voltage: "25.6V",
    capacity: "200Ah",
    productFamily: "Li-Sun Wall/Stand-Mounted Lithium Battery Pack",
    mountingType: "Wall / Stand-Mounted",
  },
  {
    voltage: "25.6V",
    capacity: "300Ah",
    productFamily: "Li-Sun Wall/Stand-Mounted Lithium Battery Pack",
    mountingType: "Wall / Stand-Mounted",
  },
  {
    voltage: "51.2V",
    capacity: "100Ah",
    productFamily: "Li-Sun Wall/Stand-Mounted Lithium Battery Pack",
    mountingType: "Wall / Stand-Mounted",
  },
  {
    voltage: "51.2V",
    capacity: "200Ah",
    productFamily: "Li-Sun Wall/Stand-Mounted Lithium Battery Pack",
    mountingType: "Wall / Stand-Mounted",
  },
  {
    voltage: "51.2V",
    capacity: "300Ah",
    productFamily: "Li-Sun Wall/Stand-Mounted Lithium Battery Pack",
    mountingType: "Wall / Stand-Mounted",
  },
  {
    voltage: "51.2V",
    capacity: "600Ah",
    productFamily: "Li-Sun Wheel/Stand-Mounted Lithium Battery Pack",
    mountingType: "Wheel / Stand-Mounted",
  },
] as const;

export const sakoBatteryModels: SakoBatteryModel[] = sakoLiSunTechnicalTable.columns.map((model, index) => {
  const metadata = modelMetadata[index];

  return {
    model,
    slug: model.toLowerCase().replace("sk-", "sk-").replace(".", "-").replace(/\s+/g, "-"),
    voltage: metadata.voltage,
    capacity: metadata.capacity,
    productFamily: metadata.productFamily,
    batteryType: rowValue("Battery Type", index),
    totalEnergy: rowValue("Total Energy", index),
    usableEnergy: rowValue("Usable Energy (90% DOD)", index),
    mountingType: metadata.mountingType,
  };
});

export const sakoAllInOneParameters: ProductParameter[] = [
  {
    parameter: "Product Type",
    value: "All-in-One Energy Storage System",
    notes: "The SAKO Li-Sun battery matrix does not apply to this product.",
    status: "To verify",
  },
  {
    parameter: "Model",
    value: "SAKO Alpha W ESS 1000W All-in-One",
    notes: "Dedicated official All-in-One datasheet still required for complete technical verification.",
    status: "To verify",
  },
  {
    parameter: "Rated Power",
    value: "1000W",
    notes: "Dedicated official All-in-One datasheet still required for complete technical verification.",
    status: "To verify",
  },
  { parameter: "Nominal Battery Energy", value: "To verify", status: "To verify" },
  { parameter: "Usable Battery Energy", value: "To verify", status: "To verify" },
  { parameter: "Battery Type", value: "To verify", status: "To verify" },
  { parameter: "Battery Capacity", value: "To verify", status: "To verify" },
  { parameter: "AC Input Voltage", value: "To verify", status: "To verify" },
  { parameter: "AC Input Frequency", value: "To verify", status: "To verify" },
  { parameter: "AC Output Voltage", value: "To verify", status: "To verify" },
  { parameter: "AC Output Frequency", value: "To verify", status: "To verify" },
  { parameter: "PV Input Range", value: "To verify", status: "To verify" },
  { parameter: "Maximum PV Input Power", value: "To verify", status: "To verify" },
  { parameter: "Charging Modes", value: "To verify", status: "To verify" },
  { parameter: "Display", value: "To verify", status: "To verify" },
  { parameter: "Communication", value: "To verify", status: "To verify" },
  { parameter: "Protection Features", value: "To verify", status: "To verify" },
  { parameter: "Recommended Applications", value: "To verify", status: "To verify" },
  { parameter: "Dimensions", value: "To verify", status: "To verify" },
  { parameter: "Weight", value: "To verify", status: "To verify" },
  { parameter: "Warranty", value: "To verify", status: "To verify" },
  {
    parameter: "Verification Status",
    value: "The official All-in-One datasheet is still required for complete technical verification.",
    status: "To verify",
  },
];
