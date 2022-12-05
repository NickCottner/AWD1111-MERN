import './App.css';
import Title from './components/title'
import Form from './components/form';
import Section from './components/section';
import List from './components/list'
function App() {
  return (
    <div className='ui container center aligned'>
      <Section>
        <Title />
      </Section>
      
      <Section>
        <Form />
      </Section>

      <Section>
        <List />
      </Section>
    </div>
  );
}

export default App;
