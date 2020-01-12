import React, { useEffect, useState } from 'react'
import of from 'await-of'

import { MovieAPIs } from '../api'

import Card from '../components/Card'
import CardList from '../components/CardList'

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
        <section>
            <article>
                <h2>LATEST</h2>
                <CardList>
                    {
                        result && result.latest && <Card key={ result.latest.id } id={ result.latest.id } title={ result.latest.title } posterPath={ result.latest.poster_path } releaseDate={ result.latest.release_date } voteAverage={ result.latest.vote_average } />
                    }
                </CardList>
            </article>

            <article>
                <h2>UPCOMING</h2>
                <CardList>
                    {
                        result && result.upcoming && result.upcoming.map(({ id, poster_path, release_date, title, vote_average }: any) => (<Card key={ id } id={ id } title={ title } posterPath={ poster_path } releaseDate={ release_date.slice(0, 4) } voteAverage={ vote_average } />))
                    }
                </CardList>
            </article>

            <article>
                <h2>UPCOMING</h2>
                <CardList>
                    {
                        result && result.nowPlaying && result.nowPlaying.map(({ id, poster_path, release_date, title, vote_average }: any) => (<Card key={ id } id={ id } title={ title } posterPath={ poster_path } releaseDate={ release_date.slice(0, 4) } voteAverage={ vote_average } />))
                    }
                </CardList>
            </article>

            <article>
                <h2>UPCOMING</h2>
                <CardList>
                    {
                        result && result.topRated && result.topRated.map(({ id, poster_path, release_date, title, vote_average }: any) => (<Card key={ id } id={ id } title={ title } posterPath={ poster_path } releaseDate={ release_date.slice(0, 4) } voteAverage={ vote_average } />))
                    }
                </CardList>
            </article>

            <article>
                <h2>UPCOMING</h2>
                <CardList>
                    {
                        result && result.popular && result.popular.map(({ id, poster_path, release_date, title, vote_average }: any) => (<Card key={ id } id={ id } title={ title } posterPath={ poster_path } releaseDate={ release_date.slice(0, 4) } voteAverage={ vote_average } />))
                    }
                </CardList>
            </article>
        </section>
    )
}

export default HomePage
