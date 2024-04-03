import React from 'react'
import './FaqAccordion.css'
import Accordion from 'react-bootstrap/Accordion'

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className="container d-flex flex-column align-items-center">
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eaque, officiis illo dolore sed aperiam, explicabo a omnis animi, quia beatae rerum consequatur inventore ea perspiciatis vitae molestiae totam nobis!</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>First question ?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati harum adipisci hic voluptatem laborum, facere dolor accusantium quia expedita dolorum minima nulla, tempore ex autem odit labore dolore. Sed in unde totam quos ea, cum sunt ipsam numquam nesciunt.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Second question ?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati harum adipisci hic voluptatem laborum, facere dolor accusantium quia expedita dolorum minima nulla, tempore ex autem odit labore dolore. Sed in unde totam quos ea, cum sunt ipsam numquam nesciunt.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Third question ?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati harum adipisci hic voluptatem laborum, facere dolor accusantium quia expedita dolorum minima nulla, tempore ex autem odit labore dolore. Sed in unde totam quos ea, cum sunt ipsam numquam nesciunt.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='3'>
                    <Accordion.Header>Fourth question ?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati harum adipisci hic voluptatem laborum, facere dolor accusantium quia expedita dolorum minima nulla, tempore ex autem odit labore dolore. Sed in unde totam quos ea, cum sunt ipsam numquam nesciunt.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion