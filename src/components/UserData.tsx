import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, fetchData1 } from '../services/userApi/user';
import { getUserData } from '../store/features/user/userSelectors';
import { AppDispatch } from '../store/store';


function UserData() {
    const [user, setUser] = useState<any[]>([])
    const dispatch = useDispatch<AppDispatch>()
    //  const data1 = useSelector(getUserData);
    const data2 = useSelector(getUserData);

    useEffect(() => {
        // dispatch(fetchData())
        dispatch(fetchData1())
    }, [])

    useEffect(() => {
        // console.log('start:::::', data2)
        setUser(data2?.slice(-10))
    }, [data2])

    return (
        <div className='flex justify-center items-center' >
            <div className='w-[30%] bg-gray-100 shadow-xl p-8'>
                <p className='text-2xl font-bold'> User data list from Api (last10):::</p>
                {
                    user?.length > 0 &&
                    user.slice(-10).map((item, i) => (
                        <div key={i}>
                            <li> {item?.API}</li>
                        </div>
                    ))
                }
            </div>



        </div>
    )
}

export default UserData