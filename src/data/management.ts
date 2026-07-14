export type ManagementDepartment = {
  name: string;
  departments?: ManagementDepartment[];
};

export type ManagingPartner = {
  id: string;
  fullName: string;
  role: "Managing Partner";
  imageSrc?: string;
  imageAlt: string;
  biography: string;
  assignedAreas: string[];
  assignedBranches: string[];
  assignedDepartments: ManagementDepartment[];
  responsibilities: string[];
  displayOrder: number;
  published: boolean;
};

export type ManagementConfig = {
  published: boolean;
  partners: ManagingPartner[];
};

export const managementConfig: ManagementConfig = {
  published: false,
  partners: [
    {
      id: "managing-partner-1",
      fullName: "Managing Partner 1",
      role: "Managing Partner",
      imageAlt: "",
      biography: "Name and profile to be confirmed.",
      assignedAreas: ["Headquarters"],
      assignedBranches: [],
      assignedDepartments: [
        { name: "E-Commerce" },
        {
          name: "HQ Management",
          departments: [{ name: "Marketing" }, { name: "Sales" }],
        },
      ],
      responsibilities: ["E-Commerce", "HQ Management"],
      displayOrder: 1,
      published: false,
    },
    {
      id: "managing-partner-2",
      fullName: "Managing Partner 2",
      role: "Managing Partner",
      imageAlt: "",
      biography: "Name and profile to be confirmed.",
      assignedAreas: [],
      assignedBranches: ["Bacolod", "Palawan", "Manila"],
      assignedDepartments: [],
      responsibilities: [],
      displayOrder: 2,
      published: false,
    },
    {
      id: "managing-partner-3",
      fullName: "Managing Partner 3",
      role: "Managing Partner",
      imageAlt: "",
      biography: "Name and profile to be confirmed.",
      assignedAreas: [],
      assignedBranches: ["Bacolod", "Palawan", "Cebu"],
      assignedDepartments: [],
      responsibilities: [],
      displayOrder: 3,
      published: false,
    },
    {
      id: "managing-partner-4",
      fullName: "Managing Partner 4",
      role: "Managing Partner",
      imageAlt: "",
      biography: "Name and profile to be confirmed.",
      assignedAreas: ["Solareco Cebu"],
      assignedBranches: [],
      assignedDepartments: [],
      responsibilities: [],
      displayOrder: 4,
      published: false,
    },
    {
      id: "managing-partner-5",
      fullName: "Managing Partner 5",
      role: "Managing Partner",
      imageAlt: "",
      biography: "Name and profile to be confirmed.",
      assignedAreas: ["Solareco Iloilo"],
      assignedBranches: [],
      assignedDepartments: [
        { name: "Technical" },
        { name: "Operations" },
        { name: "Sales" },
        { name: "Administration" },
      ],
      responsibilities: ["Technical", "Operations", "Sales", "Administration"],
      displayOrder: 5,
      published: false,
    },
  ],
};

export function getVisibleManagingPartners(isDevelopment: boolean) {
  return managementConfig.partners
    .filter((partner) => isDevelopment || partner.published)
    .sort((first, second) => first.displayOrder - second.displayOrder);
}
