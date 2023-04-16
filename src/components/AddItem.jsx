import React, { useRef } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import { useFormik } from 'formik';
import { Toast } from 'primereact/toast';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";   

/* 
    const group = [
        {name: "Sarang", code: "email"}
    ]
*/
function AddItem(props) {
    const toast = useRef(null);

    //  const cities = [
    //     { name: 'New York', code: 'NY' },
    //     { name: 'Rome', code: 'RM' },
    //     { name: 'London', code: 'LDN' },
    //     { name: 'Istanbul', code: 'IST' },
    //     { name: 'Paris', code: 'PRS' }
    // ];
        
    const show = () => {
        const itemArray = formik.values.item.map((item, i) => item.name + (i < formik.values.item.length - 1 ? ', ' : ''));

        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: itemArray });
    };

    const formik = useFormik({
        initialValues: {
            item: null
        },
        validate: (data) => {
            let errors = {};

            if (!data.item) {
                errors.item = 'City is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            console.log(data);
            data && show();

            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center gap-2">
                <Toast ref={toast} />
                <MultiSelect
                    id="item"
                    name="item"
                    options={props.group}
                    value={formik.values.item}
                    onChange={(e) => {
                        formik.setFieldValue('item', e.value);
                    }}
                    optionLabel="name"
                    placeholder="Select people"
                    maxSelectedLabels={3}
                    className="w-full md:w-20rem"
                />
                {getFormErrorMessage('item')}
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
               +
             </button>
            </form>
        </div>
    )
}

export default AddItem