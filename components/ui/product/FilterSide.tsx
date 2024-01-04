import FilterList from './FilterList'
import { FilterPropertiesElements } from './FilterProperties/FilterPropertiesElement'

export const FilterSide = () => {

  console.log("kdkdkd")
  return (
    <div className='bg-[#dddddd55] p-1 w-[20%]'>
        <FilterList FilterElement={FilterPropertiesElements.Gender}/>
    </div>
  )
}
