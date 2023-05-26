import { useEffect, useState } from "react";
import { IFormRow } from "../components/IForm";
import Form from "../components/form";
import Header from "../components/header";

const Adder = () => {
    const [rows, setRows] = useState<IFormRow[]>([]);
    const [total, setTotal] = useState<number>(0);

    const handleAddRow = () => {
        setRows((prev) => [
            ...prev,
            {
                id: prev.length.toString(),
                positive: 1,
                value: 0,
                disabled: false,
            },
        ]);
    };

    useEffect(() => {
        const sum = rows.reduce((acc, row) => {
            if (!row.disabled) {
                if (row.positive) {
                    return acc + row.value;
                } else {
                    return acc - row.value;
                }
            }
            return acc;
        }, 0);
        setTotal(sum);
    }, [rows]);

    const handleRowDisable = (id: string) => {
        setRows((prev) =>
            prev.map((row) => {
                if (row.id === id) {
                    return {
                        ...row,
                        disabled: !row.disabled,
                    };
                }
                return row;
            })
        );
    };

    const handleRowDelete = (id: string) => {
        setRows((prev) => prev.filter((row) => row.id !== id));
    };

    const handlePositiveChange = (value: number, id: string) => {
        setRows((prev) =>
            prev.map((row) => {
                if (row.id === id) {
                    return {
                        ...row,
                        positive: value,
                    };
                }
                return row;
            })
        );
    };

    const handleInputChange = (value: number, id: string) => {
        setRows((prev) =>
            prev.map((row) => {
                if (row.id === id) {
                    return {
                        ...row,
                        value,
                    };
                }
                return row;
            })
        );
    };

    return (
        <>
        <Header/>
        <Form
            rows={rows}
            total={total}
            handleAddRow={handleAddRow}
            handleRowDisable={handleRowDisable}
            handleRowDelete={handleRowDelete}
            handlePositiveChange={handlePositiveChange}
            handleInputChange={handleInputChange}
        />
        </>
    );
};

export default Adder;
