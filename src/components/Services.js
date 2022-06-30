import React from 'react'

import { useState, useEffect } from 'react'
import { FaAirFreshener, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
const Services = () => {
    const [services, setServices] = useState([
        {
            icon: <FaAirFreshener />,
            title: "free cocktails",
            info: "Cocktails for absolutely free!"
        },
        {
            icon: <FaHiking />,
            title: "Hiking",
            info: "Get hiking at the lowest rates"
        },
        {
            icon: <FaShuttleVan />,
            title: "Shuttle ",
            info: "Shuttle at the lowest prices "
        },
        {
            icon: <FaBeer />,
            title: "Exotic Beer",
            info: "Exotic wrold-class beer at the lowest ratese"
        }
    ])
    return (
        <div>
            <div className="services">
                <h3>Services</h3>
                <div className="services-center">
                    {services.map((service, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{service.icon}</span>
                                <h6>{service.title}</h6>
                                <p>{service.info}</p>
                            </article>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Services