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
      <div className="w-[94%] sm:w-[90%] m-auto flex flex-col sm:flex-row my-4 sm:my-6 md:my-8 px-4 sm:px-6 md:px-10 gap-6 justify-between">
        <div className="text-left my-4 sm:my-6">
          <h2 className="text-orange-600  uppercase text-base sm:text-lg tracking-wide">
            BLOGS
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl mt-2  leading-tight">
            What's Happening <br/>in the Industry
          </h1>
        </div>

          <div className="sm:self-center">
            <p className="text-justify mt-2 sm:mt-4 max-w-2xl text-gray-500 text-sm sm:text-base mx-auto md:mx-0"
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