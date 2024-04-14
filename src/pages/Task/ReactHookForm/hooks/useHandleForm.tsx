import { useState } from 'react'
import { IFormInput } from '../models/IFormInput';
import { SubmitHandler, useForm } from 'react-hook-form';

export const useHandleForm = () => {
    const [listUserInfo, setListUserInfo] = useState<IFormInput[]>([]);
    const [modeEdit, setModeEdit] = useState(false)
    const formOptions = { defaultValues: { fullName: '', email: '', address: '', city: '' } };

    const {
        register,
        setValue,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<IFormInput>(formOptions);
    const onSubmit: SubmitHandler<IFormInput> = (data: any) => {
        if (data) {
            if (modeEdit && data.id) {
                const newUpdate = listUserInfo.map((item) => {
                    if (item.id === data.id) {
                        return { ...data }
                    }
                    return item;
                })
                setListUserInfo(newUpdate);
                setModeEdit(false)
                reset()
            } else {
                const newId = listUserInfo.reduce((maxId, item) => Math.max(item.id, maxId), 0) + 1;
                setListUserInfo([...listUserInfo, { id: newId, ...data }])
                reset()
            }
        }
    }

    const deleteItem = (id: number) => {
        const newList = listUserInfo.filter((item) => item.id !== id);
        setListUserInfo(newList)
    }

    const showItemUpdate = (id: number) => {
        const itemUpdate: IFormInput = listUserInfo.filter((item) => item.id === id)[0];
        if (itemUpdate) {
            setModeEdit(true);
            setValue("id", itemUpdate.id)
            setValue("fullName", itemUpdate.fullName);
            setValue("email", itemUpdate.email);
            setValue("address", itemUpdate.address);
            setValue("city", itemUpdate.city);
            setValue("country", itemUpdate.country);
        }
    }

    return { register, errors, modeEdit, handleSubmit, onSubmit, deleteItem, showItemUpdate, listUserInfo }
}
