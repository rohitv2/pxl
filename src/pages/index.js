import React, { useEffect, useState } from "react"
import axios from "axios"
import dynamic from "next/dynamic"
import PropTypes from "prop-types"

const Discovery = dynamic(() => import("../containers/discovery"))

export default function Home({ homeData }) {
    const [data, setData] = useState({ hero: [], curatedCreators: [], featuredProjects: [] })
    useEffect(() => {
        if (Object.keys(homeData).length > 0) {
            const newData = {
                hero: homeData.hero,
                curatedCreators: homeData.curatedCreators,
                featuredProjects: homeData.featuredProjects,
            }
            setData(newData)
        }
    }, [homeData])

    return <>{data.hero.length > 0 ? <Discovery details={data} /> : <></>}</>
}

const propsValidation = {
    hero: PropTypes.arrayOf(
        PropTypes.shape({
            backgroundImage: PropTypes.string,
            subtitle: PropTypes.string,
            titleLines: PropTypes.arrayOf(PropTypes.string),
        })
    ),
    curatedCreators: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            jobTitle: PropTypes.string,
        })
    ),
    featuredProjects: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            image: PropTypes.string,
            category: PropTypes.string,
            author: PropTypes.shape({
                jobTitle: PropTypes.string,
                name: PropTypes.string,
                avatar: PropTypes.string,
            }),
        })
    ),
}

Home.defaultProps = {
    homeData: {},
}

Home.propTypes = {
    homeData: PropTypes.shape(propsValidation),
}

export const getStaticProps = async () => {
    const result = await axios.get("https://mocki.io/v1/9445d88b-a625-47b1-8251-ec710590741d")
    const data = await result.data
    return {
        props: { homeData: data },
    }
}
