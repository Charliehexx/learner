
import { Button } from '@/components/ui/button'
import { IN, US, NE, BV } from 'country-flag-icons/react/3x2'
const Footer = () => {
    return (
        <div className='flex items-center justify-evenly  pb-4'>
            <span className='flex font-bold'><IN title="India" className="w-16 h-10 rounded-xl " /> <i className='font-bold pt-2 pl-2'>INDIA</i></span>

            <US title="India" className="w-16 h-10 rounded-xl " />
            <NE title="India" className="w-16 h-10 rounded-xl" />
            <BV title="India" className="w-16 h-10 rounded-xl " />

        </div>
    )
}

export default Footer