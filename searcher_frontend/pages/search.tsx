import {fetch} from "next/dist/compiled/@edge-runtime/primitives/fetch";


// ref:https://bobbyhadz.com/blog/typescript-binding-element-implicitly-has-an-any-type
export default function Search({data}:any){
    return (
        <div>
            Hello Searcher, {data.name}
        </div>
    )
}

// This gets called on every request
export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch('http://localhost:3000/api/hello')
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}