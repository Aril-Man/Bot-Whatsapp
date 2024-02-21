const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));
const formatPhone = (phone) => {
    let newPhone = phone.toString();
    if (newPhone.substring(0, 1) != "6") {
        newPhone = newPhone.replace("08", "628");
    }else if (newPhone.includes("-")) {
        newPhone = newPhone.replace("-", "");
    }

    return newPhone + "@c.us";
}

module.exports = {
    sleep,
    formatPhone
}