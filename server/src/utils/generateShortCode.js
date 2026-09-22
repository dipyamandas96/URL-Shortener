import shortid from "shortid";

const generateShortCode = () => {
    const id = shortid.generate()
    return id
}

export default generateShortCode;