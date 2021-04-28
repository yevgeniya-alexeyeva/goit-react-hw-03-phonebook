import PropTypes from "prop-types";
import { Component } from "react";
import { form, label, input, button } from "./Form.module.css";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };
  getContactData = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    return (
      <form
        className={form}
        onSubmit={(e) =>
          this.props.onSubmit(e, this.state.name, this.state.number)
        }
      >
        <label className={label}>
          Name
          <input
            className={input}
            onInput={this.getContactData}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={label}>
          Number
          <input
            className={input}
            onInput={this.getContactData}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button className={button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
