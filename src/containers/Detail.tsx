import React, { useEffect, useState } from 'react'
import of from 'await-of'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { MovieAPIs } from '../api'

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
        <section>
            <div>{ result.title }</div>
            <div>{ result.overview }</div>
        </section>
    )
}

export default withRouter(Detail)
