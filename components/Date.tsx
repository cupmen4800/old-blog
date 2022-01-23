import {parseISO, format} from 'date-fns'
import { NextPage } from 'next'
const Date:NextPage<{dateString:string}> = ({ dateString }:{dateString:string}) => {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'yyyy LLLL d,')}</time>
}

export default Date