import PropTypes from "prop-types";
import { button, contactItem } from "./Contact.module.css";

const Contact = (props) => {
  const { item, onDelete } = props;
  return (
    <li className={contactItem}>
      <span>
        {item.name}: {item.number}
      </span>
      <button
        className={button}
        type="button"
        onClick={() => onDelete(item.id)}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  item: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
};

export default Contact;
