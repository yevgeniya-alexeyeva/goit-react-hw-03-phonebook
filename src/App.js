import { Component } from "react";
import shortid from "shortid";
import "./App.css";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "4591256" },
      { id: "id-2", name: "Hermione Kline", number: "4438912" },
      { id: "id-3", name: "Eden Clements", number: "6451779" },
      { id: "id-4", name: "Annie Copeland", number: "2279126" },
    ],
    filter: "",
  };

  saveNewContact = (e, name, number) => {
    e.preventDefault();

    this.state.contacts.some((item) => item.name === name)
      ? alert(`${name} is already in contacts`)
      : this.setState((prevState) => {
          return {
            contacts: [
              {
                id: shortid.generate(),
                name: name,
                number: number,
              },
              ...prevState.contacts,
            ],
          };
        });
    e.currentTarget.reset();
  };

  removeContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      };
    });
  };

  filterHandler = (e) => {
    const { value } = e.target;
    this.setState({ filter: value.toLowerCase().trim() });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return isNaN(filter)
      ? contacts.filter((item) => item.name.toLowerCase().includes(filter))
      : contacts.filter((item) => item.number.includes(filter));
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Form onSubmit={this.saveNewContact} />
        <h2>Contacts</h2>
        <Filter onInput={this.filterHandler} />
        <ContactList
          contactList={this.filterContacts()}
          onDelete={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
