import Header from "./components/Header/Header"
import TopContainer from "./components/TopContainer/TopContainer";
import SkillContainer from "./components/SkillContainer/SkillContainer";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import AchievementsContainer from "./components/AchievementsContainer/AchievementsContainer";
import Contact from "./components/Contact/Contact";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <TopContainer/>
      <SkillContainer/>
      <ProjectContainer/>
      <AchievementsContainer/> 
      <Contact/>
    </div>
  );
}

export default App;
