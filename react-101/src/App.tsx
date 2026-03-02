import ListGroup from "./components/listGroup";

const listItems: string[] = [
    "New York",
    "Paris",
    "London",
    "Tokyo",
    "Sydney",
  ];

function App() {
  return (
    <div>
      <ListGroup items={listItems} heading="MyCities"/>
    </div>
  );
}

export default App;