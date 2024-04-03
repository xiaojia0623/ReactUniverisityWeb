import React from 'react'
import './Courses.css'
import { Card } from 'react-bootstrap'
import ArtCourseImg from '../../utils/images/art-course.jpg'
import BusinessCourseImg from '../../utils/images/business-course.jpg'
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg'
import EducationCourseImg from '../../utils/images/education-course.jpg'
import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg'
import LawCourseImg from '../../utils/images/law-course.jpg'
import MusicCourseImg from '../../utils/images/music-course.jpg'
import SportCourseImg from '../../utils/images/sport-course.jpg'

import FaqAccordion from '../../Components/FaqAccordion/FaqAccordion'

const courses = [
  {
    id:1,
    img:[ArtCourseImg],
    title:'Art Courses',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis veniam quas beatae qui in ducimus, reiciendis repudiandae natus vel dolore nostrum cum labore dicta est.'
  },
  {
    id:2,
    img:[BusinessCourseImg],
    title:'Business Courses',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis veniam quas beatae qui in ducimus, reiciendis repudiandae natus vel dolore nostrum cum labore dicta est.'
  },
  {
    id:3,
    img:[ComputerScienceCourseImg],
    title:'Computer Science Courses',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis veniam quas beatae qui in ducimus, reiciendis repudiandae natus vel dolore nostrum cum labore dicta est.'
  },
  {
    id:4,
    img:[EducationCourseImg],
    title:'Education Courses',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis veniam quas beatae qui in ducimus, reiciendis repudiandae natus vel dolore nostrum cum labore dicta est.'
  },
  {
    id:5,
    img:[HealthcareCourseImg],
    title:'Healthcare Courses',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis veniam quas beatae qui in ducimus, reiciendis repudiandae natus vel dolore nostrum cum labore dicta est.'
  },
  {
    id:6,
    img:[LawCourseImg],
    title:'Law Courses',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis veniam quas beatae qui in ducimus, reiciendis repudiandae natus vel dolore nostrum cum labore dicta est.'
  },
  {
    id:7,
    img:[MusicCourseImg],
    title:'Music Courses',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis veniam quas beatae qui in ducimus, reiciendis repudiandae natus vel dolore nostrum cum labore dicta est.'
  },
  {
    id:8,
    img:[SportCourseImg],
    title:'Sport Courses',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis veniam quas beatae qui in ducimus, reiciendis repudiandae natus vel dolore nostrum cum labore dicta est.'
  }
]

function Courses() {
  return (
    <div className='courses-page'>
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className='text-center fw-semibold'>Our Courses</h1>
          <p className='text-center w-75 mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis veniam quas beatae qui in ducimus, reiciendis repudiandae natus vel dolore nostrum cum labore dicta est.
          </p>
        </div>
      </header>

      <div className="container py-5">
        <div className="row g-4">
          {courses.map((course)=> {
            return (
              <div key={course.id} className='col-lg-6'>
                <Card className='text-white shadow scale-hover-effect'>
                  <Card.Img src={course.img}/>
                  <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                    <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                    <Card.Text className='text-center'>{course.description}</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
      <div className="bg-dark text-light py-5">
          <FaqAccordion />
      </div>
    </div>
  )
}


export default Courses