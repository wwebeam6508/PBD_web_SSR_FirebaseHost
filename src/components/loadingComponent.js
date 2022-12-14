
import { MoonLoader } from 'react-spinners'
import loadingSCSS from '../styles/loading.module.scss'
export default function LoadingComponent() {
    const override = {
        display: 'block',
        margin: '0 auto',
        borderColor: 'red'
    }
    const color = "#36d7b7"
    return (
        <div className={loadingSCSS.main}>
            <MoonLoader
                color={color}
                loading={true}
                cssOverride={override}
                speedMultiplier={1.5}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}