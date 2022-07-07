interface Column {
  id: "name" | "description";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

export const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 1 },
  { id: "description", label: "Description", minWidth: 100 },
];

interface Data {
  name: string;
  description: string;
}
