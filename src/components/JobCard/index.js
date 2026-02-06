import {AiFillStar} from 'react-icons/ai' // For the star rating icon
import {IoLocationSharp} from 'react-icons/io5' // For the location icon
import {BsFillBriefcaseFill} from 'react-icons/bs' // For the briefcase icon
import {Link} from 'react-router-dom' // For routing
import './index.css' // For styling

const JobCard = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
    id,
  } = jobDetails

  return (
    <li className="job-card">
      <Link to={`/jobs/${id}`} className="job-card-link">
        <div className="logo-title-container-card">
          <img
            src={companyLogoUrl}
            alt="company logo"
            className="company-logo-card"
          />
          <div className="title-rating-container-card">
            <h1 className="job-title-card">{title}</h1>
            <div className="rating-container-card">
              <AiFillStar className="star-icon-card" />
              <p className="rating-number-card">{rating}</p>
            </div>
          </div>
        </div>

        <div className="location-package-container-card">
          <div className="icon-type-container-card">
            <IoLocationSharp className="type-icon" />
            <p className="type-text">{location}</p>
          </div>
          <div className="icon-type-container-card">
            <BsFillBriefcaseFill className="type-icon" />
            <p className="type-text">{employmentType}</p>
          </div>
          <p className="package-text">{packagePerAnnum}</p>
        </div>
        <hr className="seperator" />

        <h1 className="description-heading-card">Description</h1>
        <p className="job-description-card">{jobDescription}</p>
      </Link>
    </li>
  )
}

export default JobCard
