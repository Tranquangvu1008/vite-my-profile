import arrow from '/src/pages/Music/assets/icons/arrow.svg'

import 'swiper/css';
import './Discover.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Artist } from '../../../../models/Music/Artist';
import { Track } from '../../../../models/Music/Track';
import { Album } from '../../../../models/Music/Album';
import { useFetchApi } from './hooks/useFetchApi';
import { useOutletContext } from 'react-router-dom';
import { OutletContextType } from '../../../../../../interface';
import { useEffect, useState } from 'react';
import { FavoriteTrack } from './components/FavoriteTrack';
import NewAlbum from './components/NewAlbum';

const Discover = () => {
    const { collapsed } = useOutletContext<OutletContextType>();
    const { favArtist, favTracks, playMusic, newAlbum } = useFetchApi();

    const [swiperKey, setSwiperKey] = useState(0);

    useEffect(() => {
        setSwiperKey(prevKey => prevKey + 1);
    }, [collapsed]);


    return (
        <div className="sm:pt-10 sm:pb-2 px-2 overflow-x-auto">
            <div className="flex flex-col gap-[20px]">
                <div>
                    {/* <button onClick={() => {
                        setToken(localStorage.getItem('token') || "");

                    }}>clear</button> */}
                    <div className="flex justify-between mb-[19px]">
                        <h2 className="font-bold text-[20px]">Your favorite artists</h2>
                        <button className="flex font-light text-[15px] items-center"><p>View all</p><img src={arrow} alt='arrow' /></button>
                    </div>
                    <div className='mx-auto max-w-screen-xl'>
                        <Swiper
                            key={swiperKey} //!!forceUpdate by key
                            breakpoints={{
                                1280: {
                                    slidesPerView: collapsed ? 8 : 6,
                                },
                                1024: {
                                    slidesPerView: collapsed ? 6 : 4,
                                },
                                0: {
                                    slidesPerView: collapsed ? 4 : 2,
                                }
                            }}
                        >
                            {favArtist && favArtist.length > 0 && favArtist.map((value: Artist, index: any) => (
                                <SwiperSlide key={index}>
                                    <div className='text-center'>
                                        <img src={value.images[0].url} alt='artist' className='max-w-[102px] max-h-[102px] w-[10vw] h-[10vw] object-cover rounded-full mb-[10px] mx-auto' />
                                        <p className='font-light sm:text-[16px] text-[12px]'>{value.name}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-[19px]">
                        <h2 className="font-bold text-[20px]">Your favorite songs</h2>
                        <button className="flex font-light text-[15px] items-center"><p>View all</p><img src={arrow} alt='arrow' /></button>
                    </div>
                    <div className='mx-auto max-w-screen-xl'>
                        <Swiper
                            breakpoints={{
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 10
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 10
                                },
                                0: {
                                    slidesPerView: 3,
                                    spaceBetween: 10
                                }
                            }}
                        >
                            {favTracks && favTracks.length > 0 && favTracks.map((value: Track) => (
                                <SwiperSlide key={value.id}>
                                    <FavoriteTrack key={value.id} value={value} playMusic={playMusic} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-[19px]">
                        <h2 className="font-bold text-[20px]">New release albums</h2>
                        <button className="flex font-light text-[15px] items-center"><p>View all</p><img src={arrow} alt='arrow' /></button>
                    </div>
                    <div className='mx-auto max-w-screen-xl'>
                        <Swiper
                            breakpoints={{
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 10
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 10
                                },
                                0: {
                                    slidesPerView: 3,
                                    spaceBetween: 10
                                }
                            }}
                        >
                            {newAlbum && newAlbum.length > 0 && newAlbum.map((value: Album, index) => (
                                <SwiperSlide key={index}>
                                    <NewAlbum key={value.id} value={value} playMusic={playMusic} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover;
