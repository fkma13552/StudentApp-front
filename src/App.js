import './App.css';
import NavigationBar from "./NavigationBar"
import {Switch, Route} from "react-router-dom"
import StudentsPage from "./StudentsPage"
import StudentCreateForm from "./StudentCreateForm"
import StudentInfo from "./StudentInfo"
import CourseAddPage from "./CourseAddPage"

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
          <Route path="/students">
              <StudentsPage/>
          </Route>
          <Route path="/studentCreate">
              <StudentCreateForm />
          </Route>
          <Route path="/student/:id">
              <StudentInfo />
          </Route>
          <Route path="/courseCreate">
              <CourseAddPage />
          </Route>
          courseCreate
      </Switch>
    </div>
  );
}

export default App;
