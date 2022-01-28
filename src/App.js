import { ListProvider } from "./providers/ListProvider";
import AppRouter from "./routes/AppRouter";


function App() {
  return (
    <ListProvider >
       <AppRouter />
    </ListProvider>
   
  );
}

export default App;
