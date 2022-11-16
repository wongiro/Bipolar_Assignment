import React from "react";
import Card from "./Card";
import contacts from "./contact";

function createCard(contact) {
  return (
    <div className="App">
    <Card
      name={contact.name}
      username={contact.username}
      email={contact.email}
      tel={contact.phone}
      company={contact.company.name}
      website={contact.website}
      street={contact.address.street}
      suite={contact.address.suite}
      city={contact.address.city}
      zip={contact.address.zipcode}
    />
    </div>
  );
}

function App() {
  return <div>{contacts.map(createCard)}</div>;
}

export default App;
