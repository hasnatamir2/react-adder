export interface IFormRow {
    id: string;
    positive: number;
    value: number;
    disabled: boolean;
}

export interface IFormProps {
    rows: IFormRow[];
    total: number;
    handleAddRow: () => void;
    handleRowDisable: (id: string) => void;
    handleRowDelete: (id: string) => void;
    handlePositiveChange: (value: number, id: string) => void;
    handleInputChange: (value: number, id: string) => void;
}

