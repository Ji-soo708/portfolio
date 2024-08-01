import Toolbar from '../components/Toolbar';
import BibbiImage from '../assets/svg/bibbi-project.svg';
import ProjectHeader from '../components/ProjectHeader';

function Bibbi() {
  return (
  <div>
    <Toolbar />
    <ProjectHeader imageSrc={BibbiImage} text="bibbi" />
  </div>
  );
}
export default Bibbi;
