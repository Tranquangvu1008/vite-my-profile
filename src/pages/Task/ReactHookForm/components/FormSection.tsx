export const FormSection = ({ register, errors, modeEdit, handleSubmit, onSubmit }: any) => {
    return (

        <section className=" px-10 py-5 flex md:flex-row flex-col gap-[10%] shadow-lg">
            <div className="">
                <h3 className='font-medium text-lg'>Personal Details</h3>
                <h6 className="'text-black font-normal">Please fill out all the fields.</h6>
            </div>
            <div className="flex-1">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullName">Full Name</label>
                        <input {...register("fullName", { required: true, maxLength: 30 })} type="text" id="fullName"
                            className="pl-4 py-2 rounded-md border-[1px] border-gray-400 border-solid" />
                        {errors?.fullName?.type === "required" && <p className='mt-1 text-red-400'>* This field is required</p>}
                        {errors?.fullName?.type === "maxLength" && (
                            <p className='mt-1 text-red-500'>Full name cannot exceed 30 characters</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email Address</label>
                        <input {...register("email", { required: true, maxLength: 30 })} type="email"
                            className="pl-4 py-2 rounded-md border-[1px] border-gray-400 border-solid" />
                        {errors?.email?.type === "required" && <p className='mt-1 text-red-400'>* This field is required</p>}
                        {errors?.email?.type === "maxLength" && (
                            <p className='mt-1 text-red-500'>Email cannot exceed 30 characters</p>
                        )}
                    </div>
                    <div className="flex sm:flex-row flex-col gap-4">
                        <div className="flex flex-col flex-[2] self-baseline gap-1">
                            <label htmlFor="address">Address / Street</label>
                            <input {...register("address", { required: true })} type="text"
                                className="pl-4 py-2 rounded-md border-[1px] border-gray-400 border-solid" />
                            {errors?.address?.type === "required" && <p className='mt-1 text-red-400'>* This field is required</p>}
                        </div>
                        <div className="flex flex-col flex-[1] self-baseline gap-1">
                            <label htmlFor="city">City</label>
                            <input {...register("city", { required: true })} type="text"
                                className="pl-4 py-2 rounded-md border-[1px] border-gray-400 border-solid" />
                            {errors?.city?.type === "required" && <p className='mt-1 text-red-400'>* This field is required</p>}

                        </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-1">
                        <label htmlFor="country">Country / region</label>
                        <select
                            {...register("country", { required: "* Select one option" })}
                            className="bg-transparent pl-4 py-2 rounded-md border-[1px] border-gray-400 border-solid"
                        >
                            <option value="" style={{ color: "#000" }}>Select</option>
                            <option value="Canada" style={{ color: "#000" }}>Canada</option>
                            <option value="America" style={{ color: "#000" }}>America</option>
                        </select>
                        {errors.country && <p className="mt-1 text-red-400">{errors.country.message}</p>}
                    </div>
                    <div className="text-right mt-1">
                        <button className="inline-block font-bold text-white bg-[#3b82f6] py-2 px-4 rounded-lg">{modeEdit ? 'Edit' : 'Submit'}</button>
                    </div>
                </form>
            </div>
        </section>
    );
};