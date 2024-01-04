import { cn } from '@/utils/cn';
import { FilterPropertiesElement } from './FilterProperties/FilterPropertiesElement'
import { Playfair } from 'next/font/google'

const palyfair = Playfair({ subsets: ['latin'] });
function FilterList({ FilterElement }: { FilterElement: FilterPropertiesElement }) {

    const { title, iconDown: IconDown, delete: DeleteButton, iconUp: IconUp } = FilterElement.designerLiElement;

    const Properties = FilterElement.propertiesComponent;


  return (
      <div className='border-t border-b'>
          <div className='flex items-center justify-between'>
            <div className='flex gap-3 items-center'>
              <IconDown className="w-4 h-4" />
              <h3 className={cn(palyfair.className,' text-md font-bold uppercase')}>{title}</h3>
            </div>
              <DeleteButton/>
          </div>
          <Properties listInstance={{title:'Men',count:30}} />

      </div>
  )
}

export default FilterList