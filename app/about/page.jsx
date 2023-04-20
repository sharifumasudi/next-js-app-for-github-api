import React from 'react'

export const metadata = {
  title: 'About us',
};

const AboutPage = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='card mt-5'>
            <div className='card-header'>
              <h2 className='text-center'>This is About page</h2>
            </div>
            <div className='card-body'>
            <p>
      
              Hello! I am <strong>Sharifu .H. Masudi</strong>. 
              <strong className='text-primary'> Web Developer, System developer Graphic Designer and Mobile App developer</strong>.
            </p>
            <p>
              Innovative tech professional with 3+ years of experience working as a computer programmer. Capable of working with a variety of technology and software solutions and managing databases. Valuable team member who has experience diagnosing problems and developing solutions. Extensive expertise in networking systems and working with mainframe computers. Talented leader with unique ideas and a history of successful contributions in the field.
            </p>
            <p>
              <h4>Basic Information</h4>
              <strong>AGE: 26yrs</strong>
              <hr/>
              <strong>EMAIL: sharifumasudi66@gmail.com</strong>
              <hr/>
              <strong>PHONE:+255622183130</strong>
              <hr/>
              <strong>ADDRESS:
              P.O.BOX 3000, Morogoro Tanzania
              </strong>
              <hr/>
              <strong>
                LANGUAGE:English, Swahili
              </strong>
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage