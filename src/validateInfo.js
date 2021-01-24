export default function validateInfo(values) {
    let errors = {}

    if(!values.brand.trim()) {
        errors.brand = 'Brand required';
    }

    if(!values.model.trim()) {
        errors.model = 'Model required';
    }

    if(!values.year.trim()) {
        errors.year = 'Year required';
    }else if(values.year.trim() >2021 || values.year.trim() < 1900){
        errors.year = 'Please input correct year'
    }

    if(!values.vin.trim()) {
        errors.vin = 'VIN required';
    }

    if(!values.price.trim()) {
        errors.price = 'Price required';
    }

    return errors

}