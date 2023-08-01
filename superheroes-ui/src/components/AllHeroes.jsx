import React, { useEffect } from 'react'
import HeroDetails from './HeroDetails'
import Row from 'react-bootstrap/Row'
import { useState } from 'react'
import { getAllHeroes } from '../service/axios-common'

const AllHeroes = () => {

    const [total, setTotal] = useState(0);
    const totalCountHandler = (name) => {
        console.log(name);
        setTotal(total + 1);
    }
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        getHeroesFromAPI();
    },
        []
    )

    const getHeroesFromAPI = () => {
        getAllHeroes()
            .then(res => {
                setHeroes(res.data);
            })
            .catch(err => {
                setHeroes([]);
                console.log(err);
            })
    }
    return (
        <>
            <h1>Total count is: {total}</h1>
            <Row >
                {heroes.map(hero => (
                    <div className='container' key={hero.id}>
                        <HeroDetails info={hero} parentCount={totalCountHandler} />
                    </div>
                ))}
            </Row>
        </>
    )
}

export default AllHeroes