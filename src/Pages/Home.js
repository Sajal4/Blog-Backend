import React,{ useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Card from '../Component/Card'
import CardHome from '../Component/CardHome'
import SmallCard from '../Component/SmallCard'

const Home = () => {

    const[data,setData]=useState([])
    useEffect(()=>{
        const url = "https://backends-blogapp.herokuapp.com/api/home";
        fetch(url).then(res => res.json())
            .then(res => setData(res)  )
    },[])
    return (

    <div>
    <div  className='Home'>
        <div className="home__container">
    <div className="home__first">
        <h1>Kerala:Gods Own Country</h1>
    </div>
        <div className="home__sec">
        <Link to="/fitness" > <img src="https://image.shutterstock.com/image-photo/muscular-arab-man-training-dumbbells-600w-1913720560.jpg" alt="not foun" /></Link>
        </div>
        </div>
        <div className="home__thir">
        <Link to='/technology'>   <img src="https://initialcommit.com/img/initialcommit/frontend-development-skills.jpg" alt="not found" /></Link>
        </div>
        <h1 style={{marginTop:"40px"}}>The Latest</h1>
        <hr style={{width:"200px",  thickness:"20px"}} />
        <div className='home__left left1'>
                    {
                        data.filter((article) => { return article.category === "bollywood" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                fulldescription = {n.description}
                                author={n.author}
                            />
                        ))
                    }
                </div>
            <div className='home__left left1'>
                    {
                        data.filter((article) => { return article.category === "technology" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                fulldescription = {n.description}
                                author={n.author}
                            />
                        ))
                    }
                </div>
            <div className='home__left left1'>
                    {
                        data.filter((article) => { return article.category === "food" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                fulldescription = {n.description}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <h1 style={{marginTop:"40px", display : "inline-block"}}>Latest Articles</h1>
                
                <h1 className='Top' >Top Posts</h1>
                <hr style={{width:"200px",  thickness:"20px",}} />
                

                <div className='rightbar2'>
                    {
                        data.filter((article) => { return article.category === "mix" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                fulldescription = {n.description}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <div className="sidebar2">
                    {
                        data.filter((article) => { return article.category === "mix" }).map((n) => (
                            <SmallCard
                                articleid={n.id}
                                imgUrl={n.Image}
                                description={n.description.slice(0, 200)}
                                fulldescription = {n.description}
                                title={n.title.slice(0, 25)}
                                author={n.author}
                            />
                        ))
                    }

                    <div className='advertisement'>
                        <p>Advertisement</p>
                    </div>
                </div>
                <h1 style={{marginTop:"40px", display : "inline-block"}}>Latest Stories</h1>
                <hr />
                <div className='home__left'>
                    {
                        data.filter((article) => { return article.category === "footer1" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                fulldescription = {n.description}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className='home__left'>
                    {
                        data.filter((article) => { return article.category === "footer2" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                fulldescription = {n.description}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className='home__left'>
                    {
                        data.filter((article) => { return article.category === "footer3" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                fulldescription = {n.description}
                                author={n.author}
                            />
                        ))
                    }
                </div>
    </div>
    </div>
)}

export default Home