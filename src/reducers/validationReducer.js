const initialProp = {
    errorFormTweet: false
};

export const validationReducer = (state = initialProp, action) => {
    switch (action.type) {
        case "VALIDATION_FORM_ADD_TWEET":
            return {
                ...state,
                errorFormTweet: action.payload
            };

        default:
            return state;
    }
}