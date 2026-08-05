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
  capacity: "100Ah" | "200Ah" | "300Ah" | "320Ah" | "600Ah" | "640Ah";
  productFamily: string;
  batteryType?: string;
  totalEnergy?: string;
  usableEnergy?: string;
  mountingType?: string;
  technicalSpecifications?: Array<{ label: string; value: string }>;
  technicalDataVerified: boolean;
};

export const SAKO_CATALOGUE_SOURCE_LABEL = "2026-03 SAKO Solar Catalogue 220V";
export const SAKO_CATALOGUE_PRINTED_PAGES = "25–30";
export const SAKO_CATALOGUE_URL =
  "https://sakopower.com/wp-content/uploads/2026/05/2026-03-SAKO-Solar-Catalogue-220V%EF%BC%89.pdf";

const allModels = { colSpan: 7 };
const allModelsValue = (value: string): TechnicalCell => ({ value, ...allModels });
const suppliedImageModelsValue = (value: string): TechnicalCell => ({ value, colSpan: 2 });

export const SAKO_SUPPLIED_IMAGE_SOURCE_NOTE =
  "Specifications for the 51.2V 320Ah and 640Ah models are based solely on the supplied specification image.";

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
    "SK-51.2V 320Ah",
    "SK-51.2V 640Ah",
  ],
  rows: [
    {
      label: "Battery Type",
      values: [allModelsValue("LiFePO4"), suppliedImageModelsValue("LiFePO4")],
    },
    {
      label: "Total Energy",
      values: ["2560Wh", "5120Wh", "7680Wh", "5120Wh", "10240Wh", "15360Wh", "30720Wh", "16384Wh", "32768Wh"],
    },
    {
      label: "Usable Energy (90% DOD)",
      values: ["2304Wh", "4608Wh", "6912Wh", "4608Wh", "9216Wh", "13824Wh", "27648Wh", "14746Wh", "29491Wh"],
    },
    {
      label: "Voltage Window",
      values: ["22.4~29.2V", "22.4~29.2V", "22.4~29.2V", "44.8~58.4V", "44.8~58.4V", "44.8~58.4V", "44.8~58.4V", "44.8–58.4V", "44.8–58.4V"],
    },
    {
      label: "Fast Charge Voltage",
      values: ["28.8V", "28.8V", "28.8V", "57.6V", "57.6V", "57.6V", "57.6V", "57.6V", "57.6V"],
    },
    {
      label: "Float Charge Voltage",
      values: ["28.0V", "28.0V", "28.0V", "56.0V", "56.0V", "56.0V", "56.0V", "56.0V", "56.0V"],
    },
    {
      label: "Low DC Cut-off Voltage",
      values: ["24.0V", "24.0V", "24.0V", "48.0V", "48.0V", "48.0V", "48.0V", "48.0V", "48.0V"],
    },
    {
      label: "Max. Continuous Discharge Current",
      values: ["100A", "150A", "200A", "100A", "150A", "200A", "300A", "200A", "300A"],
    },
    {
      label: "Max. Pulse Discharge Current",
      values: ["150A 1Sec.", "200A 1Sec.", "300A 1Sec.", "150A 1Sec.", "150A 1Sec.", "300A 1Sec.", "450A 1Sec.", "300A, 1 sec.", "450A, 1 sec."],
    },
    {
      label: "Max. Continuous Charge Current",
      values: ["50A", "100A", "150A", "50A", "100A", "150A", "300A", "160A", "300A"],
    },
    {
      label: "Scalable",
      values: [allModelsValue("1~15 in parallel"), suppliedImageModelsValue("1–15 in parallel")],
    },
    {
      label: "Communication",
      values: ["RS485", "RS485", "CAN,RS485", "CAN,RS485", "CAN,RS485", "CAN,RS485", "CAN,RS485", "CAN, RS485", "CAN, RS485"],
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
        "",
        ">8000 Cycles @ (+25°C, 0.5C, 90% DOD, 60% EOL)",
      ],
    },
    {
      label: "Terminal",
      values: [allModelsValue("double M8"), suppliedImageModelsValue("Double M8")],
    },
    {
      label: "Storage Temperature",
      values: [allModelsValue("0°C~30°C"), suppliedImageModelsValue("0°C–30°C")],
    },
    {
      label: "Storage Duration",
      values: [allModelsValue("6 months at 25°C"), suppliedImageModelsValue("6 months at 25°C")],
    },
    {
      label: "Safety Standard",
      values: [allModelsValue("UN38.3, MSDS"), suppliedImageModelsValue("UN38.3, MSDS")],
    },
    {
      label: "IP Degree",
      values: [allModelsValue("IP20"), suppliedImageModelsValue("IP20")],
    },
    {
      label: "Protection",
      values: [
        allModelsValue(
          "Over charge protection, Over discharge protection, Over current protection, Shortcircuit protection, Over temperature protection",
        ),
        suppliedImageModelsValue(
          "Over charge protection, Over discharge protection, Over current protection, Shortcircuit protection, Over temperature protection.",
        ),
      ],
    },
    {
      label: "Working Temperature",
      values: [allModelsValue("-10°C~+50°C"), suppliedImageModelsValue("-10°C–+50°C")],
    },
    {
      label: "Humidity",
      values: [allModelsValue("0~95% (no condensation)"), suppliedImageModelsValue("0–95% (no condensation)")],
    },
    {
      label: "Product Size (L×W×H)",
      values: ["520*390*178", "640*390*178", "690*455*190", "640*390*178", "850*560*178", "850*560*178", "970*791*245", "850×560×178 mm", "970×911×245 mm"],
    },
    {
      label: "Package Size (L×W×H)",
      values: [
        "566*440*240 (UN carton)",
        "684*460*240 (UN carton)",
        "735*485*380 (UN wooden cases)",
        "665*530*276 (UN carton)",
        "897*575*340 (UN wooden cases)",
        "897*575*470 (UN wooden cases)",
        "1055*821*457 (UN wooden cases)",
        "897×575×470 mm, UN wooden case",
        "1043×988×425 mm, UN wooden case",
      ],
    },
    {
      label: "Net Weight",
      values: ["29.9Kg", "50.4Kg", "64.0Kg", "49.3Kg", "84Kg", "117Kg", "233.0Kg", "115.0 kg", "235.7 kg"],
    },
    {
      label: "Gross Weight",
      values: ["30.4Kg", "50.9Kg", "75.7Kg", "49.8Kg", "102Kg", "136.2Kg", "250.4Kg", "133.0 kg", "262.4 kg"],
    },
    {
      label: "Smart BMS",
      values: [
        { value: "", colSpan: 7 },
        suppliedImageModelsValue("Smart BMS supports communication with different brands of hybrid inverter."),
      ],
    },
  ],
};

