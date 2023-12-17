import React, { useEffect, useState }  from "react";
import Card from "./Card";
import axios from "axios";

const CardCount = () => {
    const [counts, setCounts] = useState([]);

    // GET COUNTS 
    const getCounts = async () => {
        try {
            const data = await axios.get('https://befinalprojectbinar-production.up.railway.app/api/admin/counts', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setCounts(data.data.data);
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCounts()
    }, [])

    return (
        <>
        <div className="flex mt-16 justify-between"> 
            <Card
                totalUser= {counts.total_user}
                countClassUser= "Active Users"
                variant="darkBlue" 
            />
            <Card
                totalUser= {counts.total_course}
                countClassUser= "Active Class"
                variant="success" 
            />
            <Card
                totalUser= {counts.total_premium_course}
                countClassUser= "Premium Class"
                variant="lightBlue" 
            />
        </div>
        </>
    )
}

export default CardCount;