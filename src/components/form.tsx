import { FC } from "react";
import { IFormProps } from "./IForm";

const Form: FC<IFormProps> = ({
    rows,
    total,
    handleAddRow,
    handlePositiveChange,
    handleInputChange,
    handleRowDelete,
    handleRowDisable,
}) => {
    return (
        <div className='wrapper'>
            <button onClick={handleAddRow}>Add row</button>
            <ul className='form-list'>
                {rows.map((row) => (
                    <li key={row.id} className='form-row'>
                        <select
                            onChange={(e) =>
                                handlePositiveChange(
                                    Number(e.target.value),
                                    row.id
                                )
                            }
                        >
                            <option value={1}>+</option>
                            <option value={0}>-</option>
                        </select>
                        <input
                            disabled={row.disabled}
                            value={row.value}
                            type='number'
                            min={0}
                            onChange={(e) =>
                                handleInputChange(
                                    Number(e.target.value),
                                    row.id
                                )
                            }
                        />
                        <button onClick={() => handleRowDelete(row.id)}>
                            Delete
                        </button>
                        <button onClick={() => handleRowDisable(row.id)}>
                            {row.disabled ? "Enable" : "Disable"}
                        </button>
                    </li>
                ))}
            </ul>
            <span>
                Result: <span className='form-total'>{total}</span>
            </span>
        </div>
    );
};

export default Form;
