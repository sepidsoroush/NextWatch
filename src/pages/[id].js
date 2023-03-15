import {useRouter} from 'next/router'

export default function Movie() {
    const router = useRouter()
    const {id} = router.query
    return (
        <h1>
            Test : {id}
        </h1>
    )
}