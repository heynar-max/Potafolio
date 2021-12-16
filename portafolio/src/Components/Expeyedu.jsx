import React from 'react'
import styled from 'styled-components'
import { Icon } from '../Styles/Icons'
import Expeyeduitem from './Expeyeduitem'

const Expeyedu = () => {
    return (
        <ExpeyeduStiled>
            

            <div className='container'>
            <div className='h3'>Experiencia & Educación</div>
                <div className='right-content'>
                <div className='caja'>
                    <Icon className='fa fa-graduation-cap'></Icon>
                    <Expeyeduitem 
                        title={'bachiller '}
                        year={'1999-2004'}
                        subtitle={'Tulio Enrique Tascón'}
                        text={'lorem jahyebdkjdjesyhak jjedejdkajdhed jdekjdeijksd kdjedhaksdj'}
                    />
                    <Icon className='fa fa-graduation-cap'></Icon>
                    <Expeyeduitem 
                        title={'Sistemas'}
                        year={'2021'}
                        subtitle={'Universidad Tecnologica de pereira'}
                        text={'lorem jahyebdkjdjesyhak jjedejdkajdhed jdekjdeijksd kdjedhaksdj'}
                    />
                    
                    </div>
                    
                    <div className='caja1'>
                    <Icon className='fa fa-suitcase'></Icon>
                    <Expeyeduitem 
                        title={'Diseñador de estructura 3d'}
                        year={'2020'}
                        subtitle={'Vista 3D'}
                        text={'lorem jahyebdkjdjesyhak jjedejdkajdhed jdekjdeijksd kdjedhaksdj'}
                    />
                    <Icon className='fa fa-suitcase'></Icon>
                    <Expeyeduitem 
                        title={'Programador Junior'}
                        year={'2021'}
                        subtitle={'Vista 3D'}
                        text={'lorem jahyebdkjdjesyhak jjedejdkajdhed jdekjdeijksd kdjedhaksdj'}
                    />
                    </div>
                </div>
            </div>
        </ExpeyeduStiled>
    )
}

