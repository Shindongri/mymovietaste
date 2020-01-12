import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import of from 'await-of'
import styled from 'styled-components'

import { MovieAPIs } from '../api'

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
                MovieAPIs.latest(),
                MovieAPIs.upcoming(),
                MovieAPIs.nowPlaying(),
                MovieAPIs.topRated(),
                MovieAPIs.popular(),
            ]))

            if (error) {
                throw error
            }

            setResult({
                latest: response[0].data,
                upcoming: response[1].data.results,
                nowPlaying: response[2].data.results,
                topRated: response[3].data.results,
                popular: response[4].data.results
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

const HomePage = () => {
    const { result, loading }: any = useFetch()

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <Container>
            <Helmet title={ 'Movie | mymovietaste' } />
            <Article>
                <Title>Latest</Title>
                <CardList>
                    {
                        result && result.latest && <Card key={ result.latest.id } id={ result.latest.id } title={ result.latest.title } posterPath={ result.latest.poster_path } year={ result.latest.release_date } voteAverage={ result.latest.vote_average } isMovie />
                    }
                </CardList>
            </Article>

            <Article>
                <Title>Upcoming</Title>
                <CardList>
                    {
                        result && result.upcoming && result.upcoming.map(({ id, poster_path, release_date, title, vote_average }: any) => (<Card key={ id } id={ id } title={ title } posterPath={ poster_path } year={ release_date.slice(0, 4) } voteAverage={ vote_average } isMovie />))
                    }
                </CardList>
            </Article>

            <Article>
                <Title>Now Playing</Title>
                <CardList>
                    {
                        result && result.nowPlaying && result.nowPlaying.map(({ id, poster_path, release_date, title, vote_average }: any) => (<Card key={ id } id={ id } title={ title } posterPath={ poster_path } year={ release_date.slice(0, 4) } voteAverage={ vote_average } isMovie />))
                    }
                </CardList>
            </Article>

            <Article>
                <Title>Top Rated</Title>
                <CardList>
                    {
                        result && result.topRated && result.topRated.map(({ id, poster_path, release_date, title, vote_average }: any) => (<Card key={ id } id={ id } title={ title } posterPath={ poster_path } year={ release_date.slice(0, 4) } voteAverage={ vote_average } isMovie />))
                    }
                </CardList>
            </Article>

            <Article>
                <Title>Popular</Title>
                <CardList>
                    {
                        result && result.popular && result.popular.map(({ id, poster_path, release_date, title, vote_average }: any) => (<Card key={ id } id={ id } title={ title } posterPath={ poster_path } year={ release_date.slice(0, 4) } voteAverage={ vote_average } isMovie />))
                    }
                </CardList>
            </Article>
        </Container>
    )
}

export default HomePage
