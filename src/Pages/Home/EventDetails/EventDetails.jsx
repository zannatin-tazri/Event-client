import { Link } from "react-router-dom";




const EventDetails = () => {



    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold mt-32 m-16">Schedule Plan</h1>

            <div role="tablist" className="mx-20 tabs tabs-bordered place-content-center">

                <input type="radio" name="my_tabs_1" role="tab"
                    className="lg:mx-16 lg:ms-28 lg:px-16 md:ms-72 h-14 font-bold lg:h-20 lg:text-xl px-6 lg:font-semibold border-indigo-200 
                rounded-lg shadow-xl text-xs shadow-indigo-200 align-middle tab text-black ring-2 
                hover:bg-gradient-to-r from-purple-600 to-red-600" aria-label="12 April 2024" checked />

                <div role="tabpanel" className="tab-content lg:mx-auto p-10">
                    <ul className="md:ms-80 lg:mx-auto w-1/5 lg:w-1/2 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        <li>
                            <div className="timeline-middle my-7">
                                <time className="hidden sm:block text-red-700 lg:border-dotted lg:border-2 text-xs lg:text-sm lg:py-8 lg:m-2 p-1 rounded-full border-red-700">9AM - 10AM</time>
                            </div>
                            <div className="timeline-start mt-8 mb-10">
                                <div className="card lg:w-96 lg:h-44 w-80 h-48 bg-base-100 shadow-lg shadow-red-200">

                                    <div className="card-body items-center text-center p-2 relative">
                                        <div className="lg:hidden absolute ">
                                            <p className="text-xs p-3 text-white my-2 me-48 border rounded-lg bg-gradient-to-r from-purple-600 to-red-600">10 AM - 11 AM</p>
                                        </div>
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
                            <hr className="hidden sm:block" />
                        </li>
                        <li>
                            <hr className="hidden sm:block" />
                            <div className="timeline-middle my-7">
                                <time className="hidden sm:block text-red-700 lg:border-dotted lg:border-2 text-xs lg:text-sm lg:py-8 lg:m-2 p-1 rounded-full border-red-700">9AM - 10AM</time>

                            </div>
                            <div className="timeline-end mt-8  mb-10">
                                <div className="card lg:w-96 lg:h-44 w-80  h-48 bg-base-100 shadow-lg shadow-red-200">

                                    <div className="card-body p-2 items-center text-center">
                                    <div className="lg:hidden absolute ">
                                            <p className="text-xs p-3 text-white my-2 me-48 border rounded-lg bg-gradient-to-r from-purple-600 to-red-600">10 AM - 11 AM</p>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-16 rounded-full">
                                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                        <h2 className="card-title font-bold text-sm">Imac</h2>
                                        <p className="text-sm">laborum magni neque reiciendis voluptatibus perspiciatis eos explicabo expedita odio cum nobis?</p>

                                    </div>
                                </div>
                            </div>
                            <hr className="hidden sm:block" />
                        </li>
                        <li>
                            <hr className="hidden sm:block" />
                            <div className="timeline-middle my-7">
                                <time className="hidden sm:block text-red-700 lg:border-dotted lg:border-2 text-xs lg:text-sm lg:py-8 lg:m-2  p-1 rounded-full border-red-700">9AM - 10AM</time>
                            </div>
                            <div className="timeline-start md:text-end mb-10">
                                <div className="card lg:w-96 lg:h-44 w-80 h-48 bg-base-100 shadow-lg shadow-red-200">

                                    <div className="card-body p-2 items-center text-center">
                                    <div className="lg:hidden absolute ">
                                            <p className="text-xs p-3 text-white my-2 me-48 border rounded-lg bg-gradient-to-r from-purple-600 to-red-600">10 AM - 11 AM</p>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-16 rounded-full">
                                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                        <h2 className="card-title font-bold text-sm">Ipod</h2>
                                        <p className="text-sm">laborum magni neque reiciendis voluptatibus perspiciatis eos explicabo expedita odio cum nobis?</p>

                                    </div>
                                </div>
                            </div>
                            <hr className="hidden sm:block" />
                        </li>
                        <li>
                            <hr className="hidden sm:block" />
                            <div className="timeline-middle my-7">
                                <time className="hidden sm:block text-red-700 lg:border-dotted lg:border-2 text-xs lg:text-sm lg:py-8 lg:m-2  p-1 rounded-full border-red-700">9AM - 10AM</time>
                            </div>
                            <div className="timeline-end mt-10">
                                <div className="card lg:w-96 lg:h-44 w-80 h-48 bg-base-100 shadow-lg shadow-red-200">

                                    <div className="card-body p-2 items-center text-center">
                                    <div className="lg:hidden absolute ">
                                            <p className="text-xs p-3 text-white my-2 me-48 border rounded-lg bg-gradient-to-r from-purple-600 to-red-600">10 AM - 11 AM</p>
                                        </div>
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

                        </li>

                    </ul>
                </div>

                <input type="radio" name="my_tabs_1" role="tab"
                    className="lg:mx-16 ms-20 lg:px-16 md:ms-72 font-bold h-14 text-xs lg:h-20 lg:text-xl px-6 lg:font-semibold border-indigo-200 
                rounded-lg shadow-xl shadow-indigo-200 align-middle tab text-black ring-2 
                hover:bg-gradient-to-r from-purple-600 to-red-600" aria-label="13 April 2024" />

                <div role="tabpanel" className="tab-content  lg:mx-auto p-10">
                    <ul className="ms-0 me-36 md:ms-80 lg:mx-auto w-1/5 lg:w-1/2 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        <li >
                            <div className="timeline-middle my-7">
                                <time className="hidden sm:block text-red-700 lg:border-dotted lg:border-2 text-xs lg:text-sm lg:py-8 lg:m-2 p-1 rounded-full border-red-700">9AM - 10AM</time>
                            </div>
                            <div className="timeline-start mt-8 mb-10">
                                <div className="card lg:w-96 lg:h-44 w-80 h-48 bg-base-100 shadow-lg shadow-red-200">

                                    <div className="card-body items-center text-center p-2">
                                    <div className="lg:hidden absolute ">
                                            <p className="text-xs p-3 text-white my-2 me-48 border rounded-lg bg-gradient-to-r from-purple-600 to-red-600">10 AM - 11 AM</p>
                                        </div>
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
                            <hr className="hidden sm:block" />
                        </li>
                        <li>
                            <hr className="hidden sm:block" />
                            <div className="timeline-middle my-7">
                                <time className="hidden sm:block text-red-700 lg:border-dotted lg:border-2 text-xs lg:text-sm lg:py-8 lg:m-2 p-1 rounded-full border-red-700">9AM - 10AM</time>

                            </div>
                            <div className="timeline-end mt-8  mb-10">
                                <div className="card lg:w-96 lg:h-44 w-80 h-48 bg-base-100 shadow-lg shadow-red-200">

                                    <div className="card-body p-2 items-center text-center">
                                    <div className="lg:hidden absolute ">
                                            <p className="text-xs p-3 text-white my-2 me-48 border rounded-lg bg-gradient-to-r from-purple-600 to-red-600">10 AM - 11 AM</p>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-16 rounded-full">
                                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                        <h2 className="card-title font-bold text-sm">Imac</h2>
                                        <p className="text-sm">laborum magni neque reiciendis voluptatibus perspiciatis eos explicabo expedita odio cum nobis?</p>

                                    </div>
                                </div>                              </div>
                            <hr className="hidden sm:block" />
                        </li>
                        <li>
                            <hr className="hidden sm:block" />
                            <div className="timeline-middle my-7">
                                <time className="hidden sm:block text-red-700 lg:border-dotted lg:border-2 text-xs lg:text-sm lg:py-8 lg:m-2  p-1 rounded-full border-red-700">9AM - 10AM</time>
                            </div>
                            <div className="timeline-start md:text-end mb-10">
                                <div className="card lg:w-96 lg:h-44 w-80 h-48 bg-base-100 shadow-lg shadow-red-200">

                                    <div className="card-body p-2 items-center text-center">
                                    <div className="lg:hidden absolute ">
                                            <p className="text-xs p-3 text-white my-2 me-48 border rounded-lg bg-gradient-to-r from-purple-600 to-red-600">10 AM - 11 AM</p>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-16 rounded-full">
                                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                        <h2 className="card-title font-bold text-sm">Ipod</h2>
                                        <p className="text-sm">laborum magni neque reiciendis voluptatibus perspiciatis eos explicabo expedita odio cum nobis?</p>

                                    </div>
                                </div>                              </div>
                            <hr className="hidden sm:block" />
                        </li>
                        <li>
                            <hr className="hidden sm:block" />
                            <div className="timeline-middle my-7">
                                <time className="hidden sm:block text-red-700 lg:border-dotted lg:border-2 text-xs lg:text-sm lg:py-8 lg:m-2  p-1 rounded-full border-red-700">9AM - 10AM</time>
                            </div>
                            <div className="timeline-end mt-10">
                                <div className="card lg:w-96 lg:h-44 w-80 h-48 bg-base-100 shadow-lg shadow-red-200">

                                    <div className="card-body p-2 items-center text-center">
                                    <div className="lg:hidden absolute ">
                                            <p className="text-xs p-3 text-white my-2 me-48 border rounded-lg bg-gradient-to-r from-purple-600 to-red-600">10 AM - 11 AM</p>
                                        </div>
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
                        </li>

                    </ul>
                </div>

                <input type="radio" name="my_tabs_1" role="tab"
                    className="lg:mx-16 ms-20 lg:px-16 md:ms-72 lg:me-28 font-bold h-14 text-xs lg:h-20 px-6 lg:text-xl lg:font-semibold border-indigo-200 
                rounded-lg shadow-xl shadow-indigo-200 align-middle tab text-black ring-2 
                hover:bg-gradient-to-r from-purple-600 to-red-600" aria-label="14 April 2024" />

                <div role="tabpanel" className="tab-content lg:mx-auto p-10">
                    <ul className=" me-36 md:ms-80 lg:mx-auto w-1/5 lg:w-1/2 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        <li>
                            <div className="timeline-middle my-7">
                                <time className="hidden sm:block text-red-700 lg:border-dotted lg:border-2 text-xs lg:text-sm lg:py-8 lg:m-2 p-1 rounded-full border-red-700">9AM - 10AM</time>
                            </div>
                            <div className="timeline-start mt-8 mb-10">
                                <div className="card lg:w-96 lg:h-44 w-80 h-48 bg-base-100 shadow-lg shadow-red-200">

                                    <div className="card-body items-center text-center p-2">
                                    <div className="lg:hidden absolute ">
                                            <p className="text-xs p-3 text-white my-2 me-48 border rounded-lg bg-gradient-to-r from-purple-600 to-red-600">10 AM - 11 AM</p>
                                        </div>
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
                            <hr className="hidden sm:block" />
                        </li>
                        <li>
                            <hr className="hidden sm:block" />
                            <div className="timeline-middle my-7">
                                <time className="hidden sm:block text-red-700 lg:border-dotted lg:border-2 text-xs lg:text-sm lg:py-8 lg:m-2 p-1 rounded-full border-red-700">9AM - 10AM</time>

                            </div>
                            <div className="timeline-end mt-8  mb-10">
                                <div className="card lg:w-96 lg:h-44 w-80 h-48 bg-base-100 shadow-lg shadow-red-200">

                                    <div className="card-body p-2 items-center text-center">
                                    <div className="lg:hidden absolute ">
                                            <p className="text-xs p-3 text-white my-2 me-48 border rounded-lg bg-gradient-to-r from-purple-600 to-red-600">10 AM - 11 AM</p>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-16 rounded-full">
                                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                        <h2 className="card-title font-bold text-sm">Imac</h2>
                                        <p className="text-sm">laborum magni neque reiciendis voluptatibus perspiciatis eos explicabo expedita odio cum nobis?</p>

                                    </div>
                                </div>                              </div>
                            <hr className="hidden sm:block" />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle my-7">
                                <time className="hidden sm:block text-red-700 lg:border-dotted lg:border-2 text-xs lg:text-sm lg:py-8 lg:m-2  p-1 rounded-full border-red-700">9AM - 10AM</time>
                            </div>
                            <div className="timeline-start md:text-end mb-10">
                                <div className="card lg:w-96 lg:h-44 w-80 h-48 bg-base-100 shadow-lg shadow-red-200">

                                    <div className="card-body p-2 items-center text-center">
                                    <div className="lg:hidden absolute ">
                                            <p className="text-xs p-3 text-white my-2 me-48 border rounded-lg bg-gradient-to-r from-purple-600 to-red-600">10 AM - 11 AM</p>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-16 rounded-full">
                                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                        <h2 className="card-title font-bold text-sm">Ipod</h2>
                                        <p className="text-sm">laborum magni neque reiciendis voluptatibus perspiciatis eos explicabo expedita odio cum nobis?</p>

                                    </div>
                                </div>                              </div>
                            <hr className="hidden sm:block" />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle my-7">
                                <time className="hidden sm:block text-red-700 lg:border-dotted lg:border-2 text-xs lg:text-sm lg:py-8 lg:m-2  p-1 rounded-full border-red-700">9AM - 10AM</time>
                            </div>
                            <div className="timeline-end mt-10">
                                <div className="card lg:w-96 lg:h-44 w-80 h-48 bg-base-100 shadow-lg shadow-red-200">

                                    <div className="card-body p-2 items-center text-center">
                                    <div className="lg:hidden absolute ">
                                            <p className="text-xs p-3 text-white my-2 me-48 border rounded-lg bg-gradient-to-r from-purple-600 to-red-600">10 AM - 11 AM</p>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-16 rounded-full">
                                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                        <h2 className="card-title font-bold text-sm">First Macintosh computer</h2>
                                        <p className="text-sm">laborum magni neque reiciendis voluptatibus perspiciatis eos explicabo expedita odio cum nobis?</p>

                                    </div>
                                </div>                              </div>

                        </li>

                    </ul>
                </div>
            </div>

            <Link to='/form'><button className="btn bg-black text-white mt-6 hover:bg-red-500">Buy Ticket</button></Link>

        </div>
    );
};

export default EventDetails;