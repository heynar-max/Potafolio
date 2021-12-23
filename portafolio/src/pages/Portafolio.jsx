import React from 'react'
import Title from '../Components/Title'
import { MainLayout } from '../Styles/Layouts'
import PortafolioCom from '../Components/PortafolioCom'

const Portafolio = () => {
    return (
        <>
            <MainLayout>
                <Title title={'mi'} title1={'portafolio'} span={'trabajos'}/>
                <PortafolioCom/>
            </MainLayout>
        </>
    )
}

export default Portafolio