function rowValue(label: string, modelIndex: number) {
  const row = sakoLiSunTechnicalTable.rows.find((item) => item.label === label);
  if (!row) {
    return "";
  }

  let columnOffset = 0;

  for (const cell of row.values) {
    const colSpan = typeof cell === "string" ? 1 : (cell.colSpan ?? 1);

    if (modelIndex >= columnOffset && modelIndex < columnOffset + colSpan) {
      return typeof cell === "string" ? cell : cell.value;
    }

    columnOffset += colSpan;
  }

  return "";
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
    productFamily: "Li-Sun Wheel/Stand-Mounted Lithium Battery Pack",
    mountingType: "Wheel / Stand-Mounted",
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
    productFamily: "Li-Sun Wheel/Stand-Mounted Lithium Battery Pack",
    mountingType: "Wheel / Stand-Mounted",
  },
  {
    voltage: "51.2V",
    capacity: "300Ah",
    productFamily: "Li-Sun Wheel/Stand-Mounted Lithium Battery Pack",
    mountingType: "Wheel / Stand-Mounted",
  },
  {
    voltage: "51.2V",
    capacity: "600Ah",
    productFamily: "Li-Sun Wheel/Stand-Mounted Lithium Battery Pack",
    mountingType: "Wheel / Stand-Mounted",
  },
] as const;

const verifiedSakoBatteryModels: SakoBatteryModel[] = sakoLiSunTechnicalTable.columns.slice(0, 7).map((model, index) => {
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
    technicalDataVerified: true,
  };
});

const additionalSakoBatteryModels: SakoBatteryModel[] = [
  {
    model: "SAKO Li-Sun 51.2V 320Ah",
    slug: "sako-li-sun-51-2v-320ah",
    voltage: "51.2V",
    capacity: "320Ah",
    productFamily: "SAKO Li-Sun Lithium Batteries",
    batteryType: rowValue("Battery Type", 7),
    totalEnergy: rowValue("Total Energy", 7),
    usableEnergy: rowValue("Usable Energy (90% DOD)", 7),
    technicalSpecifications: sakoLiSunTechnicalTable.rows
      .map((row) => ({ label: row.label, value: rowValue(row.label, 7) }))
      .filter((specification) => specification.value),
    technicalDataVerified: true,
  },
  {
    model: "SAKO Li-Sun 51.2V 640Ah",
    slug: "sako-li-sun-51-2v-640ah",
    voltage: "51.2V",
    capacity: "640Ah",
    productFamily: "SAKO Li-Sun Lithium Batteries",
    batteryType: rowValue("Battery Type", 8),
    totalEnergy: rowValue("Total Energy", 8),
    usableEnergy: rowValue("Usable Energy (90% DOD)", 8),
    technicalSpecifications: sakoLiSunTechnicalTable.rows
      .map((row) => ({ label: row.label, value: rowValue(row.label, 8) }))
      .filter((specification) => specification.value),
    technicalDataVerified: true,
  },
];

export const sakoBatteryModels: SakoBatteryModel[] = [
  ...verifiedSakoBatteryModels,
  ...additionalSakoBatteryModels,
];
