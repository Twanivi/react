import { useState } from "react";

export const FormUsers = ({setFormInputData}) => {
    const [profileData, setProfileData] = useState({
        name: '',
        username: '',
        email: '',
        address: ''
    })

    const handleCreateNewProfile = () => {
        setFormInputData(profileData);
    }

    const handleSetData = (data) => {
        setProfileData(prevState => ({
            ...prevState,
            ...data
        }))
    }

    return (
        <div>
            <p>Name:</p>
            <input value={profileData.name} onChange={event => handleSetData({name: event.target.value})} />
            <p>Nik:</p>
            <input value={profileData.username} onChange={event => handleSetData({username: event.target.value})} />
            <p>Email:</p>
            <input value={profileData.email} onChange={event => handleSetData({email: event.target.value})} />
            <p>Address:</p>
            <input value={profileData.address} onChange={event => handleSetData({address: event.target.value})} />
            <div>
                <button onClick={handleCreateNewProfile}>
                    Create new Profile
                </button>
            </div>
        </div>
    )

}