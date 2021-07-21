import React from 'react';
import { CgWebsite } from "react-icons/cg";
import { AiOutlineShop } from "react-icons/ai";
import { FaSearch, FaTools } from "react-icons/fa";
import ButtonContact from '../ButtonContact';


const ServicesSection = () => {
    return (
        <>
            <section id="services" style={{backgroundColor:"#0D355D"}}>
                <div>
                    <h2>Services</h2>
                </div>

                <div>

                    <div>
                        <div>
                            <CgWebsite className="services-icon"/>
                        </div>
                        <h4>
                            WEBSITE DEVELOPMENT
                        </h4>
                        <p>
                            Custom built, modern and responsive website tailored to the specific needs of your business.
                        </p>
                    </div>

                    <div>
                        <div>
                            <AiOutlineShop className="services-icon"/>
                        </div>
                        <h4>
                            E-COMMERCE DEVELOPMENT
                        </h4>
                        <p>
                            Grow your brand, acquire loyal customers, gain new insights and additional revenue.
                        </p>
                    </div>

                    <div>
                        <div>
                            <FaTools className="services-icon2"/>
                        </div>
                        <h4>
                            WEBSITE MAINTENANCE
                        </h4>
                        <p>
                            Implement new features, update and fix bugs to improve security and performance.
                        </p>
                    </div>

                    <div>
                        <div>
                            <FaSearch className="services-icon2"/>
                        </div>
                        <h4>
                            SEARCH ENGINE OPTIMIZATION (SEO)
                        </h4>
                        <p>
                            Improve your website’s overall searchability, build trust and credibility, increase engagement, traffic and conversions.
                        </p>
                    </div>
                </div>

                <ButtonContact />

            </section>
        </>
    )
}

export default ServicesSection
