
import useGeoCoding from "../hooks/useGeocoding"


export default function MapSearch({ setLocation }) {
    // addresss = address to latlng
    // reverse = latlng to address
    // const [mode, setMode] = useState("address")

    const { addressSearch } = useGeoCoding()

    function onSubmit(e) {
        e.preventDefault()

        const formData = new FormData(e.target); // Get form data
        const data = Object.fromEntries(formData.entries());

        addressSearch(data.query).then((val) => {
            console.log(val, "from search")
            setLocation([...val])
        })

    }

    return (
        <div className="z-50 flex border p-3 gap-3">
            <form onSubmit={onSubmit}>
                <input type="text" name="query" id="search-query" placeholder="Cari Alamat" />
                <button className="cursor-pointer" type="submit">Search</button>
            </form>
        </div>
    )
}
