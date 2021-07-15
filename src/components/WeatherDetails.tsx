import env from "../env";
import { OtherDetailsElement, TempElement } from "../styles/weather.d";

type Props = {
    otherDetail: (string | number),
    styleComponent: string
}

export const TodayDate = (): JSX.Element => {
    const today = new Date();
    return (
        <span>{env.weekDays[today.getDay()]} { today.getDate() }/{ today.getMonth() + 1 }/{ today.getFullYear() }</span>
    )
}

export const TempDetails = ({ otherDetail, styleComponent } : Props): JSX.Element => {
    return (
        styleComponent === "temp" ? <TempElement temp>{otherDetail}&#8451;</TempElement> : 
                                    <TempElement tempRange>{otherDetail}&#8451;</TempElement>
    )
}

export const Icon = ({ otherDetail } : Props): JSX.Element => {
    return (
        <div><img src={env.iconUrl + otherDetail + ".png"} alt={"Weather icon - " + otherDetail}/></div>
    )
}

export const OtherDetails = ({ otherDetail, styleComponent } : Props): JSX.Element => {
    return (
        styleComponent === "city" ? <OtherDetailsElement city>{otherDetail}</OtherDetailsElement> : 
                                <OtherDetailsElement main>{otherDetail}</OtherDetailsElement>
    )
}