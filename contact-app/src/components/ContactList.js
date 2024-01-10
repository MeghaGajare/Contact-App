
import ContactCard from "./ContactCard";

export default function ContactList(props) {
    console.log(props);
    const renderContactList = props.contacts.map(contact => {
        return (<>
            <ContactCard contact = {contact}></ContactCard>
        </>)
    });
    return <>
        <div className="container card">
            <div > My Contact List </div>
            {/* map() function: arrayData.map(item => item * 2); */}
            <hr />
            {renderContactList}
        </div>
    </>
}