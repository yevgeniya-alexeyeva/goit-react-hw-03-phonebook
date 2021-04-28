import Contact from "../Contact";
import PropTypes from "prop-types";
import { itemList } from "./ContactList.module.css";

const ContactList = (props) => {
  const { contactList, onDelete } = props;
  return (
    <ul className={itemList}>
      {contactList.map((item) => {
        return <Contact item={item} key={item.id} onDelete={onDelete} />;
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
