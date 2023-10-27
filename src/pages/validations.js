import * as yup from "yup";


export const Schema = yup.object().shape({
    provider: yup.string().
    required("Provider Name is a required Feild")
    .min(4,"Provider Name must be greater than 4 letters")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),

    addressLine1:yup.string().required("Address Line 1 is a required Feild")
    .min(4,"Address Line 1 must be greater than 4 letters")
    .matches(/^[aA-zZ\s/-]+$/, "No Special Characters are allowed for this field "),
})
const today = new Date();
today.setHours(0, 0, 0, 0)
export const ProviderInformationval =

 yup.object().shape({

    rohini:yup.string().
    required("Rohini ID is a required Feild")
    .min(4,"Must be greater than 4 letters")
    .matches(/^[aA-zZ0-9\s]+$/, "Only alphabets and Numbers are allowed for this field "),

    rohiniExpiry:yup.date().required("Rohini Code Expiry Date is a required feild")
    .min(today,"Must not be in Past"),

    registrationExpiry:yup.date().required("Rohini Code Expiry Date is a required feild")
    .min(today,"Must not be in Past"),
})


export const InfrastructureDetailsval =

 yup.object().shape({

    doctorBedRatio:yup.string().
    required("Doctor-Bed Ratio is a required Feild")
    
    .matches(/^\d{1,2}:\d{1,2}$/, 'Ratio must in a valid format, e.g., 5:8'),

    nurseBedRatio:yup.string().
    required("Nurse-Bed Ratio is a required Feild")
    
    .matches(/^\d{1,2}:\d{1,2}$/, 'Ratio must be in a valid format, e.g., 5:8'),
    
    doctorBedRatioInIcu:yup.string().
    required("Doctor-Bed Ratio in ICU is a required Feild")
    
    .matches(/^\d{1,2}:\d{1,2}$/, 'Ratio must be in a valid format, e.g., 5:8'),

    nurseBedRatioInIcu:yup.string().
    required("Nurse-Bed Ratio in ICU is a required Feild")
    
    .matches(/^\d{1,2}:\d{1,2}$/, 'Ratio must be in a valid format, e.g., 5:8'),

    cSectionRate:yup
    .string()
    .required('C-Section Ratio is required')
    .matches(/^(\d{1,2}(\.\d{1,2})?)%$/, 'C-Section Ratio must be in a valid format, e.g., 25%'),
    

    websiteLink :
    yup
    .string()
    .required('Website Link is required')
    .matches(/^www\..+$/, 'Website Link must start with "www."'),
   
})



export const FinancialInformationval = yup.object().shape({
    accountType:yup.number("Account Type must be Integer")
    .required("Account type is a required Field")


});