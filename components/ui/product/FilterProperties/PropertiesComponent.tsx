function PropertiesComponent({ title,count }: { title:string,count:number }) {

  return (
    <div className='flex my-[0.5px] items-center gap-[3px] text-[#555555] text-sm'>
    <label className="relative flex items-center  rounded-full cursor-pointer" htmlFor="link">
    <input type="checkbox"
      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none  border border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#555555] checked:bg-white checked:before:bg-white hover:before:opacity-10"
      id="link" />
    <span
      className="absolute text-[#555555] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
        stroke="currentColor" stroke-width="1">
        <path fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"></path>
      </svg>
    </span>
  </label>
      <label htmlFor="vehicle1" className='text-sm ml-1'> {title}</label>
      <p className='text-xs'>({count})</p>
    </div>
  )
} 

export default PropertiesComponent;