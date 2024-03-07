

const EventDetailsOffline = () => {
    return (
        <div className="text-center me-12">
            <h1 className="text-3xl font-bold mt-32 m-16">Schedule Plan For Offline</h1>
            <div className="grid place-content-center">
                <div className=" border-2 border-indigo-200 rounded-lg shadow-lg mb-16 shadow-indigo-200 h-28 w-44 text-lg ">
                    <p className="text-xs me-28 py-2 bg-indigo-600 rounded-r-lg mt-1 text-white font-bold">Day 01</p>
                    <div className="d-flex grid">
                        <span className="text-3xl font-bold mx-2">01</span>
                        <span className="text-center font-semibold mb-4 text-xl">January 2024</span>
                    </div>
                </div>
                
            </div>
            <ul className="ms-0 me-44 md:ms-80 lg:mx-auto w-1/5 lg:w-1/2 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle my-7">
                        <time className="text-red-700 lg:border-dotted lg:border-2 text-xs lg:text-sm lg:py-8 lg:m-2 p-1 rounded-full border-red-700">9AM - 10AM</time>
                    </div>
                    <div className="timeline-start mt-8 mb-10">
                        <div className="card lg:w-96 lg:h-44 w-72 h-48 bg-base-100 shadow-xl shadow-red-200">

                            <div className="card-body items-center text-center p-2">
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <h2 className="card-title font-bold text-sm">First Macintosh computer</h2>
                                <p className="text-sm">laborum magni neque reiciendis voluptatibus perspiciatis eos explicabo expedita odio cum nobis?</p>

                            </div>
                        </div>
                    </div>
                    <hr className="ms-0" />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle my-7">
                        <time className="text-red-700 lg:border-dotted lg:border-2 text-xs lg:text-sm lg:py-8 lg:m-2 p-1 rounded-full border-red-700">9AM - 10AM</time>

                    </div>
                    <div className="timeline-end mt-8  mb-10">
                        <div className="card lg:w-96 lg:h-44 w-72 h-48 bg-base-100 shadow-xl shadow-red-200">

                            <div className="card-body p-2 items-center text-center">
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <h2 className="card-title font-bold text-sm">Imac</h2>
                                <p className="text-sm">laborum magni neque reiciendis voluptatibus perspiciatis eos explicabo expedita odio cum nobis?</p>

                            </div>
                        </div>                              </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle my-7">
                        <time className="text-red-700 lg:border-dotted lg:border-2 text-xs lg:text-sm lg:py-8 lg:m-2  p-1 rounded-full border-red-700">9AM - 10AM</time>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <div className="card lg:w-96 lg:h-44 w-72 h-48 bg-base-100 shadow-xl shadow-red-200">

                            <div className="card-body p-2 items-center text-center">
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <h2 className="card-title font-bold text-sm">Ipod</h2>
                                <p className="text-sm">laborum magni neque reiciendis voluptatibus perspiciatis eos explicabo expedita odio cum nobis?</p>

                            </div>
                        </div>                              </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle my-7">
                        <time className="text-red-700 lg:border-dotted lg:border-2 text-xs lg:text-sm lg:py-8 lg:m-2  p-1 rounded-full border-red-700">9AM - 10AM</time>
                    </div>
                    <div className="timeline-end mb-10">
                        <div className="card lg:w-96 lg:h-44 w-72 h-48 bg-base-100 shadow-xl shadow-red-200">

                            <div className="card-body p-2 items-center text-center">
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <h2 className="card-title font-bold text-sm">First Macintosh computer</h2>
                                <p className="text-sm">laborum magni neque reiciendis voluptatibus perspiciatis eos explicabo expedita odio cum nobis?</p>

                            </div>
                        </div>                              </div>
                    <hr />
                </li>

            </ul>




        </div>
    );
};

export default EventDetailsOffline;