import React, { useRef, useState } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import { InputText } from 'primereact/inputtext';
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
    const [item, setItem] = useState('');
    const [price, setPrice] = useState('');


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
                errors.item = 'Atleast one person is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            let itemBuyers = []
            for (const user of data.item) {
                itemBuyers.push(user.name)
            }
            props.passChildData([[item, price, itemBuyers], props.numItems+1])
            data && show();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className='bg-pink-100 p-2 rounded w-fit m-auto'>
            <div className="flex flex-row gap-4">
                <div>
                    <InputText value={item} onChange={(e) => setItem(e.target.value)} placeholder="Item name" />
                </div>
                <div>
                    <InputText value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Item price" />
                </div>
                <div className="card flex justify-content-center">
                    <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center gap-1">
                        <Toast ref={toast} />
                        <MultiSelect
                            id="item"
                            name="item"
                            options={props.group.map(e => ({'name': e, 'code': e}))}
                            value={formik.values.item}
                            onChange={(e) => {
                                formik.setFieldValue('item', e.value);
                            }}
                            optionLabel="name"
                            placeholder="Select people"
                            maxSelectedLabels={3}
                            className="flex w-48 md:w-20rem"
                        />
                        {getFormErrorMessage('item')}
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default AddItem