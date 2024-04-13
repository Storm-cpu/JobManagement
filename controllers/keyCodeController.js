import KeyCode from "../models/KeyCode.js";

const showKeyCode = async (req, res) => {
    try {
        const { typeCode } = req.query;
        const queryObject = {};
        if (typeCode) {
            queryObject.typeCode = typeCode;
        }
        let keycodes= await KeyCode.find(queryObject).sort('code');
        console.log(keycodes);
        let result= keycodes.map((item)=>{
            return {name:item.code,description:item.name}
        })
        return res.status(200).json({ result });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ err: "Error from server" })
    }
};

export { showKeyCode };
