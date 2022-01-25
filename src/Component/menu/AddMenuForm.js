import { useState } from "react"
import { useDispatch } from "react-redux"
import { apiUrl, post } from "../../features/api/Api"

export default function AddMenuForm() {
    const dispatch = useDispatch()

    // TODO update state initial value
    const [name, setName] = useState("Ayam Goreng")
    const [imageUrl, setImageUrl] = useState("https://selerasa.com/wp-content/uploads/2015/12/images_daging_ayam-goreng-1200x720.jpg")
    const [price, setPrice] = useState(15000)
    const [description, setDescription] = useState("Ayam Goreng tanpa tepung")

    const handleOnChangeName = (e) => setName(e.target.value)
    const handleOnChangeImageUrl = (e) => setImageUrl(e.target.value)
    const handleOnChangePrice = (e) => setPrice(e.target.value)
    const handleOnChangeDescription = (e) => setDescription(e.target.value)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        // call create menu api
        dispatch(post({
            endpoint: apiUrl.menuCreate,
            data: {
                name: name,
                imageUrl: imageUrl,
                price: price,
                description: description
            }
        })).then(res => {
            console.log(res.payload)
        })
    }

    return (
        <div className="container">
            <form onSubmit={handleOnSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Menu Name</label>
                    <input type={"text"} className="form-control" id="name" aria-describedby="menuName" placeholder="Ayam Goreng" value={name} onChange={handleOnChangeName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="image-url">Image Url</label>
                    <input type={"text"} className="form-control" id="image-url" aria-describedby="imageUrl" placeholder="https://www.google.com/picture" value={imageUrl} onChange={handleOnChangeImageUrl}/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type={"number"} className="form-control" id="price" aria-describedby="menuPrice" placeholder="15000" value={price} onChange={handleOnChangePrice}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type={"text"} className="form-control" id="description" aria-describedby="menuDescription" placeholder="Lezat loh" value={description} onChange={handleOnChangeDescription}/>
                </div>
                <button type="submit" className="btn btn-primary">Add Menu</button>
            </form>
        </div>
    )
}