import React, { useEffect, useState } from 'react'
import ModalVideo from 'react-modal-video'
import { Link } from 'react-router-dom'

const About = () => {
    const [isOpen, setOpen] = useState(false)
    useEffect(() => {
        document.body.classList.toggle('modal-open', isOpen);
    }, [isOpen])

    return (
        <section className="aboutus-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 align-self-center">
                        <div className="ot-heading">
                            <span><i className="fas fa-building"></i> about company</span>
                            <h2 className="main-heading">Your Partner for <br /> Software Innovation</h2>
                        </div>
                        <p>Infoicon Technologies is a next generation global leader in IT industry enabling 5000+ clients from different countries viz U.S.A, Australia, Canada, and Europe like:
                            <strong>Switzerland, Germany, France, Denmark, Netherlands, Spain, Sweden, United Kingdom</strong> ….etc. to maneuver their digital transformation.</p>
                        <p>With over 12 years of experience, we proficiently navigate our clients throughout their digital journey.</p>
                        <p>All we can do by empowering the venture with our unmatched solution that helps prioritize the execution of the revolution. We also strengthen the business via employing innovative strategies and always-on leaning approach to deliver customer delight.</p>

                    </div>

                    <div className="col-lg-6 col-md-12 align-self-center">
                        <div className="about-right">
                            <div className="home-about-video d-flex justify-content-center">
                                <div className="video-btn align-self-center">
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="q5sURR9fvvk" onClose={() => setOpen(false)} />

                                    <Link className="btn-play" onClick={() => setOpen(true)}>
                                        <span className="circle-1"></span>
                                        <span className="circle-2"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About