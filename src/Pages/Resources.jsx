import Blog from "../components/ResourcePageBlogs";
import img from "../images/resource.png"
function Resources() {
    return (
      <>
      <div className="w-full h-72 md:h-[450px] overflow-hidden">
              <img
                src= {img}
                alt="Container Ship"
                className="w-full h-full object-cover"
              />
      </div>
      <div className="w-[100%] sm:w-[90%] m-auto flex flex-col sm:flex-row my-0 sm:my-6 px-10 justify-between">
        <div className=" text-left my-6">
          <h2 className="text-orange-600 font-semibold uppercase text-lg">
            BLOGS
          </h2>
          <h1 className="text-3xl md:text-4xl  mt-2 ">
            What's Hapening in the Industry
          </h1>
        </div>

          <div>
            <p className=" text-justify mt-4 max-w-2xl text-gray-500 mx-auto md:mx-0"
            style={{ fontFamily: 'Roboto' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At amet error delectus pariatur illo, numquam dignissimos voluptate sequi totam provident accusamus. Animi, recusandae velit ea eaque ad quas unde dignissimos ex adipisci incidunt, inventore fuga amet? Quaerat perferendis, nisi ut perspiciatis molestiae error expedita impedit illum omnis, porro, quasi veniam!
            </p>
          </div>
          </div>
      <Blog />
      </>
    );
  }
  
  export default Resources;