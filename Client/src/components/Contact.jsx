import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import {FiPhoneCall} from 'react-icons/fi'
import {FcCallback} from 'react-icons/fc'
import {MdEmail} from 'react-icons/md'
const Contact = () => {
    return (
        <>
            <Container style={{ marginTop: '50px' }}>
                <Row>
                    <Col md={6}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed cumque minima voluptatum aliquam unde eaque? Eum dolores impedit iure veniam, assumenda adipisci aut et similique corrupti ratione illum vitae nihil voluptas dolorem omnis debitis fugiat possimus voluptatibus, illo excepturi deleniti velit alias. Perferendis dolore tempore labore laborum molestias ab explicabo pariatur ut quia quidem odit non possimus placeat suscipit ratione eveniet, voluptates officiis laboriosam! Adipisci, amet expedita commodi quam necessitatibus sapiente. Veniam aut pariatur quia quaerat porro vitae ullam dolor voluptatum cum vel molestiae quos, soluta repudiandae facilis beatae tempora nesciunt placeat repellendus nobis, nam esse. Eum odio hic facere. Laboriosam minima nam expedita odio fugiat non fuga nemo recusandae vel. Mollitia distinctio recusandae alias similique labore quisquam tempore autem esse soluta aut fugit sint, repudiandae quam, debitis laudantium tenetur eius atque nihil veniam accusantium aspernatur natus aliquam inventore eaque? Autem sapiente similique quod eius ducimus quidem, nam, numquam enim minima omnis ea optio! Voluptatibus illo excepturi cupiditate debitis, suscipit rerum possimus, fuga inventore reiciendis, quae veniam numquam aperiam ex vel minima fugit perferendis odio sequi sed architecto assumenda accusantium. Eum eveniet molestias velit consequatur! Illo provident, iusto quo optio nesciunt atque, ducimus dolor sequi, molestias ipsum voluptas ea libero!
                        </p>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th className="bg-warning text-center" colSpan={3}>--- Contact Details ---</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><FiPhoneCall/></td>
                                    <td>Phone</td>
                                    <td>9115656565</td>
                                </tr>
                                <tr>
                                    <td><FcCallback/></td>
                                    <td>Call</td>
                                    <td>9115656958</td>
                                </tr>
                                <tr>
                                    <td><MdEmail/></td>
                                    <td>Email</td>
                                    <td>pizzacafe@gmail.com</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact
