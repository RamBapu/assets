// Passing components as children
function Dialog(props) {
  return <div className="dialog">{props.children}</div>;
}

function WelcomeDialog() {
  return (
    <Dialog>
      <h1>Welcome</h1>
      <p>Thank you for visiting our spacecraft!</p>
    </Dialog>
  );
}

// Passing components as props
function SplitPane(props) {
  return (
    <div className="split-pane">
      <div className="split-pane-left">{props.left}</div>
      <div className="split-pane-right">{props.right}</div>
    </div>
  );
}

function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}
