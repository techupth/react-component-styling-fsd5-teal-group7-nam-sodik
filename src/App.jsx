import "./App.css";
import { Button } from "./components/Button";
import { Alert } from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button /> {/* สามารถตั้งชื่อ key เพื่อนำไปใช้กับ prop ได้ */}
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert /> {/* สามารถตั้งชื่อ key เพื่อนำไปใช้กับ prop ได้ */}
      </div>
    </div>
  );
}

export default App;
