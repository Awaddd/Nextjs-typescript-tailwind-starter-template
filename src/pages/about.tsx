import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => {
  return (
    <Main meta={<Meta />}>
      <h1 className="text-2xl font-bold">About</h1>
    </Main>
  )
};

export default About;
