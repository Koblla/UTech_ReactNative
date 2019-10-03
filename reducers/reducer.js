const initial = {
    messageList: [{sender:1, text:'salam'},{sender:1, text:'khoobi'}, {sender:1, text:'aloooo'},{sender:2, text:'salam'},{sender:2, text:':/'}]
}
const reducer = (state=initial,action) => {
    switch(action.type) {
        case 'SAVE_MESSAGE' : 
        return {
            ...state,
            messageList:[...messageList,{sender:2,text:action.payload}]
        }
}