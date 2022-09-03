import {fetch} from "next/dist/compiled/@edge-runtime/primitives/fetch";


// ref:https://bobbyhadz.com/blog/typescript-binding-element-implicitly-has-an-any-type
export default function Search({data, solr_data}:any){
    return (
        <div>
            <p>Hello Searcher, {data.name}</p>
            <p>Solr id: {solr_data.id}</p>
            <p>Solr key: {solr_data.key}</p>
        </div>
    )
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    console.log(process.env.SOLR_HOST)
    const res = await fetch(process.env.SAMPLE_HOST)
    const data = await res.json()
    const solr_res = await fetch(process.env.SOLR_HOST)
    const solr_data_ = await solr_res.json()

    const solr_data = solr_data_.response.docs[0]
    console.log(solr_data)

    // Pass data to the page via props
    return { props: { data, solr_data } }
}