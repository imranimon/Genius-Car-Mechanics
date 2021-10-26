import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://lit-anchorage-66977.herokuapp.com/services', data)
            .then((res) => {
                if (res.data.insertedId) {
                    alert('Added Successfully')
                    reset()
                }
            })
    };
    return (
        <div className="d-flex justify-content-center" >
            <div >
                <h2>Please Add A Service</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-2">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" className="form-control" type="text" {...register("name", { required: true, maxLength: 20 })} />
                        <small className='text-danger'>
                            {errors.name?.type === 'required' && "Name is required"}
                        </small>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="price">Price</label>
                        <input id="price" className="form-control" type="number" {...register("price", { required: true })} />
                        <small className='text-danger'>
                            {errors.price?.type === 'required' && "Price is required"}
                        </small>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="img">Image Url</label>
                        <input id="img" className="form-control" type="text" {...register("img", { required: true })} />
                        <small className='text-danger'>
                            {errors.img?.type === 'required' && "Image Url is required"}
                        </small>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" className="form-control"  {...register("description", { required: true })} />
                        <small className='text-danger'>
                            {errors.description?.type === 'required' && "Description is required"}
                        </small>
                    </div>
                    <input className='btn btn-primary' type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddService;