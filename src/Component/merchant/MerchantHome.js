import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import { useLocalStorage } from "../../app/useLocalStorage"
import { apiUrl, baseUrl, get, selectLoading } from "../../features/api/Api"

const getQueryParam = (page, size) => {
    let map = new Map()
    map.set("page", page)
    map.set("size", size)
    return map
}

export default function MerchantHome() {
    const loading = useSelector(selectLoading)
    
    const [user, setUser] = useLocalStorage("user", "{}")
    const [info, setInfo] = useState({})
    const [menus, setMenus] = useState([])

    const pageSize = 10
    const currencyFormat = new Intl.NumberFormat("id-ID", { 
        style: "currency", 
        currency: "IDR",
        minimumFractionDigits: 0
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const fetchMenus = () => {
        // dont fetch because all data already fetched
        if (info.next === null) return
        // assemble request, use info.next if not null
        let request = {
            endpoint: apiUrl.menuAll + user.id,
            queryParam: getQueryParam(0, pageSize)
        }
        if (info.next !== undefined) {
            request = { endpoint: baseUrl.prod + info.next }
        }

        dispatch(get(request)).then (res => {
            const data = res.payload.data
            setInfo(data.info)
            setMenus(menus.concat(data.menus))
        })
    }

    useEffect(() => {
        fetchMenus()
    }, [])

    window.onscroll = () => {
        let isBottomPage = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
        if (isBottomPage) {
            fetchMenus()
        }
    }

    return (
        <div>
            <p>Merchant Home</p>
            <p>Welcome Merchant {user.fullName}</p>
            <div className="container">
                <div className="d-flex flex-row-reverse">
                    <button type="button" className="btn btn-primary float-right" onClick={() => navigate("/merchant/menu/create")}>
                        Add Menu
                    </button>
                </div>
            </div>
            <div>
                {menus.length > 0 && menus.map((menu) => {
                    return (
                        <div className="container py-4 border-top border-bottom" key={menu.id}>
                            <div className="row">
                                <div className="col">
                                    <img src={menu.imageUrl} className="img-thumbnail"/>
                                </div>
                                <div className="col-8">
                                    <div className="row">{menu.name}</div>
                                    <small className="row">{menu.description}</small>
                                    <div className="row">{currencyFormat.format(menu.price)}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {loading && <div>loading...</div>}
            </div>
            
            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    ...
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}