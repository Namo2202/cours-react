import { MessagesInt } from "../model";

type Props = {
    mess: MessagesInt,
    messData: MessagesInt[],
    setMessData: React.Dispatch<React.SetStateAction<MessagesInt[]>>
}
const Message = ({ mess, messData, setMessData}: Props) => {
    const dateFormater = (date:number) => {
        return new Date(date).toLocaleDateString("fr-FR", {day:"numeric", month:"long", year:"numeric"})
    }

    const handleDelete = () => {
        setMessData(messData.filter((el)=> el.id !== mess.id))
    }

    return (
       <div className="message-container">
        <p>{mess.message}</p>
        <h5>{dateFormater(mess.date)}</h5>
        <span id="delete" onClick={()=> handleDelete()}>&#1008;</span>
       </div>
    );
};

export default Message;