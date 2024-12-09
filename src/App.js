import ContainerBox from "./components/ContainerBox/ContainerBox";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <ContainerBox />
      </TaskProvider>
    </div>
  );
}

export default App;
