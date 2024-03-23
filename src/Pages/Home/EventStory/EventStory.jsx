import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const EventStory = () => {
  return (
    <div className="mt-44 lg:max-w-4xl md:max-w-sm max-w-72 mx-auto">
      <h1 className=" my-14 text-center font-bold text-4xl">About Event</h1>
      <aside className="border-dashed border-2 border-red-300 rounded-lg">
        <section className="file-marker">
          <div className="flex items-center">
            <div className="sm:block hidden bg-white font-semibold lg:text-2xl text-indigo-500 text-lg  px-2 py-1 -mt-6 ml-32">
              Event Story
            </div>

          </div>
        </section>
        <p className="p-6 text-sm text-gray-600 shadow-sm shadow-red-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae debitis amet odio aspernatur assumenda voluptatibus molestiae quaerat enim
          veritatis hic sapiente perspiciatis, minus nemo delectus dolorem quas aliquid natus aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repudiandae eius doloremque aliquam, blanditiis voluptas! Iusto repudiandae tenetur repellat voluptatibus? Sint consectetur
          cumque repellat deleniti quae fuga assumenda dolores temporibus! 
          <div className="m-2">
          <FontAwesomeIcon className="text-indigo-500" icon={faCircleCheck} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
          <FontAwesomeIcon className="text-indigo-500" icon={faCircleCheck} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          <FontAwesomeIcon className="text-indigo-500" icon={faCircleCheck} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          <FontAwesomeIcon className="text-indigo-500" icon={faCircleCheck} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          <FontAwesomeIcon className="text-indigo-500" icon={faCircleCheck} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
         </div>
        </p>
      </aside>
    </div>


  );
}

export default EventStory;
