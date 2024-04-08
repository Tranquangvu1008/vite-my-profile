import artist from '/src/pages/Music/assets/images/artist.jpg'
import arrow from '/src/pages/Music/assets/icons/arrow.svg'

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useStateProvider } from '../../../../../../utils/StateProvider';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Artist } from '../../../../../../models/Music/Artist';
import { Track } from '../../../../../../models/Music/Track';

export const Discover = () => {
    const [{ topArtist, topTracks, newReleaseAlbum }, dispatch] = useStateProvider();
    const [favArtist, setFavArtist] = useState<Artist[]>([])
    const [favTracks, setFavTracks] = useState<Track[]>([])

    useLayoutEffect(() => {
        setFavArtist(topArtist.items)
        setFavTracks(topTracks.items)
    }, [topArtist, topTracks])

    return (
        <div className="px-10 overflow-x-auto">
            <div className="flex flex-col gap-[40px] mb-10">
                <div>
                    <div className="flex justify-between mb-[19px]">
                        <h2 className="font-bold text-[20px]">Popular artists</h2>
                        <button className="flex font-light text-[15px] items-center"><p>View all</p><img src={arrow} alt='arrow' /></button>
                    </div>
                    <div className='mx-auto max-w-screen-xl'>
                        <Swiper
                            breakpoints={{
                                1024: {
                                    slidesPerView: 8,
                                },
                                0: {
                                    slidesPerView: 4,
                                }
                            }}
                        >
                            {favArtist && favArtist.length > 0 && favArtist.map((value: Artist, index: any) => (
                                <SwiperSlide key={index}>
                                    <div className='text-center'>
                                        <img src={value.images[0].url} alt='artist' className='max-w-[82px] max-h-[82px] w-[10vw] h-[10vw] object-cover rounded-full mb-[10px] mx-auto' />
                                        <p className='font-light sm:text-[16px] text-[12px]'>{value.name}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-[19px]">
                        <h2 className="font-bold text-[20px]">Popular songs</h2>
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
                            {favTracks && favTracks.length > 0 && favTracks.map((value: Track, index) => (
                                <SwiperSlide key={index}>
                                    <div className='text-center'>
                                        <img src={value.album.images[0].url} alt='artist' className='sm:w-[210px] sm:h-[248px] w-[110px] h-[148px] object-cover rounded-lg mb-[10px] mx-auto shadow-xl' />
                                        <h4 className='font-semibold sm:text-[18px] text-[14px]'>{value.name}</h4>
                                        <p className='font-light sm:text-[16px] text-[12px]'>{value.artists[0].name}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-[19px]">
                        <h2 className="font-bold text-[20px]">Popular albums</h2>
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
                            {[...Array(10)].map((_, index) => (
                                <SwiperSlide key={index}>
                                    <div className='text-center'>
                                        <img src={artist} alt='artist' className='sm:w-[210px] sm:h-[248px] w-[110px] h-[148px] object-cover rounded-lg mb-[10px] mx-auto shadow-xl' />
                                        <h4 className='font-semibold sm:text-[18px] text-[14px]'>Tên bài hát</h4>
                                        <p className='font-light sm:text-[16px] text-[12px]'>Tên nghệ sĩ</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
