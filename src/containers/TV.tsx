import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import of from 'await-of'
import styled from 'styled-components'

import { TvAPIs } from '../api'

import Card from '../components/Card'
import CardList from '../components/CardList'

const Container = styled.section`
    height: calc(100vh - 100px);
    padding: 100px 0;
`

const Article = styled.article`
    margin-bottom: 48px;
    &:last-child {
        margin-bottom: 0;
    }
`

const Title = styled.h2`
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
    padding: 8px 0;
`

const useFetch = () => {
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const [response, error] = await of (Promise.all([
                TvAPIs.latest(),
                TvAPIs.airingToday(),
                TvAPIs.onTheAir(),
                TvAPIs.popular(),
                TvAPIs.topRated()
            ]))

            if (error) {
                throw error
            }

            setResult({
                latest: response[0].data,
                airingToday: response[1].data.results,
                onTheAir: response[2].data.results,
                popular: response[3].data.results,
                topRated: response[4].data.results
            })
            setLoading(false)
        }

        fetchData()
    }, [])

    return {
        result,
        loading
    }
}

const TV: React.FC = () => {
    const { result, loading }: any = useFetch()

    if (loading) {
        return <h1>Loading...</h1>
    }

    console.log(result.latest)

    return (
        <Container>
            <Helmet title={ 'TV | mymovietaste' } />
            <Article>
                <Title>Latest</Title>
                <CardList>
                    {
                        result && result.latest && <Card key={ result.latest.id } id={ result.latest.id } title={ result.latest.name } posterPath={ result.latest.poster_path } year={ result.latest.first_air_date.slice(0, 4) } voteAverage={ result.latest.vote_average } />
                    }
                </CardList>
            </Article>

            <Article>
                <Title>Airing Today</Title>
                <CardList>
                    {
                        result && result.airingToday && result.airingToday.map(({ id, poster_path, first_air_date, name, vote_average }: any) => (<Card key={ id } id={ id } title={ name } posterPath={ poster_path } year={ first_air_date.slice(0, 4) } voteAverage={ vote_average } />))
                    }
                </CardList>
            </Article>

            <Article>
                <Title>On The Air</Title>
                <CardList>
                    {
                        result && result.onTheAir && result.onTheAir.map(({ id, poster_path, first_air_date, name, vote_average }: any) => (<Card key={ id } id={ id } title={ name } posterPath={ poster_path } year={ first_air_date.slice(0, 4) } voteAverage={ vote_average } />))
                    }
                </CardList>
            </Article>

            <Article>
                <Title>Popular</Title>
                <CardList>
                    {
                        result && result.popular && result.popular.map(({ id, poster_path, first_air_date, name, vote_average }: any) => (<Card key={ id } id={ id } title={ name } posterPath={ poster_path } year={ first_air_date.slice(0, 4) } voteAverage={ vote_average } />))
                    }
                </CardList>
            </Article>

            <Article>
                <Title>Top Rated</Title>
                <CardList>
                    {
                        result && result.topRated && result.topRated.map(({ id, poster_path, first_air_date, name, vote_average }: any) => (<Card key={ id } id={ id } title={ name } posterPath={ poster_path } year={ first_air_date.slice(0, 4) } voteAverage={ vote_average } />))
                    }
                </CardList>
            </Article>
        </Container>
    )
}

export default TV
