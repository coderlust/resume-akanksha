import React from 'react'
import PropTypes from 'prop-types'

const About = ({ data }) => {
  const showData = (data) => {
    if (data) {
      return (
        <div>
          <div className="three columns">
            <img
              className="profile-pic"
              src={'images/' + data.image}
              alt="Akanksha"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{data.bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{data.name}</span>
                  <br />
                  <span>
                    {data.address.street}
                    <br />
                    {data.address.city} {data.address.state}, {data.address.zip}
                  </span>
                  <br />
                  <span>{data.phone}</span>
                  <br />
                  <span>{data.email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a
                    download
                    href={`/${data.resumedownload}`}
                    className="button"
                  >
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <section id="about">
      <div className="row">{showData(data)}</div>
    </section>
  )
}

About.propTypes = {
  data: PropTypes.object
}

export default About