const ExpeyeduStiled = styled.div`
    width: 100%;
    display: flex;
    margin-top: 1rem;
    justify-content: center;
    
    

    i{
            color: #fff;
            display: inline-block;
            width: 100px;
            height: 40px;
            line-height: 36px;
            text-align: center;
            border-radius: 50%;
            margin-right: 1px;
            background: #fdb404;
            font-size: 20px;
            @media screen and (max-width: 780px){
                color: #fff;
                display: inline-block;
                width: 35px;
                height: 35px;
                line-height: 36px;
                text-align: center;
                border-radius: 50%;
                margin-right: 1px;
                background: #fdb404;
                font-size: 20px;
            }
        }
.container{
    z-index:-1;
}
    
.caja{
        display: flex;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        
        
        @media screen and (max-width: 780px){
                flex-direction: column;
            }

        h5{
                font-size: 1.2rem;
                color: var(--color-letra-blanco);
                font-family: 'Oswald', sans-serif;
                font-weight: 400;
                text-transform: uppercase;
                
        }

        h6{
                font-size: 1.2rem;
                font-weight: 400;
                color: var(--color-letra-blanco);
                font-family: 'Oswald', sans-serif;
                text-transform: uppercase;

                span{
                        font-size: 1.1rem;
                        font-family: 'Oswald', sans-serif;
                        font-weight: 100;
                        text-transform: capitalize;
                        border-left: 1px solid #bdbcbd;
                        color: #bdbcbd;
                        margin-left: 4px;
                        padding-left: 8px;
                    }
        }

        p{
            line-height: 1.8;
        margin-bottom: 0;
        font-weight: 400;
        color: #bdbcbd;
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid rgba(255, 255, 255, .05);
        font-family: 'Open Sans', sans-serif;
        }

        
    }
.caja1{
    margin-top:1rem;
        display: flex;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width: 780px){
                flex-direction: column;
            }
        h5{
                font-size: 1.2rem;
                color: var(--color-letra-blanco);
                font-family: 'Oswald', sans-serif;
                font-weight: 400;
                text-transform: uppercase
        }

        h6{
                font-size: 1.2rem;
                color: var(--color-letra-blanco);
                font-weight: 400;
                font-family: 'Oswald', sans-serif;
                text-transform: uppercase;

                span{
                        font-family: 'Oswald', sans-serif;
                        font-size: 1.1rem;
                        font-weight: 100;
                        text-transform: capitalize;
                        border-left: 1px solid #bdbcbd;
                        color: #bdbcbd;
                        margin-left: 4px;
                        padding-left: 8px;
                    }
        }

        p{
            line-height: 1.8;
        margin-bottom: 0;
        font-weight: 400;
        color: #bdbcbd;
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid rgba(255, 255, 255, .05);
        font-family: 'Open Sans', sans-serif;
        }
    }

    .h3{
                font-size: 1.5rem;
                color: var(--color-letra-blanco);
                font-family: 'Oswald', sans-serif;
                text-transform: uppercase;
                justify-content: center;
                display: flex;
                margin-bottom:2rem;

    /* width: 100%;
    display: flex;
    margin-top: 1rem;
    justify-content: center;

    .h3{
                font-size: 1.5rem;
                color: var(--color-letra-blanco);
                font-family: 'Oswald', sans-serif;
                text-transform: uppercase;
                justify-content: center;
                display: flex;   
                @media screen and (max-width: 1250px){
                    font-size: 2rem;
                }
                @media screen and (max-width: 290px){
                                font-size: 1.5rem;
                            }
                
            }


        @media screen and (max-width:1250px){
        flex-direction: column;
        .left-content{
            display: flex;
            justify-content: center;    
            }
        
            
        }
    }
    }


    
    
    .container{
        width: 100%;
        margin-left:2%;
        z-index:-1;
        
        @media screen and (max-width: 1250px){
            width: 100%;
                }
        .right-content{
            width: 100%;
            margin-left:1%;
            display: flex;
            justify-content: center;
            @media screen and (max-width: 1250px){
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-content: center;
            flex-wrap: wrap;
            align-items: center;

            
            }

            
            .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            position: relative;
            color: #fff;
            font-size: 20px;
            
            @media screen and (max-width: 780px){
                flex-direction: column;
            }
            
            
                .info-title{
                    padding-right: 5rem;
                    
                    li{
                        color: var(--color-fondo);
                        margin-top: 6%;
                        list-style: none;
                        i{
                            color: #fff;
                            display: inline-block;
                            width: 35px;
                            height: 35px;
                            line-height: 35px;
                            text-align: center;
                            border-radius: 50%;
                            margin-right: 5px;
                            background: #fdb404;
                            font-size: 15px;
                        }
                        
                        b{
                            color: var(--color-letra-blanco);
                            font-family: 'Teko', sans-serif;
                            font-weight: 600;
                            font-size: 2rem;
                            @media screen and (max-width: 1487px){
                                font-size: 1.5rem;
                            }
                            @media screen and (max-width: 1250px){
                                font-size: 2rem;
                            }
                            @media screen and (max-width: 880px){
                                font-size: 1.6rem;
                            }
                            @media screen and (max-width: 780px){
                                font-size: 1.5rem;
                            }
                            @media screen and (max-width: 374px){
                                font-size: 1rem;
                            }
                            @media screen and (max-width: 290px){
                                font-size: .8rem;
                            }
                        }
                    }
                    span{
                        font-family: 'Oswald', sans-serif;
                        color: #eee;
                        font-weight: 100;
                        text-transform: capitalize;
                        @media screen and (max-width: 1487px){
                                font-size: 1.1rem;
                            }
                            @media screen and (max-width: 1250px){
                                font-size: 1.5rem;
                            }
                            @media screen and (max-width: 880px){
                                font-size: 1.2rem;
                            }
                            @media screen and (max-width: 780px){
                                font-size: 1.5rem;
                            }
                            @media screen and (max-width: 374px){
                                font-size: 1rem;
                            }
                            @media screen and (max-width: 290px){
                                font-size: .8rem;
                            }
                    }
                }
                .info{
                    padding-right: 3rem;
                    li{
                        font-weight: 600;
                        color: var(--color-fondo);
                        margin-top: 6%;
                    
                        i{
                            color: #fff;
                            display: inline-block;
                            width: 35px;
                            height: 35px;
                            line-height: 35px;
                            text-align: center;
                            border-radius: 50%;
                            margin-right: 5px;
                            background: #fdb404;
                            font-size: 15px;

                        }
                        b{
                            color: var(--color-letra-blanco);
                            font-family: 'Teko', sans-serif;
                            font-weight: 600;
                            font-size: 2rem;
                            @media screen and (max-width: 1487px){
                                font-size: 1.5rem;
                            }
                            @media screen and (max-width: 1250px){
                                font-size: 2rem;
                            }
                            @media screen and (max-width: 880px){
                                font-size: 1.6rem;
                            }
                            @media screen and (max-width: 780px){
                                font-size: 1.5rem;
                            }
                            @media screen and (max-width: 374px){
                                font-size: 1rem;
                            }
                            @media screen and (max-width: 290px){
                                font-size: .8rem;
                            }
                        }
                    }
                    span{
                        font-family: 'Oswald', sans-serif;
                        color: #eee;
                        font-weight: 100;
                        text-transform: capitalize;
                        @media screen and (max-width: 1487px){
                                font-size: 1rem;
                            }
                            @media screen and (max-width: 1250px){
                                font-size: 1.5rem;
                            }
                            @media screen and (max-width: 880px){
                                font-size: 1.2rem;
                            }
                            @media screen and (max-width: 780px){
                                font-size: 1.5rem;
                            }
                            @media screen and (max-width: 374px){
                                font-size: 1rem;
                            }
                            @media screen and (max-width: 290px){
                                font-size: .8rem;
                            }
                    }
                }
            }
            
        }
    } */
`;

export default Expeyedu
