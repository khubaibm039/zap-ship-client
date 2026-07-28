import riderImg from "../../assets/agent-pending.png";

const BeARider = () => {
    return (
        <div className="flex bg-white rounded-2xl min-h-screen justify-center items-center p-8">
            <div className="flex-1 flex flex-col justify-center items-center">
                <form className="w-full max-w-md">
                    <div className="py-10">
                        <div className=" bg-white rounded-lg">
                            <h1 className="text-5xl font-bold  mb-4">
                                Be a Rider
                            </h1>

                            <p className="text-gray-500 mb-10 leading-relaxed">
                                Enjoy fast, reliable parcel delivery with
                                real-time tracking and zero hassle. From
                                personal packages to business shipments — we    
                                deliver on time, every time.
                            </p>

                            <div className=" pt-6">
                                <h2 className="text-3xl font-bold mb-6">
                                    Tell us about yourself
                                </h2>

                                <form className="space-y-5">
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-medium">
                                                Your Name
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="input input-bordered w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-medium">
                                                Driving License Number
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Driving License Number"
                                            className="input input-bordered w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-medium">
                                                Your Email
                                            </span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="input input-bordered w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-medium">
                                                Your Region
                                            </span>
                                        </label>
                                        <select className="select select-bordered w-full">
                                            <option disabled selected>
                                                Select your Region
                                            </option>
                                            <option>Dhaka</option>
                                            <option>Chittagong</option>
                                            <option>Rajshahi</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-medium">
                                                Your District
                                            </span>
                                        </label>
                                        <select className="select select-bordered w-full">
                                            <option disabled selected>
                                                Select your District
                                            </option>
                                            <option>Gazipur</option>
                                            <option>Khulna</option>
                                            <option>Sylhet</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-medium">
                                                NID No
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="NID"
                                            className="input input-bordered w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-medium">
                                                Phone Number
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Phone Number"
                                            className="input input-bordered w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-medium">
                                                Bike Brand Model and Year
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Bike Brand Model and Year"
                                            className="input input-bordered w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-medium">
                                                Bike Registration Number
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Bike Registration Number"
                                            className="input input-bordered w-full"
                                        />
                                    </div>

                                    <div>
                                        <label className="label">
                                            <span className="label-text font-medium">
                                                Tell Us About Yourself
                                            </span>
                                        </label>
                                        <textarea
                                            className="textarea textarea-bordered w-full"
                                            placeholder="Tell Us About Yourself"></textarea>
                                    </div>

                                    <button className="btn btn-success w-full text-black">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center">
                <div className="text-center">
                    <img src={riderImg} alt="" className="mx-auto" />
                </div>
            </div>
        </div>
    );
};

export default BeARider;
