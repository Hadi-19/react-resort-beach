import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer, FaInstagram, FaFacebookF} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktail",
                info:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, nisi!"
            },
            {
                icon:<FaHiking/>,
                title:"endless hiking",
                info:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, nisi!"
            },
            {
                icon:<FaShuttleVan/>,
                title:"free shuttle",
                info:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, nisi!"
            },
            {
                icon:<FaBeer/>,
                title:"strongest beer",
                info:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, nisi!"
            },{
                icon:<FaFacebookF/>,
                title:"facebook",
                info:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, nisi!"
            },{
                icon:<FaInstagram/>,
                title:"instgram",
                info:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, nisi!"
            }
        ]
    }
   

    render() {
        return (
            <section className="services">

                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return <article className="service" key={index}>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
               
            </section>
            
        )
    }
}
