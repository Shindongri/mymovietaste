import React, { useEffect, useState } from 'react'
import of from 'await-of'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'

import { MovieAPIs } from '../api'

const Container = styled.section`
    color: #ffffff;
    display: flex;
    padding: 100px 0;
    height: calc(100vh - 100px);
`

const CoverImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
    object-fit: contain;
    align-self: start;
`

const Content = styled.div`
    margin: 4px 4px 4px 24px;
`

const Title = styled.h2`
    font-size: 24px;
`
const Summary = styled.small`
    display: flex;
    padding: 20px 0;
`

const Overview = styled.p`
    font-size: 16px;
    opacity: 0.7;
    line-height: 1.2;
`

interface IGenre {
    id: number;
    name: string;
}

const useFetch = (id: string) => {
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const [response, error] = await of (MovieAPIs.detail(id))

            if (error) {
                throw error
            }

            setResult(response.data)
            setLoading(false)
        }

        fetchData()
    }, [])

    return {
        result,
        loading
    }
}

const renderGenres = (genres: IGenre[]) => genres.map(({ name }) => name).join(' / ')

const renderSummary = (summary: string[]) => summary.join(' • ')

const Detail: React.FC<RouteComponentProps<{ id: string }>> = ({
   location: { pathname },
   history: { push },
   match: { params }
}) => {
    const { result, loading }: any = useFetch(params.id)

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <Container>
            <CoverImage src={ `${ process.env.REACT_APP_IMAGE_PREFIX }${ result.poster_path }` } alt="" />
            <Content>
                <Title>{ result.title }</Title>
                <Summary>{ renderSummary([result.release_date.slice(0, 4), result.runtime, renderGenres(result.genres)]) }</Summary>
                <Overview>{ result.overview }</Overview>
            </Content>
        </Container>
    )
}

export default withRouter(Detail)
