import { FC } from "react";
import { useForm } from "react-hook-form";

const Form: FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm()
    return (
        <div>
            <div className='wrapper'>
                <div>
                    <button>Add row</button>
                </div>
                <ul>
                    <li>
                        <select>
                            <option selected>+</option>
                            <option>-</option>
                        </select>
                        <input type='text' value='100' />
                        <button>Delete</button>
                        <button>Disable</button>
                    </li>
                    <li>
                        <select>
                            <option selected>+</option>
                            <option>-</option>
                        </select>
                        <input type='text' value='30' />
                        <button>Delete</button>
                        <button>Disable</button>
                    </li>
                    <li>
                        <select>
                            <option>+</option>
                            <option selected>-</option>
                        </select>
                        <input type='text' value='7' />
                        <button>Delete</button>
                        <button>Disable</button>
                    </li>
                </ul>
                <div>Result: 123</div>
            </div>
        </div>
    );
};

export default Form;
