import { formatDistanceToNow } from "date-fns"

export const timestempToRelative=(time)=>{
    return formatDistanceToNow(new Date(time), { addSuffix: true })
}