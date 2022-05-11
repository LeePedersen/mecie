import '../css/about.css';
import PageHeader from "./pageheader";

function About() {
  return(
    <>
      <PageHeader title="about" />
      <div className="about">
        <p className="text">this is about mecie's art!</p>
        <p className="text">this is more about mecie's art!</p>
      </div>
    </>
  )
}

export default About;
