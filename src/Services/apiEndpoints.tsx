export const endpoints ={
    // Organization
    CREATE_ORGANIZATION: `setup-organization`,
    GET_ONE_ORGANIZATION:``,
    GET_ADDITIONAL_DATA:``,
    GET_COUNTRY_DATA:`get-countries-data`,
    GET_CURRENCY_LIST:``,

    GET_ALL_ITEM: ``,
    GET_ONE_SUPPLIER:``,
    GET_ONE_PURCHASE_ORDER:``,
    GET_A_BILL:``,
    GET_DEBIT_NOTE:``,
    GET_PAYMENT:``,
    GET_CURRENCIES:``,
    ADD_CURRENCIES:``,
    DELETE_CURRENCIES:``,

    GET_ALL_TAX:"",
     // Login
     LOGIN: "/login",
     GET_OTP: "/verify-otp",

     // Supplier
    ADD_SUPPLIER: "add-suppliers",
    GET_ALL_SUPPLIER: "get-all-supplier",
  
    EDIT_SUPPLIER: "update-supplier",
    DELETE_SUPPLIER:"delete-supplier",
    GET_TAX_SUPPLIER: `supplier-additional-data`,
    UPDATE_SUPPLIER_STATUS: `update-supplier-status`,
    GET_ONE_SUPPLIER_HISTORY: `get-one-supplier-history`,

    GET_PAYMENT_TERMS: `get-all-payment-terms`,

     // get settingsData
     GET_SETTINGS_DATA: `get-settings`,
}